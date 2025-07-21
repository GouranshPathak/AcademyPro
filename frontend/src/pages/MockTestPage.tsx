import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Input } from '@/components/ui/input';
import { ArrowRight, User, Edit2, CheckCircle, Clock, Trophy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import questionsData from '@/components/sections/questionData';

const subjects = ['Physics', 'Chemistry', 'Biology', 'Math'];

const MockTestPage = () => {
  const [showNamePopup, setShowNamePopup] = useState(true);
  const [userName, setUserName] = useState('');
  const [tempUserName, setTempUserName] = useState('');
  const [nameConfirmed, setNameConfirmed] = useState(false);
  const [editingName, setEditingName] = useState(false);
  const [usernameError, setUsernameError] = useState('');
  const [subject, setSubject] = useState('');
  const [startTest, setStartTest] = useState(false);
  const [responses, setResponses] = useState<{ [index: number]: number }>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [testStarted, setTestStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const questions = subject ? questionsData[subject] : [];
  const API_URL = import.meta.env.VITE_API_URL;

  // Timer effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (testStarted && timeLeft > 0 && !showResults) {
      timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            handleSubmit();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [testStarted, timeLeft, showResults]);

  // Function to check if username is available
  const checkUsernameAvailability = async (username: string) => {
    setIsLoading(true);
    setUsernameError('');
    try {
      const response = await fetch(`${API_URL}/mocktest/check-username`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
      });
      if (!response.ok) {
        const data = await response.json();
        setUsernameError(data.message || 'Username already taken. Please choose another.');
        setIsLoading(false);
        return false;
      }
      setIsLoading(false);
      return true;
    } catch (error) {
      setUsernameError('Error checking username. Please try again.');
      setIsLoading(false);
      return false;
    }
  };

  const handleNameSubmit = async () => {
    if (tempUserName.trim()) {
      const isAvailable = await checkUsernameAvailability(tempUserName.trim());
      if (isAvailable) {
        setUserName(tempUserName.trim());
        setNameConfirmed(true);
      }
    }
  };

  const handleNameConfirm = () => {
    setShowNamePopup(false);
  };

  const handleEditName = () => {
    setTempUserName(userName);
    setEditingName(true);
    setUsernameError(''); // Clear error on edit
  };

  const handleNameUpdate = async () => {
    if (tempUserName.trim()) {
      const isAvailable = await checkUsernameAvailability(tempUserName.trim());
      if (isAvailable) {
        setUserName(tempUserName.trim());
        setEditingName(false);
      }
    }
  };

  const handleStartTest = () => {
    setStartTest(true);
    setTestStarted(true);
  };

  const handleSubmit = async () => {
    let score = 0;
    questions.forEach((q, idx) => {
      if (responses[idx] === q.answer) score++;
    });
    setShowResults(true);
    setTestStarted(false);

    // Submit score to backend
    try {
      const response = await fetch(`${API_URL}/mocktest`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: userName, score, subject }),
      });
      if (!response.ok) {
        const data = await response.json();
        alert(`Error saving score: ${data.message}`);
      }
    } catch (error) {
      alert('Error saving score. Please try again.');
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getScore = () => {
    let score = 0;
    questions.forEach((q, idx) => {
      if (responses[idx] === q.answer) score++;
    });
    return score;
  };

  const resetTest = () => {
    setSubject('');
    setStartTest(false);
    setResponses({});
    setCurrentQuestionIndex(0);
    setShowResults(false);
    setTimeLeft(300);
    setTestStarted(false);
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto py-12 px-4">
        
        {/* Name Popup Modal */}
        <AnimatePresence>
          {showNamePopup && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl"
              >
                {!nameConfirmed ? (
                  <div className="text-center">
                    <motion.div
                      initial={{ y: -20 }}
                      animate={{ y: 0 }}
                      className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <User className="w-8 h-8 text-white" />
                    </motion.div>
                    <h2 className="text-2xl font-bold mb-2 text-gray-800">Welcome to Mock Test!</h2>
                    <p className="text-gray-600 mb-6">Please enter your name to get started</p>
                    {usernameError && (
                      <p className="text-red-500 text-sm mb-4">{usernameError}</p>
                    )}
                    <Input
                      placeholder="Enter your full name"
                      value={tempUserName}
                      onChange={(e) => setTempUserName(e.target.value)}
                      className="mb-4 text-center"
                      onKeyPress={(e) => e.key === 'Enter' && handleNameSubmit()}
                    />
                    <Button 
                      onClick={handleNameSubmit}
                      disabled={!tempUserName.trim() || isLoading}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                    >
                      {isLoading ? 'Checking...' : 'Continue'}
                    </Button>
                  </div>
                ) : (
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 }}
                      className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <CheckCircle className="w-8 h-8 text-white" />
                    </motion.div>
                    <h2 className="text-2xl font-bold mb-2 text-gray-800">Hi {userName}! 👋</h2>
                    <p className="text-gray-600 mb-6">Is this name correct?</p>
                    <div className="flex gap-3">
                      <Button 
                        variant="outline" 
                        onClick={() => setNameConfirmed(false)}
                        className="flex-1"
                      >
                        <Edit2 className="w-4 h-4 mr-2" />
                        Edit
                      </Button>
                      <Button 
                        onClick={handleNameConfirm}
                        className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                      >
                        Confirm
                      </Button>
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Header with user info */}
        {!showNamePopup && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex justify-between items-center mb-8"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Welcome back,</p>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-semibold text-gray-800">{userName}</h3>
                  {editingName ? (
                    <div className="flex items-center gap-2">
                      <Input
                        value={tempUserName}
                        onChange={(e) => setTempUserName(e.target.value)}
                        className="w-32 h-8 text-sm"
                        onKeyPress={(e) => e.key === 'Enter' && handleNameUpdate()}
                      />
                      <Button size="sm" onClick={handleNameUpdate} disabled={isLoading}>
                        {isLoading ? 'Checking...' : 'Save'}
                      </Button>
                    </div>
                  ) : (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleEditName}
                      className="p-1 h-auto"
                    >
                      <Edit2 className="w-4 h-4" />
                    </Button>
                  )}
                </div>
                {usernameError && editingName && (
                  <p className="text-red-500 text-sm mt-1">{usernameError}</p>
                )}
              </div>
            </div>
            {testStarted && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="flex items-center gap-2 bg-red-100 px-4 py-2 rounded-lg"
              >
                <Clock className="w-5 h-5 text-red-500" />
                <span className="font-mono text-lg font-semibold text-red-600">
                  {formatTime(timeLeft)}
                </span>
              </motion.div>
            )}
          </motion.div>
        )}

        {!showNamePopup && (
          <>
            <motion.h1
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
            >
              Mock Test Portal
            </motion.h1>

            <AnimatePresence mode="wait">
              {showResults ? (
                <motion.div
                  key="results"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="max-w-2xl mx-auto"
                >
                  <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                    <CardContent>
                      <div className="text-center">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.3 }}
                          className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"
                        >
                          <Trophy className="w-12 h-12 text-white" />
                        </motion.div>
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">Test Completed! 🎉</h2>
                        <div className="bg-white rounded-xl p-6 mb-6 shadow-lg">
                          <p className="text-6xl font-bold text-green-600 mb-2">{getScore()}/{questions.length}</p>
                          <p className="text-gray-600">Final Score</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                          <div className="bg-white rounded-lg p-4">
                            <p className="text-gray-600">Subject</p>
                            <p className="font-semibold text-lg">{subject}</p>
                          </div>
                          <div className="bg-white rounded-lg p-4">
                            <p className="text-gray-600">Time Taken</p>
                            <p className="font-semibold text-lg">{formatTime(300 - timeLeft)}</p>
                          </div>
                        </div>
                        <Button onClick={resetTest} className="w-full">
                          Take Another Test
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ) : !startTest ? (
                <motion.div
                  key="subject-selection"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  className="max-w-xl mx-auto"
                >
                  <Card className="p-8 shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
                    <CardContent>
                      <motion.h2
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        className="text-3xl font-semibold mb-6 text-center text-gray-800"
                      >
                        Choose Your Subject
                      </motion.h2>
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        {subjects.map((subj, i) => (
                          <motion.div
                            key={i}
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <Button
                              variant={subject === subj ? 'default' : 'outline'}
                              onClick={() => setSubject(subj)}
                              className={`w-full h-16 text-lg font-medium transition-all duration-300 ${
                                subject === subj 
                                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 transform scale-105 shadow-lg' 
                                  : 'hover:shadow-md hover:scale-102'
                              }`}
                            >
                              {subj}
                            </Button>
                          </motion.div>
                        ))}
                      </div>
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        <Button
                          disabled={!subject}
                          onClick={handleStartTest}
                          className="w-full h-14 text-lg bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 disabled:from-gray-400 disabled:to-gray-500"
                        >
                          Start Test <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ) : (
                <motion.div
                  key="test"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  className="max-w-3xl mx-auto"
                >
                  <Card className="p-8 shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
                    <CardContent>
                      <div className="flex justify-between items-center mb-6">
                        <h2 className="text-3xl font-semibold text-gray-800">{subject} Test</h2>
                        <div className="flex items-center gap-4">
                          <div className="text-sm text-gray-600">
                            Question {currentQuestionIndex + 1} of {questions.length}
                          </div>
                          <div className="w-32 bg-gray-200 rounded-full h-2">
                            <motion.div
                              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                              transition={{ duration: 0.5 }}
                            />
                          </div>
                        </div>
                      </div>

                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentQuestionIndex}
                          initial={{ x: 50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: -50, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {questions.length > 0 && (
                            <div className="space-y-6">
                              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                                <p className="text-xl font-medium text-gray-800">
                                  {currentQuestionIndex + 1}. {questions[currentQuestionIndex].q}
                                </p>
                              </div>
                              <RadioGroup
                                value={responses[currentQuestionIndex]?.toString() || ''}
                                onValueChange={(val) =>
                                  setResponses(prev => ({ ...prev, [currentQuestionIndex]: parseInt(val) }))
                                }
                                className="space-y-4"
                              >
                                {questions[currentQuestionIndex].options.map((opt, optIdx) => (
                                  <motion.div
                                    key={optIdx}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: optIdx * 0.1 }}
                                    className="flex items-center space-x-3 p-4 rounded-lg border-2 border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all cursor-pointer"
                                  >
                                    <RadioGroupItem 
                                      id={`${currentQuestionIndex}-${optIdx}`} 
                                      value={optIdx.toString()} 
                                      className="w-5 h-5"
                                    />
                                    <label 
                                      htmlFor={`${currentQuestionIndex}-${optIdx}`} 
                                      className="text-lg cursor-pointer flex-1"
                                    >
                                      {opt}
                                    </label>
                                  </motion.div>
                                ))}
                              </RadioGroup>
                            </div>
                          )}
                        </motion.div>
                      </AnimatePresence>

                      <div className="flex justify-between mt-8">
                        <Button
                          variant="outline"
                          onClick={() => setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1))}
                          disabled={currentQuestionIndex === 0}
                        >
                          Previous
                        </Button>
                        
                        {currentQuestionIndex === questions.length - 1 ? (
                          <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700">
                            Submit Test
                          </Button>
                        ) : (
                          <Button
                            onClick={() => setCurrentQuestionIndex(Math.min(questions.length - 1, currentQuestionIndex + 1))}
                            disabled={currentQuestionIndex === questions.length - 1}
                          >
                            Next <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </div>
    </div>
  );
};

export default MockTestPage;
 