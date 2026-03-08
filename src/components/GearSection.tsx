import Icon from "@/components/Icon";
import { faStore, faPercent, faWrench, faBicycle } from "@fortawesome/free-solid-svg-icons";


const GEAR = [
  "Mountain bike in good working condition",
  "Properly fitting helmet",
  "Gloves",
  "Glasses / eye protection",
  "Appropriate riding shoes (closed-toe)",
  "At least one team jersey",
  "Front facing light (1100 lumens min)",
  "Bike tube / repair kit",
];

const GearSection = () => (
  <section id="gear" className="section-padding bg-background">
    <div className="container-narrow">
      <h2 className="mb-8 text-3xl font-bold text-primary sm:text-4xl">What Riders Need</h2>
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <ul className="space-y-3">
            {GEAR.map((g) => (
              <li
                key={g}
                className="flex items-start gap-3 rounded-lg border border-border bg-card px-5 py-3 shadow-sm"
              >
                <span className="mt-0.5 text-accent font-bold">✓</span>
                <span className="text-foreground/90">{g}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            Race kits (bibs, shorts) are optional and ordered separately. Jersey ordering info is sent
            after registration.
          </p>
        </div>
        <div className="space-y-6">
          {/* Visual header */}
          <div className="flex flex-col items-center rounded-2xl border-2 border-secondary/30 bg-gradient-to-br from-secondary/10 to-secondary/5 p-6 text-center shadow-lg">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                <Icon icon={faBicycle} className="text-xl" />
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Icon icon={faWrench} className="text-xl" />
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                <Icon icon={faPercent} className="text-xl" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-primary">Local Bike Shop Partners</h3>
            <p className="mt-1 text-sm text-muted-foreground">Both shops offer NICA team discounts — up to 25% off!</p>
          </div>

          {/* Shop cards */}
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
            <a href="https://www.sierrabikesupply.com/" target="_blank" rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 rounded-xl border-2 border-primary/20 bg-card p-5 shadow-sm transition-all hover:border-secondary hover:shadow-md">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
                <Icon icon={faStore} className="text-2xl" />
              </div>
              <span className="text-base font-bold text-foreground group-hover:text-secondary">Sierra Bike Supply</span>
              <span className="text-xs text-muted-foreground">Contact: Lane Swall</span>
            </a>
            <a href="https://www.trekbikes.com/us/en_US/retail/reno/" target="_blank" rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 rounded-xl border-2 border-primary/20 bg-card p-5 shadow-sm transition-all hover:border-secondary hover:shadow-md">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
                <Icon icon={faStore} className="text-2xl" />
              </div>
              <span className="text-base font-bold text-foreground group-hover:text-secondary">Trek Bike Store</span>
              <span className="text-xs text-muted-foreground">Contact: Jeremy Call</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default GearSection;
