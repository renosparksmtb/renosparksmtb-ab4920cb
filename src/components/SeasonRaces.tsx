import { faMountain, faTree, faLandmarkDome, faMountainSun, faHouseFlag } from "@fortawesome/free-solid-svg-icons";
import Icon from "@/components/Icon";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const VENUES: { name: string; icon: IconDefinition; url: string }[] = [
  { name: "Kirkwood", icon: faMountain, url: "https://www.kirkwood.com/" },
  { name: "Northstar", icon: faTree, url: "https://www.northstarcalifornia.com/" },
  { name: "Capital City (Carson City)", icon: faLandmarkDome, url: "https://visitcarsoncity.com/events/capital-city-crusher/" },
  { name: "Mammoth Mountain", icon: faMountainSun, url: "https://www.mammothmountain.com/" },
  { name: "Tahoe Donner", icon: faHouseFlag, url: "https://www.tahoedonner.com/" },
];

const SeasonRaces = () => (
  <section id="races" className="section-padding bg-background">
    <div className="container-narrow">
      <h2 className="mb-8 text-3xl font-bold text-primary sm:text-4xl">Race Season – What It's All About</h2>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4 text-foreground/90 leading-relaxed">
          <p>
            The Nevada North Cycling League hosts <strong>five optional race weekends</strong> between
            August and October. Courses are designed by age and ability, and racing is encouraged but{" "}
            <strong>never required</strong>.
          </p>
          <p>
            Many riders attend races just for the fun, community, and team spirit — and that's totally okay!
          </p>

          <div className="mt-6 rounded-xl border border-border bg-card p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-semibold text-secondary">What a Race Weekend Is Like</h3>
            <ul className="space-y-2 text-foreground/85">
              <li>🏕️ Team camping and bonding the night before</li>
              <li>🎪 Pit Zone — our team home base with food, shade, and cheering</li>
              <li>🚴 Course preview rides with coaches</li>
              <li>📣 Incredible energy from families and fellow teams</li>
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-semibold text-secondary">First Race? What to Expect</h3>
            <p className="text-foreground/85">
              Our coaches and veteran riders will walk you through everything — course preview, start
              procedure, fueling, and recovery. You'll never feel alone. The Pit Zone team area is a
              supportive, encouraging environment where everyone celebrates every finish.
            </p>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-secondary">Race Venues</h3>
          <div className="space-y-3">
            {VENUES.map((v) => (
              <div
                key={v.name}
                className="flex items-center gap-4 rounded-xl border border-border bg-card px-5 py-4 shadow-sm"
              >
                <Icon icon={v.icon} className="text-2xl text-primary" />
                <a href={v.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground underline hover:text-secondary">{v.name}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SeasonRaces;
