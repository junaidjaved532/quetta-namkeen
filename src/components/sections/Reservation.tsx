import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Phone } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  guests: z.string().min(1, "Number of guests is required"),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  notes: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function Reservation() {
  const { toast } = useToast();
  
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormValues>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = (data: FormValues) => {
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Reservation Request Sent",
        description: `Thank you ${data.name}. We will contact you at ${data.phone} to confirm your table for ${data.guests} guests.`,
      });
      reset();
      
      // Optional: Deep link to WhatsApp with pre-filled message
      const message = `Hello Quetta Namkeen! I'd like to reserve a table.%0A%0AName: ${data.name}%0APhone: ${data.phone}%0AGuests: ${data.guests}%0ADate: ${data.date}%0ATime: ${data.time}${data.notes ? `%0ANotes: ${data.notes}` : ''}`;
      window.open(`https://wa.me/923126300009?text=${message}`, '_blank');
    }, 800);
  };

  return (
    <section id="reservation" className="py-24 relative overflow-hidden">
      {/* Background with parallax effect simulation */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img src="/interior.jpg" alt="Background" className="w-full h-full object-cover blur-sm" />
        <div className="absolute inset-0 bg-background/80"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-card/80 backdrop-blur-md border border-border rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-5">
            
            {/* Contact Info Sidebar */}
            <div className="md:col-span-2 bg-primary p-10 text-primary-foreground flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-serif font-bold mb-2">Book a Table</h3>
                <p className="text-primary-foreground/80 mb-8 text-sm">Secure your spot for an unforgettable traditional dining experience.</p>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider mb-1 opacity-80">Phone & WhatsApp</h4>
                    <p className="text-xl font-serif">+92 312 6300009</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider mb-1 opacity-80">Opening Hours</h4>
                    <p>Daily: 12:00 PM – 2:00 AM</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider mb-1 opacity-80">Address</h4>
                    <p className="text-sm">M Service Line, Near Askari Gate No. 3, Adjacent to Block Underpass, Natha Singh Wala, Lahore</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-white/20">
                <a href="tel:+923126300009" className="flex items-center gap-3 w-full bg-white text-primary justify-center py-3 rounded-md font-bold hover:bg-white/90 transition-colors">
                  <Phone size={18} />
                  Call Now
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-3 p-10">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-1.5">Name</label>
                    <Input {...register("name")} placeholder="Your full name" className="bg-background/50 border-border" />
                    {errors.name && <span className="text-destructive text-xs mt-1 block">{errors.name.message}</span>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-1.5">Phone Number</label>
                    <Input {...register("phone")} placeholder="03XXXXXXXXX" className="bg-background/50 border-border" />
                    {errors.phone && <span className="text-destructive text-xs mt-1 block">{errors.phone.message}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-1.5">Guests</label>
                    <Input type="number" min="1" {...register("guests")} placeholder="2" className="bg-background/50 border-border" />
                    {errors.guests && <span className="text-destructive text-xs mt-1 block">{errors.guests.message}</span>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-1.5">Date</label>
                    <Input type="date" {...register("date")} className="bg-background/50 border-border [color-scheme:dark]" />
                    {errors.date && <span className="text-destructive text-xs mt-1 block">{errors.date.message}</span>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-1.5">Time</label>
                    <Input type="time" {...register("time")} className="bg-background/50 border-border [color-scheme:dark]" />
                    {errors.time && <span className="text-destructive text-xs mt-1 block">{errors.time.message}</span>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-1.5">Special Requests (Optional)</label>
                  <Textarea {...register("notes")} placeholder="Special arrangements, combo platter pre-orders (e.g. Ran Platter)..." className="bg-background/50 border-border resize-none h-24" />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full text-lg h-14 font-serif">
                  {isSubmitting ? "Processing..." : "Request Reservation via WhatsApp"}
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  Submitting will open WhatsApp to confirm your booking directly with our staff.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
