import '../css/main.css';

import {FillCovidData} from "./FillCovidData";
import {FillCountries} from "./FillCountries";

onload = () => {
    FillCovidData();
    FillCountries();
}
