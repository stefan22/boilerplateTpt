# Package dependencies Security Vulnerabilities

##### How Yarn deals with package dependency security - link
https://snyk.io/blog/yarn-is-micro-secure

##### 2018 Yarn vs Npm
https://blog.alexwendland.com/2018/yarn-vs-npm/


### yarn
- Yarn only installs from your yarn.lock file or package.json file
- checksum verification security
- yarn licenses .  (you can install a module to check licenses afterwards - `license-checker`)       

yarn `import` it's all you need to generate a lock file.           
yarn check --integrity (verifies lock have not been altered) .      

     
### npm modules that deal with vulnerabilities 
   • `heat-shield` solves security vulnerabilities .    
   • I added `image-webpack-loader` and it will show '..`no suggested patches found`' instead.  (but you can     
     still run `npm audit` .         
   • To avoid running `npm audit` altogether, yarn   
   • yarn and nsp-except     

#### nsp-except
not related to `nsp`. It lets you exclude security vulnerabilities n stop reporting the issue...just like .nsprc      
only difference is `nsp-except check` will say no vulnerabilities`               

   • `nsp-except add` ....adds nodescurity.io/advisories/123 to a `.nsp-exceptions.json` file.      
   • `nsp-except check` ... to check for vulnerabilities .    


#### npm audit plugins
- `audit.js` to control what to report/whitelist etc .  
- `npm-audit-ci` command line utility that will exit report for low vulnerabilities .  
-  `npm-audit-ci -m` .... exit only when moderate or above vulnerabilities . (it doesn't work)  
- `npm-audit-report`  given a response from the `npm-security-api` render it into
   a variety of security reports .   
- `dep-audit` ... audits licenses of npm packages installed as dependencies to identify known vulnerabilities.          


#### others

***Snyk.io*** (automates finding & fixing vulnerabilities in dependencies)      
***docker*** (a different approach)     
***immunio.io***      
- `audit.js` to control what to report/whitelist etc .        
