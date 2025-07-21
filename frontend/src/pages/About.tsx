import { motion, Variants } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Award,
  Users,
  BookOpen,
  Star,
  Clock,
  Target,
  Heart,
  Sparkles,
  Trophy,
  TrendingUp,
  Zap
} from "lucide-react";
import { useState, useEffect } from "react";

const achievements = [
  { icon: GraduationCap, title: "M.Sc Physics", description: "From IIT Delhi" },
  { icon: Award, title: "6+ Years", description: "Teaching Experience" },
  { icon: Users, title: "1000+", description: "Students Taught" },
  { icon: Star, title: "90%", description: "Success Rate" },
];

const teachingPhilosophy = [
  {
    icon: Target,
    title: "Goal-Oriented Learning",
    description:
      "Every lesson is designed with clear objectives to help you achieve your academic goals."
  },
  {
    icon: Heart,
    title: "Passion for Physics",
    description:
      "Making complex physics concepts simple and enjoyable for every student."
  },
  {
    icon: BookOpen,
    title: "Personalized Approach",
    description:
      "Tailored teaching methods based on individual learning styles and pace."
  },
  {
    icon: Clock,
    title: "Flexible Timings",
    description:
      "Convenient scheduling that fits your busy student life and study routine."
  },
];

const milestones = [
  { year: "2008", event: "Started teaching career with first batch of 10 students" },
  { year: "2018", event: "Founded AcademyPro with innovative teaching methods" },
  { year: "2020", event: "Adapted to digital learning during pandemic" },
  { year: "2023", event: "Achieved 90%+ success rate milestone" },
  { year: "2025", event: "Celebrated 6 years of transforming student lives" },
];

const floatingElements = ["🔬", "⚛️", "🧪", "📐", "🌟"];

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

const staggerContainer: Variants = {
  visible: { transition: { staggerChildren: 0.2 } },
};

const floatingVariants: Variants = {
  animate: {
    y: [-20, 20],
    rotate: [0, 5, -5, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
  },
};

export default function About() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-subtle overflow-x-hidden relative">
      {/* Floating Background */}
      <div className="fixed inset-0 pointer-events-none">
        {floatingElements.map((icon, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-20"
            style={{
              left: `${10 + i * 18}%`,
              top: `${25 + (i % 2) * 20}%`,
            }}
            variants={floatingVariants}
            animate="animate"
          >
            {icon}
          </motion.div>
        ))}
      </div>

      {/* Cursor Follower */}
      <motion.div
        className="fixed w-3 h-3 bg-gradient-hero rounded-full pointer-events-none z-50 mix-blend-multiply"
        style={{ left: cursor.x - 6, top: cursor.y - 6 }}
        animate={{ scale: hover ? 2 : 1, opacity: hover ? 0.8 : 0.3 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />

      {/* Hero */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block mb-4"
            >
              <Sparkles className="w-10 h-10 text-yellow-400" />
            </motion.div>
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              Meet Your Physics Mentor
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Transforming the way students learn physics with passion, innovation, and proven results
            </motion.p>
          </motion.div>

          {/* About */}
          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div variants={itemVariants}>
              <motion.div
                className="relative group"
                onHoverStart={() => setHover(true)}
                onHoverEnd={() => setHover(false)}
                whileHover={{ scale: 1.05, rotate: 3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-80 h-80 mx-auto bg-gradient-hero rounded-full p-1">
                  <div className="w-full h-full bg-background rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-72 h-72 bg-gradient-subtle rounded-full flex items-center justify-center overflow-hidden relative">
                      <motion.span
                        className="text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent"
                        animate={{
                          textShadow: [
                            "0 0 8px rgba(59, 130, 246, 0.5)",
                            "0 0 16px rgba(59, 130, 246, 0.8)",
                            "0 0 8px rgba(59, 130, 246, 0.5)"
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        Dr. AD
                      </motion.span>
                      {[...Array(6)].map((_, idx) => (
                        <motion.div
                          key={idx}
                          className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                          style={{
                            left: `${15 + idx * 10}%`,
                            top: `${20 + (idx % 3) * 15}%`
                          }}
                          animate={{
                            y: [-10, 10],
                            x: [-5, 5],
                            opacity: [0.3, 1, 0.3]
                          }}
                          transition={{
                            duration: 2 + idx * 0.3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <motion.h2
                className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent"
                whileHover={{ scale: 1.02 }}
              >
                Dr. Alakh Dubey
              </motion.h2>
              <motion.div
                className="flex flex-wrap gap-3 mb-4"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {["Physics Expert", "IIT Delhi Alumni", "6+ Years Experience"].map((tag, i) => (
                  <motion.div key={i} variants={itemVariants}>
                    <Badge variant="secondary">{tag}</Badge>
                  </motion.div>
                ))}
              </motion.div>
              <motion.p
                className="text-lg text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Hey there, future scientists! 👋 I'm Dr. Alakh Dubey, and I've been on an incredible journey of making physics fun and accessible for students just like you.
              </motion.p>
              <motion.p
                className="text-lg text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                My mission is simple: to turn your physics fears into physics passion! 🚀
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {achievements.map((ach, i) => (
              <motion.div key={i} variants={itemVariants} whileHover="hover">
                <motion.div
                  variants={{
                    hover: { scale: 1.04, rotateY: 8 }
                  }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Card className="text-center group bg-card border-2 border-primary/10 hover:shadow-elegant transition-all duration-300 h-full">
                    <CardContent className="p-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-hero mb-4">
                        <ach.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{ach.title}</h3>
                      <p className="text-muted-foreground">{ach.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <motion.section
        className="py-16 px-4 bg-card/50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.div
              className="inline-block mb-4"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            >
              <Trophy className="w-10 h-10 text-yellow-400" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Students Love Learning With Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              It's not just about teaching physics—it's about building confidence, curiosity, and success!
            </p>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 gap-8" variants={staggerContainer}>
            {teachingPhilosophy.map((item, i) => (
              <motion.div key={i} variants={itemVariants} whileHover="hover">
                <motion.div
                  variants={{
                    hover: { scale: 1.03, rotate: 2 }
                  }}
                  transition={{ type: "spring", stiffness: 350 }}
                >
                  <Card className="bg-card border-2 border-primary/10 hover:shadow-elegant transition-all duration-300 h-full">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-hero">
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Timeline */}
      <motion.section
        className="py-16 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto max-w-4xl">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.div
              className="inline-block mb-4"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <TrendingUp className="w-10 h-10 text-green-500" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">My Teaching Journey</h2>
            <p className="text-xl text-muted-foreground">
              From a small classroom to touching thousands of lives—here's how it all began.
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-hero rounded-full"></div>
            {milestones.map((m, idx) => (
              <motion.div
                key={idx}
                className="flex gap-6 group mb-8 relative"
                variants={itemVariants}
                whileHover={{ x: 8 }}
              >
                <motion.div className="flex flex-col items-center z-10" whileHover={{ scale: 1.15 }}>
                  <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center text-lg text-white">
                    {m.year.slice(-2)}
                  </div>
                </motion.div>
                <Card className="flex-1 bg-card border-2 border-primary/10 hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6">
                    <Badge variant="outline">{m.year}</Badge>
                    <p className="text-muted-foreground mt-2">{m.event}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-hero text-white">
        <motion.div
          className="container mx-auto max-w-4xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" variants={itemVariants}>
            Ready to Start Your Physics Journey?
          </motion.h2>
          <motion.p className="text-xl mb-8 opacity-90" variants={itemVariants}>
            Join thousands of successful students who've transformed their understanding of physics.
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={itemVariants}>
            <Link to="/results">
              <Button variant="outline" size="lg" className="border-white text-black hover:bg-white/10">
                <Trophy className="w-5 h-5 mr-2" />
                View Success Stories
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
