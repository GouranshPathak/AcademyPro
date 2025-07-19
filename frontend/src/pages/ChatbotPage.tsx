import React, { useState, useRef, useEffect } from 'react';
// Assuming these are correctly set up in your project structure
// You might need to adjust the import paths if they are incorrect.
// For this example, we'll use placeholder components.

// --- Placeholder ShadCN UI Components (for standalone functionality) ---
const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div className={`bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-lg ${className}`}>
    {children}
  </div>
);
const CardContent = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);
const Button = ({ className, children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 ${className}`}
    {...props}
  >
    {children}
  </button>
);
Button.defaultProps = { variant: 'default' };
const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
    <input
        className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${props.className}`}
        {...props}
    />
);
const ScrollArea = React.forwardRef<HTMLDivElement, { className?: string; children: React.ReactNode }>(
    ({ className, children }, ref) => (
        <div ref={ref} className={`relative overflow-y-auto ${className}`}>
            {children}
        </div>
    )
);
const Toaster = () => <div id="toaster-placeholder" className="fixed top-0 right-0 p-4"></div>;
const toast = {
    error: (message: string) => {
        console.error("Toast Error:", message);
        const toaster = document.getElementById('toaster-placeholder');
        if (toaster) {
            const toastElement = document.createElement('div');
            toastElement.className = "bg-red-500 text-white p-3 rounded-lg shadow-lg mb-2";
            toastElement.innerText = message;
            toaster.appendChild(toastElement);
            setTimeout(() => {
                toastElement.remove();
            }, 3000);
        }
    }
};
// --- End Placeholder Components ---

import { Send } from 'lucide-react';
import { motion } from 'framer-motion';

interface ChatMessage {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

const ChatbotPage: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const sendMessage = async () => {
    if (!input.trim()) {
      toast.error('Please type a message');
      return;
    }

    const userMsg: ChatMessage = {
      id: Date.now(),
      text: input,
      sender: 'user',
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        // ✅ CORRECTED: Send the expected { prompt: "..." } object
        body: JSON.stringify({
          prompt: userMsg.text
        })
      });
      
      if (!response.ok) {
        // Handle HTTP errors like 400 or 500
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to get a response.');
      }

      const data = await response.json();
      
      // ✅ CORRECTED: The server sends back a `reply` property
      const botReply = data.reply || "I'm not sure how to help with that.";

      const botMsg: ChatMessage = {
        id: Date.now() + 1,
        text: botReply,
        sender: 'bot',
      };

      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error("Fetch error:", error);
      toast.error(error instanceof Error ? error.message : 'Error connecting to the server.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Scroll to the bottom of the chat on new messages
    if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="min-h-screen flex flex-col pt-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
      <style>{`
        :root {
            --background: 0 0% 100%;
            --foreground: 222.2 84% 4.9%;
            --primary: 222.2 47.4% 11.2%;
            --primary-foreground: 210 40% 98%;
            --muted: 210 40% 96.1%;
            --muted-foreground: 215.4 16.3% 46.9%;
            --border: 214.3 31.8% 91.4%;
            --input: 214.3 31.8% 91.4%;
            --ring: 222.2 84% 4.9%;
        }
        .dark {
            --background: 222.2 84% 4.9%;
            --foreground: 210 40% 98%;
            --primary: 210 40% 98%;
            --primary-foreground: 222.2 47.4% 11.2%;
            --muted: 217.2 32.6% 17.5%;
            --muted-foreground: 215 20.2% 65.1%;
            --border: 217.2 32.6% 17.5%;
            --input: 217.2 32.6% 17.5%;
            --ring: 212.7 26.8% 83.9%;
        }
        .bg-primary { background-color: hsl(var(--primary)); }
        .text-primary-foreground { color: hsl(var(--primary-foreground)); }
        .bg-background { background-color: hsl(var(--background)); }
        .text-foreground { color: hsl(var(--foreground)); }
        .bg-muted { background-color: hsl(var(--muted)); }
        .text-muted-foreground { color: hsl(var(--muted-foreground)); }
        .border-input { border-color: hsl(var(--border)); }
        .ring-ring { box-shadow: 0 0 0 2px hsl(var(--ring)); }
      `}</style>
      <Toaster />
      <div className="container mx-auto flex-1 flex flex-col py-12 px-4">
        <motion.h1
          className="text-4xl font-bold text-center mb-8 text-primary dark:text-primary-foreground"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Your AI Study Plan Companion
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="flex-1 flex flex-col max-w-2xl mx-auto w-full"
        >
          <Card className="flex-1 flex flex-col shadow-lg rounded-2xl bg-background">
            <CardContent className="p-0 flex-1 flex flex-col">
              <ScrollArea ref={scrollRef} className="flex-1 px-4 py-3 space-y-4">
                {messages.length === 0 ? (
                  <div className="text-center text-muted-foreground pt-4">
                    Ask me to create a personalized plan to begin!
                  </div>
                ) : (
                  messages.map(msg => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, x: msg.sender === 'user' ? 50 : -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`px-4 py-2 rounded-lg max-w-xs md:max-w-md shadow-md break-words ${
                          msg.sender === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-foreground'
                        }`}
                      >
                        {msg.text}
                      </div>
                    </motion.div>
                  ))
                )}
                 {loading && (
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex justify-start"
                    >
                        <div className="px-4 py-2 rounded-lg max-w-xs shadow-md bg-muted text-foreground">
                            <div className="flex items-center space-x-2">
                                <span className="w-2 h-2 bg-gray-500 rounded-full animate-pulse delay-75"></span>
                                <span className="w-2 h-2 bg-gray-500 rounded-full animate-pulse delay-150"></span>
                                <span className="w-2 h-2 bg-gray-500 rounded-full animate-pulse delay-300"></span>
                            </div>
                        </div>
                    </motion.div>
                )}
              </ScrollArea>

              <div className="flex items-center border-t border-border p-4">
                <Input
                  placeholder="Type your question..."
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && !loading && sendMessage()}
                  className="flex-1 mr-2 bg-transparent"
                  disabled={loading}
                />
                <Button onClick={sendMessage} disabled={loading}>
                  {loading ? 'Sending...' : <Send className="w-5 h-5" />}
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="text-center mt-8">
          <Button
            className="text-muted-foreground hover:text-foreground"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Return to top ↑
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;
