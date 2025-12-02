import { useState } from "react";
import { motion } from "framer-motion";
import { Gift, CreditCard, Copy, Check, ShoppingBag } from "lucide-react";
import { cn } from "../../lib/utils";

export const GiftRegistry = () => {
  const [copied, setCopied] = useState(false);

  // Datos de tu cuenta bancaria
  const bankDetails = {
    bank: "BBVA Bancomer",
    name: "Juan Pérez & Ana García",
    account: "1234 5678 9012 3456", // CLABE
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(bankDetails.account);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Resetear el icono después de 2s
  };

  return (
    <section className="py-20 px-4 bg-wedding-cream relative overflow-hidden">
      {/* Patrón de fondo opcional */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#5D7052_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-4xl mx-auto relative z-10 text-center space-y-12">
        
        {/* Encabezado */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <div className="inline-block p-3 rounded-full bg-wedding-sage/30 mb-2">
            <Gift className="w-8 h-8 text-wedding-primary" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-wedding-primary italic">
            Mesa de Regalos
          </h2>
          <p className="max-w-2xl mx-auto text-wedding-primary/70 font-sans leading-relaxed">
            Su presencia es nuestro mayor regalo. Sin embargo, si desean tener un detalle con nosotros, ponemos a su disposición estas opciones.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Opción 1: Tiendas Departamentales */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-wedding-sage/30 flex flex-col items-center"
          >
            <ShoppingBag className="w-10 h-10 text-wedding-secondary mb-4" />
            <h3 className="font-serif text-2xl text-wedding-primary mb-6">Mesa de Regalos</h3>
            
            <div className="flex flex-col gap-4 w-full max-w-xs">
              <a 
                href="#" 
                target="_blank"
                className="group flex items-center justify-between px-6 py-4 bg-wedding-paper border border-wedding-sage/50 rounded-xl hover:border-wedding-primary transition-all hover:shadow-md"
              >
                <span className="font-bold text-wedding-primary">Amazon</span>
                <span className="text-wedding-secondary group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a 
                href="#" 
                target="_blank"
                className="group flex items-center justify-between px-6 py-4 bg-wedding-paper border border-wedding-sage/50 rounded-xl hover:border-wedding-primary transition-all hover:shadow-md"
              >
                <span className="font-bold text-wedding-primary">Liverpool</span>
                <span className="text-wedding-secondary group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </motion.div>

          {/* Opción 2: Transferencia (Smart Copy) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-wedding-primary text-wedding-paper p-8 rounded-2xl shadow-lg flex flex-col items-center relative overflow-hidden"
          >
            {/* Decoración de fondo */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <CreditCard className="w-10 h-10 text-wedding-secondary mb-4" />
            <h3 className="font-serif text-2xl text-white mb-2">Lluvia de Sobres</h3>
            <p className="text-white/80 text-sm mb-8 max-w-xs">
              Si prefieren apoyarnos para nuestra luna de miel, pueden hacerlo a esta cuenta.
            </p>

            <div className="w-full bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left space-y-4 border border-white/10">
              <div>
                <p className="text-xs uppercase tracking-widest text-white/60 mb-1">Banco</p>
                <p className="font-bold text-lg">{bankDetails.bank}</p>
              </div>
              
              <div>
                <p className="text-xs uppercase tracking-widest text-white/60 mb-1">CLABE / Cuenta</p>
                <button 
                  onClick={handleCopy}
                  className="group flex items-center gap-3 w-full hover:bg-white/5 p-2 -ml-2 rounded-lg transition-colors cursor-pointer"
                  title="Copiar número"
                >
                  <span className="font-mono text-xl tracking-wider text-wedding-secondary">
                    {bankDetails.account}
                  </span>
                  <div className="p-1.5 rounded-md bg-white/10 group-hover:bg-wedding-secondary group-hover:text-white transition-colors">
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </div>
                </button>
                {/* Feedback visual pequeño */}
                <div className={cn(
                  "text-xs text-wedding-secondary mt-1 transition-opacity",
                  copied ? "opacity-100" : "opacity-0"
                )}>
                  ¡Copiado al portapapeles!
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-white/60 mb-1">Titular</p>
                <p className="font-medium">{bankDetails.name}</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};