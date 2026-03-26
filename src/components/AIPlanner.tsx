import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Search, Send, Sparkles, X, MessageSquare, Bot, User, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const INITIAL_MESSAGE: Message = {
  id: '1',
  role: 'assistant',
  content: "Hi! I'm your AI Event Planner. 🌸 I can help you pick themes, estimate costs, and suggest decorations. What kind of event are you planning?",
  timestamp: new Date(),
};

export const AIPlanner = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const generateResponse = async (userInput: string) => {
    setIsLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    let response = "";
    const lowerInput = userInput.toLowerCase();

    if (lowerInput.includes('birthday')) {
      response = "For birthdays, I recommend our 'Pastel Paradise' or 'Golden Glamour' themes. For kids, the 'Jungle Safari' is a huge hit! Would you like to see a price estimate for any of these?";
    } else if (lowerInput.includes('budget') || lowerInput.includes('cost') || lowerInput.includes('price')) {
      response = "Our packages start at ₹2,499. For a premium experience with full-room decoration and lighting, it typically ranges from ₹8,000 to ₹15,000. You can also use our 'Smart Estimator' tool on the homepage!";
    } else if (lowerInput.includes('anniversary')) {
      response = "Anniversaries call for romance! ❤️ Our 'Red Rose Cabana' or 'Cloud 9' setups are perfect for creating that magical moment. We can also add personalized photo strings.";
    } else {
      response = "That sounds wonderful! We can certainly help with that. We offer custom themes for every occasion. Would you likes to tell me more about the location or your preferred color palette?";
    }

    const newMessage: Message = {
      id: Date.now().toString(),
      role: 'assistant',
      content: response,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, newMessage]);
    setIsLoading(false);
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    generateResponse(input);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <Card className="w-[350px] sm:w-[400px] h-[500px] mb-4 shadow-2xl border-pink-200 animate-in fade-in slide-in-from-bottom-4 duration-300 flex flex-col overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-pink-600 to-purple-600 text-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-white/20 p-1.5 rounded-lg">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <CardTitle className="text-lg">AI Event Assistant</CardTitle>
                  <p className="text-xs text-pink-100 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    Powered by AI
                  </p>
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="flex-1 overflow-hidden p-0 bg-pink-50/30">
            <ScrollArea className="h-full p-4" viewportRef={scrollRef}>
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      "flex gap-3 max-w-[85%]",
                      message.role === 'user' ? "ml-auto flex-row-reverse" : "mr-auto"
                    )}
                  >
                    <div className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                      message.role === 'user' ? "bg-purple-100" : "bg-pink-100"
                    )}>
                      {message.role === 'user' ? (
                        <User className="w-4 h-4 text-purple-600" />
                      ) : (
                        <Bot className="w-4 h-4 text-pink-600" />
                      )}
                    </div>
                    <div className={cn(
                      "p-3 rounded-2xl text-sm leading-relaxed",
                      message.role === 'user' 
                        ? "bg-purple-600 text-white rounded-tr-none" 
                        : "bg-white border border-pink-100 text-slate-700 shadow-sm rounded-tl-none"
                    )}>
                      {message.content}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex gap-3 max-w-[85%] mr-auto">
                    <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center shrink-0">
                      <Bot className="w-4 h-4 text-pink-600" />
                    </div>
                    <div className="bg-white border border-pink-100 p-3 rounded-2xl rounded-tl-none shadow-sm">
                      <Loader2 className="w-4 h-4 animate-spin text-pink-600" />
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
          </CardContent>

          <CardFooter className="p-3 border-t bg-white">
            <div className="flex w-full gap-2">
              <Input
                placeholder="Ask about themes, prices..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="border-pink-100 focus-visible:ring-pink-500"
              />
              <Button 
                onClick={handleSend}
                size="icon"
                className="bg-pink-600 hover:bg-pink-700 shrink-0"
                disabled={isLoading || !input.trim()}
              >
                <Send className="w-4 h-4 text-white" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      )}

      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="icon"
        className={cn(
          "w-14 h-14 rounded-full shadow-2xl transition-all duration-300",
          isOpen 
            ? "bg-white text-pink-600 hover:bg-pink-50 rotate-90" 
            : "bg-gradient-to-r from-pink-600 to-purple-600 text-white hover:scale-110 active:scale-95 animate-bounce-in"
        )}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </Button>
    </div>
  );
};
