import {getCovidData} from "./GetData";

export function FillCovidData(country?: string): void {
    const table = document.getElementById("data") as HTMLTableElement;

    table.innerHTML = `<tr> 
        <th>Continent</th>
        <th>Country</th>
        <th>Population</th>
        <th>Cases
        </th>
    </tr>`;

    const result = getCovidData(country);
    result.then((data) => {
        data.response.forEach(countryData => {
            const row = `<tr>
        <td>${countryData.continent}</td>
        <td>${countryData.country}</td>
        <td>${countryData.population}</td>
        <td><table>
        <tr><th>Total</th><th>Active</th><th>Critical</th><th>Recovered</th><th>deaths</th><th>New</th></tr>
        <tr>
            <td>${countryData.cases.total}</td>
            <td>${countryData.cases.active}</td>
            <td>${countryData.cases.critical}</td>
            <td>${countryData.cases.recovered}</td>
            <td>${countryData.deaths.total}</td>
            <td>${countryData.cases.new}</td>
            <td></td>
        </tr>
        </table>    </td></tr>`
            table.innerHTML += row;
        });
    });
}
