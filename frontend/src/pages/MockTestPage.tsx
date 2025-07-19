import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ArrowRight } from 'lucide-react';

const subjects = ['Physics', 'Chemistry', 'Biology', 'Math'];

const sampleQuestions = {
  Physics: [
    { q: 'What is Newton’s second law?', options: ['F=ma', 'E=mc^2', 'V=IR'], answer: 0 },
    { q: 'SI unit of power?', options: ['Joule', 'Watt', 'Newton'], answer: 1 }
  ],
  Chemistry: [
    { q: 'Atomic number of Oxygen?', options: ['6', '8', '10'], answer: 1 },
    { q: 'H2SO4 is?', options: ['Base', 'Salt', 'Acid'], answer: 2 }
  ],
  Biology: [
    { q: 'Largest organ in the human body?', options: ['Heart', 'Liver', 'Skin'], answer: 2 },
    { q: 'Photosynthesis uses?', options: ['CO2', 'O2', 'Nitrogen'], answer: 0 }
  ],
  Math: [
    { q: 'Derivative of x²?', options: ['x', '2x', 'x²'], answer: 1 },
    { q: 'Integral of 1/x?', options: ['ln|x|', 'x^2/2', '1/x²'], answer: 0 }
  ]
};

const MockTestPage = () => {
  const [subject, setSubject] = useState('');
  const [startTest, setStartTest] = useState(false);
  const [responses, setResponses] = useState<{ [index: number]: number }>({});

  const questions = subject ? sampleQuestions[subject as keyof typeof sampleQuestions] : [];

  const handleSubmit = () => {
    let score = 0;
    questions.forEach((q, idx) => {
      if (responses[idx] === q.answer) score++;
    });
    alert(`You scored ${score} / ${questions.length}`);
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-subtle">
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Mock Test Portal</h1>

        {!startTest ? (
          <div className="max-w-xl mx-auto">
            <Card className="p-6">
              <CardContent>
                <h2 className="text-2xl font-semibold mb-4">Choose a Subject</h2>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {subjects.map((subj, i) => (
                    <Button
                      key={i}
                      variant={subject === subj ? 'default' : 'outline'}
                      onClick={() => setSubject(subj)}
                    >
                      {subj}
                    </Button>
                  ))}
                </div>
                <Button
                  disabled={!subject}
                  onClick={() => setStartTest(true)}
                  className="w-full"
                >
                  Start Test <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            <Card className="p-6">
              <CardContent>
                <h2 className="text-2xl font-semibold mb-6">{subject} Test</h2>
                <form className="space-y-6">
                  {questions.map((q, idx) => (
                    <div key={idx} className="space-y-2">
                      <p className="font-medium">{idx + 1}. {q.q}</p>
                      <RadioGroup
                        value={responses[idx]?.toString() || ''}
                        onValueChange={(val) =>
                          setResponses(prev => ({ ...prev, [idx]: parseInt(val) }))
                        }
                      >
                        {q.options.map((opt, optIdx) => (
                          <div key={optIdx} className="flex items-center space-x-2">
                            <RadioGroupItem id={`${idx}-${optIdx}`} value={optIdx.toString()} />
                            <label htmlFor={`${idx}-${optIdx}`} className="text-sm">
                              {opt}
                            </label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  ))}
                </form>
                <Button className="mt-6 w-full" onClick={handleSubmit}>
                  Submit Test
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default MockTestPage;
