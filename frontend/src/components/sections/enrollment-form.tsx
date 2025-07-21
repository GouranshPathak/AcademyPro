import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast"; // Assuming you have shadcn toast

// Define the type for a single course, inferred from your data
type Course = {
  id: number;
  title: string;
  // ... other properties
};

// Define the form validation schema using Zod
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  contactNumber: z.string().min(10, { message: "Contact number must be at least 10 digits." }),
  classStudying: z.string().min(1, { message: "Please enter your class." }),
  percentage: z.string().min(1, { message: "Please enter your last percentage." }),
  schoolName: z.string().min(2, { message: "School name is required." }),
  course: z.string({ required_error: "Please select a course." }),
  city: z.string().min(2, { message: "City is required." }),
});

interface EnrollmentFormProps {
  courses: Course[];
  selectedCourseTitle?: string; // The title of the course the user clicked "Enroll" on
  onFormSubmit: () => void;
}

export function EnrollmentForm({ courses, selectedCourseTitle, onFormSubmit }: EnrollmentFormProps) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      contactNumber: "",
      classStudying: "",
      percentage: "",
      schoolName: "",
      course: selectedCourseTitle || "", // Pre-select the course
      city: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/enroll`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.msg || "Something went wrong");
    }

    toast({
      title: "Enrollment Successful! 🎉",
      description: data.msg || "We've received your details and will contact you shortly.",
    });

    onFormSubmit(); // Close the modal/dialog if needed
    form.reset(); // Optional: clear the form
  } catch (error: any) {
    toast({
      title: "Enrollment Failed ❌",
      description: error.message || "There was a problem submitting your enrollment.",
      variant: "destructive",
    });
  }
}
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Rohan Sharma" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="rohan.sharma@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contactNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact Number</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="9876543210" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="classStudying"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Class Studying</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., 12th or Dropper" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="percentage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Previous Class Percentage (%)</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., 85%" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="schoolName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>School Name</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Delhi Public School" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="course"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Course of Interest</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a course" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {courses.map((course) => (
                      <SelectItem key={course.id} value={course.title}>
                        {course.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Indore" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-full bg-gradient-hero" disabled={form.formState.isSubmitting} >
          {form.formState.isSubmitting ? "Submitting..." : "Confirm Enrollment"}
        </Button>
      </form>
    </Form>
  );
}
export default EnrollmentForm;