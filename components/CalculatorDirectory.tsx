import Link from "next/link";
import {
  calculatorCategoryOrder,
  getCalculatorsByCategory,
} from "@/lib/apCalculatorDirectory";

type CalculatorDirectoryProps = {
  aliasLimit?: number;
  showDescriptions?: boolean;
  variant?: "compact" | "detailed";
};

export default function CalculatorDirectory({
  aliasLimit = 2,
  showDescriptions = false,
  variant = "compact",
}: CalculatorDirectoryProps) {
  return (
    <div className={`calculator-directory calculator-directory-${variant}`}>
      {calculatorCategoryOrder.map((category) => {
        const calculators = getCalculatorsByCategory(category);

        return (
          <section className="calculator-category-section" key={category}>
            <div className="calculator-category-header">
              <h3>{category}</h3>
              <span>{calculators.length} calculators</span>
            </div>
            <div className="calculator-item-grid">
              {calculators.map((calculator) => {
                const aliases = calculator.aliases?.slice(0, aliasLimit);
                const item = (
                  <article
                    className={`calculator-directory-item ${
                      calculator.status === "live" ? "is-live" : "is-coming-soon"
                    }`}
                  >
                    <div className="calculator-directory-copy">
                      <h4>{calculator.title}</h4>
                      {aliases && aliases.length > 0 && (
                        <p className="calculator-directory-aliases">
                          {aliases.join(" · ")}
                        </p>
                      )}
                      {showDescriptions && <p>{calculator.description}</p>}
                    </div>
                    <span
                      className={
                        calculator.status === "live"
                          ? "directory-status live"
                          : "directory-status soon"
                      }
                    >
                      {calculator.status === "live" ? "Live" : "Coming Soon"}
                    </span>
                  </article>
                );

                if (calculator.status === "live") {
                  return (
                    <Link
                      aria-label={`Use ${calculator.title}`}
                      className="calculator-directory-link"
                      href={calculator.href}
                      key={calculator.title}
                    >
                      {item}
                    </Link>
                  );
                }

                return (
                  <div
                    aria-disabled="true"
                    className="calculator-directory-disabled"
                    key={calculator.title}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
