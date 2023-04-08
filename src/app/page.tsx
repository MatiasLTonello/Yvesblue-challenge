import DATA from "@/data.json";

const tableRow = {
  "Company Name": "Go-Ahead Group PLC",
  "Total Revenue": "$4,571,628,564.26",
  "Company Market Cap": "$655,937,334.00",
  "Women Managers": 18,
  "Women Employees": 14.4,
  "ESG Score": 63.39998726,
  "CO2 Scope 1 & 2 Adjusted": "946,540.00",
  "CO2 Scope 1 & 2 Revenue Adjusted": 10.65,
  "CO2 Scope 3 Adjusted": "48,700.00",
  "CO2 Scope 3 Revenue Adjusted": 207.05,
};

export default function Home() {
  return (
    <main>
      <h1>Impact Assesment Data</h1>
      <table>
        <thead>
          <tr>
            <th colSpan={3} />
            <th colSpan={2}>Women (Per 100)</th>
            <th colSpan={2}>CO2 SCOPE 1 & 2</th>
            <th colSpan={2}>CO2 SCOPE 3</th>
          </tr>
          <tr>
            <th> Company Name </th>
            <th>Total Compane Revenue</th>
            <th>Market Capilazition</th>
            <th>Managers</th>
            <th>Employees</th>
            <th>Total</th>
            <th>Rev Adjusted</th>
            <th>Total</th>
            <th>Rev Adjusted</th>
            <th>ESG Score</th>
          </tr>
        </thead>
        <tbody>
          {DATA.map((row, index) => (
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
