
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const res = numbers.filter((num) => num % 2 == 0);


console.log(res);

// Challenge
const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
    { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
    { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
    { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
    { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
    { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
    { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
    { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 }

];

// Get retail companies
const retailcomp = companies.filter((cmp) => cmp.category === 'Retail');
// console.log(retailcomp);


//Get compnaies started after 1980 and ended before 2005

const earlyCompanies = companies.filter((company) => company.start >= 1980 && company.end <= 2005);
console.log(earlyCompanies);






