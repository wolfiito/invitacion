import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

// 1. Esquema de Validación (Las Reglas del Juego)
const formSchema = z.object({
  name: z.string().min(2, "Por favor escribe tu nombre completo"),
  email: z.string().email("Escribe un correo válido"),
  attendance: z.enum(["yes", "no"], {
    required_error: "Por favor confirma si vienes", // Esto salta si no seleccionan nada
    invalid_type_error: "Opción no válida",
  }),
  guests: z.string().transform((val) => parseInt(val, 10)).or(z.number()),
  message: z.string().optional(),
});

// Tipo inferido de Zod para TypeScript
type FormData = z.infer<typeof formSchema>;

export const RSVP = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // 2. Configuración del Formulario
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      guests: 1, // Por defecto 1 persona
    }
  });

  // 3. Función que se ejecuta al enviar (Aquí conectaremos la Base de Datos después)
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulación de envío al servidor (esperamos 2 segundos)
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    console.log("Datos del Formulario:", data); // <--- AQUÍ LLEGAN LOS DATOS LIMPIOS
    
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
  };

  return (
    <section className="py-24 px-4 bg-wedding-primary text-wedding-paper relative overflow-hidden">
      
      {/* Fondo decorativo */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
         <div className="absolute right-0 top-0 w-64 h-64 bg-wedding-secondary rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3"></div>
         <div className="absolute left-0 bottom-0 w-64 h-64 bg-wedding-rose rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        
        {/* Encabezado */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl italic">RSVP</h2>
          <p className="text-wedding-paper/80 font-sans">
            Por favor confirma tu asistencia antes del 15 de Septiembre.
          </p>
        </div>

        {/* Estado de Éxito (Después de enviar) */}
        {isSuccess ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-wedding-paper text-wedding-primary p-8 rounded-2xl text-center space-y-4 shadow-xl"
          >
            <div className="w-16 h-16 bg-wedding-secondary/20 rounded-full flex items-center justify-center mx-auto text-wedding-secondary">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-3xl">¡Gracias por confirmar!</h3>
            <p className="font-sans text-wedding-primary/70">
              Hemos recibido tu respuesta. Nos vemos en el bosque.
            </p>
            <button 
              onClick={() => setIsSuccess(false)}
              className="text-sm underline text-wedding-primary/50 hover:text-wedding-secondary mt-4"
            >
              Enviar otra respuesta
            </button>
          </motion.div>
        ) : (
          /* El Formulario */
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 bg-wedding-paper/5 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10"
          >
            {/* Nombre */}
            <div className="space-y-2">
              <label className="text-sm uppercase tracking-wider font-bold text-wedding-secondary">Nombre Completo</label>
              <input
                {...register("name")}
                type="text"
                placeholder="Ej. María González"
                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-wedding-secondary focus:ring-1 focus:ring-wedding-secondary transition-all"
              />
              {errors.name && <span className="text-wedding-rose text-xs">{errors.name.message}</span>}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm uppercase tracking-wider font-bold text-wedding-secondary">Email</label>
              <input
                {...register("email")}
                type="email"
                placeholder="correo@ejemplo.com"
                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-wedding-secondary focus:ring-1 focus:ring-wedding-secondary transition-all"
              />
              {errors.email && <span className="text-wedding-rose text-xs">{errors.email.message}</span>}
            </div>

            {/* Asistencia (Radio Buttons Custom) */}
            <div className="space-y-2">
              <label className="text-sm uppercase tracking-wider font-bold text-wedding-secondary">¿Podrás asistir?</label>
              <div className="grid grid-cols-2 gap-4">
                <label className="cursor-pointer">
                  <input {...register("attendance")} type="radio" value="yes" className="peer sr-only" />
                  <div className="text-center py-3 rounded-lg border border-white/10 bg-black/20 peer-checked:bg-wedding-secondary peer-checked:text-white peer-checked:border-wedding-secondary transition-all hover:bg-white/5">
                    ¡Claro que sí!
                  </div>
                </label>
                <label className="cursor-pointer">
                  <input {...register("attendance")} type="radio" value="no" className="peer sr-only" />
                  <div className="text-center py-3 rounded-lg border border-white/10 bg-black/20 peer-checked:bg-wedding-rose peer-checked:text-wedding-primary peer-checked:border-wedding-rose transition-all hover:bg-white/5">
                    Lo siento, no puedo
                  </div>
                </label>
              </div>
              {errors.attendance && <span className="text-wedding-rose text-xs">{errors.attendance.message}</span>}
            </div>

            {/* Número de personas (Select) */}
            <div className="space-y-2">
              <label className="text-sm uppercase tracking-wider font-bold text-wedding-secondary">Número de Personas</label>
              <select
                {...register("guests")}
                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-wedding-secondary focus:ring-1 focus:ring-wedding-secondary transition-all appearance-none cursor-pointer"
              >
                <option value="1" className="text-black">1 Persona</option>
                <option value="2" className="text-black">2 Personas</option>
                <option value="3" className="text-black">3 Personas (Familia)</option>
                <option value="4" className="text-black">4 Personas (Familia)</option>
              </select>
            </div>

            {/* Mensaje */}
            <div className="space-y-2">
              <label className="text-sm uppercase tracking-wider font-bold text-wedding-secondary">Mensaje / Alergias</label>
              <textarea
                {...register("message")}
                rows={3}
                placeholder="¿Eres alérgico a algo? ¿Alguna canción que quieras pedir?"
                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-wedding-secondary focus:ring-1 focus:ring-wedding-secondary transition-all resize-none"
              ></textarea>
            </div>

            {/* Botón Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-wedding-secondary text-white font-bold py-4 rounded-lg hover:bg-wedding-secondary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  Confirmar Asistencia
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>

          </motion.form>
        )}
      </div>
    </section>
  );
};