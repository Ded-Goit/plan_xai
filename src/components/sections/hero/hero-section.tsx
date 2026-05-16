import Image from "next/image";
import { Button } from "@/components/ui/button";

import { Container } from "@/components/layout/container";

import { GradientBlur } from "@/components/shared/gradient-blur";
import { GlassCard } from "@/components/shared/glass-card";
import AutomationIcon from "../../../../public/icons/icon_park_outline_lightning.svg";
import dashboardImg from "../../../../public/images/dashboard.png";

export function HeroSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-24
        lg:py-32
      "
    >
      <GradientBlur
        className="
          left-0
          top-0
          h-[320px]
          w-[320px]
          bg-primary
        "
      />

      <GradientBlur
        className="
          bottom-0
          right-0
          h-[320px]
          w-[320px]
          bg-accent
        "
      />

      <Container>
        <div
          className="
            relative
            z-10
            grid
            items-center
            gap-16
            lg:grid-cols-2
          "
        >
          <div className="space-y-8">
            <div
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-primary/20
                bg-primary/10
                px-4
                py-2
              "
            >
              <span
                className="
                  text-small
                  text-primary
                "
              >
                AI Operating System
              </span>
            </div>

            <div className="space-y-6">
              <h1
                className="
                  text-h1
                  text-foreground
                "
              >
                Automate
                <span className="text-gradient">
                  {" "}business workflows
                </span>
                <br />
                using AI
              </h1>

              <p
                className="
                  max-w-xl
                  text-hero
                  text-muted-foreground
                "
              >
                PlanXAI transforms meetings,
                analytics and operations into
                a fully autonomous AI workflow
                system.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="
                  rounded-2xl
                  bg-primary
                  px-8
                  text-white
                  shadow-lg
                  shadow-primary/30
                  hover:bg-primary/90
                "
              >
                Start Free
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="
                  rounded-2xl
                "
              >
                Watch Demo
              </Button>
            </div>
          </div>

          <GlassCard
            className="
              relative
              overflow-hidden
              p-8
            "
          >
            <div className="space-y-6">
              <div
                className="
                  flex
                  items-center
                  justify-between
                "
              >
                <div>
                  <p className="text-body2">
                    AI Analytics
                  </p>

                  <p
                    className="
                      text-small
                      text-muted-foreground
                    "
                  >
                    Real-time overview
                  </p>
                </div>

                <div
                  className="
                    rounded-2xl
                    bg-primary/10
                    px-4
                    py-2
                  "
                >
                  <span className="text-primary">
                    +24%
                  </span>
                </div>
              </div>

              <div
                className="
                  grid
                  gap-4
                  md:grid-cols-2
                "
              >
                <div
                  className="
                    rounded-3xl
                    border
                    border-white/10
                    bg-background/60
                    p-6
                  "
                >
                  <p
                    className="
                      text-small
                      text-muted-foreground
                    "
                  >
                    Revenue
                  </p>

                  <h3 className="text-h3 mt-3">
                    $128K
                  </h3>
                </div>

                <div
                  className="
                    rounded-3xl
                    border
                    border-white/10
                    bg-background/60
                    p-6
                  "
                >
                  <p
                    className="
                      text-small
                      text-muted-foreground
                    "
                  >
                    Efficiency
                  </p>

                  <h3 className="text-h3 mt-3">
                    87%
                  </h3>
                </div>
              </div>

              <div
                className="
                  h-[220px]
                  rounded-3xl
                  border
                  border-white/10
                  bg-gradient-to-br
                  from-primary/20
                  to-accent/10
                "
              />
            </div>
          </GlassCard>
          
           <div className="glass rounded-3xl p-6">
      <AutomationIcon
        className="
          h-10
          w-10
          text-primary
        "
      />

      <h3 className="mt-4 text-h3">
        AI Automation
      </h3>
    </div>
     <div className="rounded-lg overflow-hidden border border-gray-200">
      <Image 
        src={dashboardImg} 
        alt="Панель керування Plan XAI" 
        placeholder="blur" // Автоматично покаже розмитий прев'ю-фон під час завантаження
        priority // Додайте цей атрибут, якщо картинка знаходиться на першому екрані (Hero-секція)
      />
    </div>
        </div>
      </Container>
    </section>
  );
}