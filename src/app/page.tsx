"use client";

import DATA from "@/data.json";
import { useState, useMemo } from "react";

export interface ImpactAssessmentData {
  "Company Name": string;
  "Total Revenue": string;
  "Company Market Cap": string;
  "Women Managers": number;
  "Women Employees": number;
  "ESG Score": number;
  "CO2 Scope 1 & 2 Adjusted": number | string;
  "CO2 Scope 1 & 2 Revenue Adjusted": number | string;
  "CO2 Scope 3 Adjusted": number | string;
  "CO2 Scope 3 Revenue Adjusted": number | string;
}

export default function Home() {
  const [sort, setSort] = useState<keyof ImpactAssessmentData>("Company Name");
  const matches = useMemo(() => {
    const numberRegex = new RegExp(/[\$(\)\,.]/g, "ig");
    return [...DATA].sort((a, b) => {
      const aValue = Number(String(a[sort]).replace(numberRegex, ""));
      const bValue = Number(String(b[sort]).replace(numberRegex, ""));

      if (!Number.isNaN(aValue) || !Number.isNaN(bValue)) {
        return bValue - aValue;
      }
      return (a[sort] as string).localeCompare(b[sort] as string);
    });
  }, [sort]);

  return (
    <main>
      <h1>Impact Assessment Data</h1>
      <table>
        <thead>
          <tr>
            <th colSpan={3} />
            <th colSpan={2}>Women (Per 100)</th>
            <th colSpan={2}>CO2 SCOPE 1 & 2</th>
            <th colSpan={2}>CO2 SCOPE 3</th>
          </tr>
          <tr>
            <th
              className={sort === "Company Name" ? "font-bold" : "font:normal"}
              onClick={() => setSort("Company Name")}
            >
              {" "}
              Company Name{" "}
            </th>
            <th
              className={sort === "Total Revenue" ? "font-bold" : "font:normal"}
              onClick={() => setSort("Total Revenue")}
            >
              Total Compane Revenue
            </th>
            <th
              className={
                sort === "Company Market Cap" ? "font-bold" : "font:normal"
              }
              onClick={() => setSort("Company Market Cap")}
            >
              Market Capilazition
            </th>
            <th
              className={
                sort === "Women Managers" ? "font-bold" : "font:normal"
              }
              onClick={() => setSort("Women Managers")}
            >
              Managers
            </th>
            <th
              className={
                sort === "Women Employees" ? "font-bold" : "font:normal"
              }
              onClick={() => setSort("Women Employees")}
            >
              Employees
            </th>
            <th
              className={
                sort === "CO2 Scope 1 & 2 Adjusted"
                  ? "font-bold"
                  : "font:normal"
              }
              onClick={() => setSort("CO2 Scope 1 & 2 Adjusted")}
            >
              Total
            </th>
            <th
              className={
                sort === "CO2 Scope 1 & 2 Revenue Adjusted"
                  ? "font-bold"
                  : "font:normal"
              }
              onClick={() => setSort("CO2 Scope 1 & 2 Revenue Adjusted")}
            >
              Rev Adjusted
            </th>
            <th
              className={
                sort === "CO2 Scope 3 Adjusted" ? "font-bold" : "font:normal"
              }
              onClick={() => setSort("CO2 Scope 3 Adjusted")}
            >
              Total
            </th>
            <th
              className={
                sort === "CO2 Scope 3 Revenue Adjusted"
                  ? "font-bold"
                  : "font:normal"
              }
              onClick={() => setSort("CO2 Scope 3 Revenue Adjusted")}
            >
              Rev Adjusted
            </th>
            <th
              className={sort === "ESG Score" ? "font-bold" : "font:normal"}
              onClick={() => setSort("ESG Score")}
            >
              ESG Score
            </th>
          </tr>
        </thead>
        <tbody>
          {matches.map((row, index) => (
            <tr key={index}>
              <td>{row["Company Name"]}</td>
              <td>{row["Total Revenue"]}</td>
              <td>{row["Company Market Cap"]}</td>
              <td>{row["Women Managers"]}</td>
              <td>{row["Women Employees"]}</td>
              <td>{row["CO2 Scope 1 & 2 Adjusted"]}</td>
              <td>{row["CO2 Scope 1 & 2 Revenue Adjusted"]}</td>
              <td>{row["CO2 Scope 3 Adjusted"]}</td>
              <td>{row["CO2 Scope 3 Revenue Adjusted"]}</td>
              <td>{row["ESG Score"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
