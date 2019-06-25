import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FitmentService {

  constructor(
    private http: HttpClient
  ){}

getYears() { 
  let fitmentUrl = 'https://api.myjson.com/bins/1ghf44';
  let obsv = this.http.get(fitmentUrl); 
  return obsv;
  };

/* Response:
{
   "type" : "fitmentYearResponse",
   "status" : "OK",
   "success" : true,
   "year" : [ "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007", "2006", "2005", "2004", "2003", "2002", "2001", "2000", "1999", "1998", "1997", "1996", "1995", "1994", "1993", "1992", "1991", "1990", "1989", "1988", "1987", "1986", "1985", "1984", "1983", "1982", "1981", "1980", "1979", "1978", "1977", "1976", "1975", "1974", "1973", "1972", "1971", "1970", "1969", "1968", "1967", "1966", "1965", "1964", "1963", "1962", "1961", "1960", "1959", "1958", "1957", "1956", "1955", "1954", "1953", "1952", "1951", "1950", "1949" ]
}
*/


// This is an example of how the API would function in the real world:
// https://website.com/fitments/make/?year=2015 <-- '2015' needs to be dynamic. It needs to be passed into this function as an argument. Show how you would do that here so that the year you clicked on would show up in the console log. For example, "year is 2015" 
getMakes = (year: string) => {
  console.log('year is ', year);
  this.http.get('https://api.myjson.com/bins/7amas')
  };
/* Response:
{
   "type" : "fitmentMakeResponse",
   "status" : "OK",
   "success" : true,
   "make" : [ "Acura", "Alfa Romeo", "Aston Martin", "Audi", "Bentley", "BMW", "Bugatti", "Buick", "Cadillac", "Chevrolet", "Chrysler", "Dodge", "Ferrari", "Fiat", "Ford", "Freightliner", "GMC", "Honda", "Hyundai", "Infiniti", "Jaguar", "Jeep", "Kia", "Lamborghini", "Land Rover", "Lexus", "Lincoln", "Maserati", "Mazda", "McLaren", "Mercedes-Benz", "Mini", "Mitsubishi", "Mobility Ventures", "Nissan", "Porsche", "Rolls Royce", "Scion", "Smart", "Subaru", "Tesla", "Toyota", "Volkswagen", "Volvo" ]
} */

getModels = () => this.http.get('https://api.myjson.com/bins/qchno');
/* Response:
{
   "type" : "fitmentModelResponse",
   "status" : "OK",
   "success" : true,
   "model" : [ "ILX", "MDX", "RDX", "RLX", "TLX" ]
}*/

getTrims = () => this.http.get('https://api.myjson.com/bins/12uld0');
/* Response:
{
   "type" : "fitmentTrimResponse",
   "status" : "OK",
   "success" : true,
   "trim" : [ "FWD", "SH-AWD" ]
}*/

getOptions = () => this.http.get('https://api.myjson.com/bins/a9sbo');
/* Response:
{
   "type" : "fitmentOptionResponse",
   "status" : "OK",
   "success" : true,
   "option" : [ {
      "key" : "18",
      "value" : {
         "fitmentOptionList" : [ {
            "position" : [ {
               "both" : {
                  "runFlat" : false,
                  "size" : {
                     "aspectRatio" : 0.0,
                     "diameter" : 0.0,
                     "width" : 0.0
                  },
                  "staggered" : false
               }
            } ],
            "staggered" : false,
            "trim" : "FWD",
            "trimOption" : "245/60R18 105H",
            "vehicleId" : "48989"
         } ]
      }
   }, {
      "key" : "19",
      "value" : {
         "fitmentOptionList" : [ {
            "position" : [ {
               "both" : {
                  "runFlat" : false,
                  "size" : {
                     "aspectRatio" : 0.0,
                     "diameter" : 0.0,
                     "width" : 0.0
                  },
                  "staggered" : false
               }
            } ],
            "staggered" : false,
            "trim" : "FWD",
            "trimOption" : "245/55R19 103H",
            "vehicleId" : "48992"
         } ]
      }
   } ]
}
*/
} 
