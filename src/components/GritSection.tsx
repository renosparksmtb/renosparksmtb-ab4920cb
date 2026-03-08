import Icon from "@/components/Icon";
import { faBiking, faCampground, faHandsHelping } from "@fortawesome/free-solid-svg-icons";

const GritSection = () => (
  <section id="grit" className="section-padding bg-blue-light">
    <div className="container-narrow">
      <h2 className="mb-4 text-3xl font-bold text-primary sm:text-4xl">
        GRiT – Girls Riding Together
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4 text-foreground/90 leading-relaxed">
          <p>
            Our GRiT program provides a supportive and empowering environment for female student‑athletes. Whether your daughter is brand new to mountain biking or already shredding trails, GRiT is all about building confidence, friendships, and skills — together.
          </p>
          <p>
            <strong>Girls‑only rides</strong> create a comfortable space where riders of all levels can progress at their own pace, ask questions, and push their limits without pressure. Rides are led by experienced female coaches and mentors who know how to make every girl feel welcome.
          </p>
          <p>
            <strong>GRiT Camp</strong> is an immersive multi‑day experience focused on skill‑building, trail riding, and team bonding. It's one of the highlights of the season and a great way for new riders to jump in.
          </p>
          <p>
            <strong>Mentorship &amp; confidence</strong> are at the heart of everything we do. Through coached rides, goal‑setting, and community events, GRiT helps young women develop resilience on and off the bike.
          </p>
          <p className="rounded-lg bg-secondary/15 p-4 text-sm font-medium text-foreground">
            GRiT events are open to girls <strong>and</strong> moms — come ride with us!
          </p>
          <a href="https://nevadanorthmtb.org/grit-program/" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 rounded-lg bg-secondary px-6 py-3 text-sm font-semibold text-white hover:bg-secondary/90 transition-colors">
            Nevada North GRiT Program
          </a>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-full max-w-xs space-y-4 rounded-2xl border-2 border-primary/20 bg-card p-6 shadow-lg">
            <h3 className="text-center text-lg font-bold text-primary">What GRiT Offers</h3>
            {[
              { label: "Girls-only rides", icon: faBiking },
              { label: "GRiT Camp", icon: faCampground },
              { label: "Mentorship & confidence", icon: faHandsHelping },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-xl border border-secondary/30 bg-secondary/10 p-3 transition-transform hover:scale-[1.02]"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                  <Icon icon={item.icon} className="text-sm" />
                </div>
                <span className="text-sm font-medium text-foreground/90">{item.label}</span>
              </div>
            ))}
            <p className="text-center text-xs text-muted-foreground">Girls & moms welcome!</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default GritSection;
