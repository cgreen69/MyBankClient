# MyBank client app 

The client app provides a simple interface to the MyBank web api. Together they form a simple banking app with FX conversions. Basic validation is provided, for example, to limit the size of transactions. 


The app has been tested in Chrome and Edge.


## Installation

Download or clone the repo. Open a command prompt in the MyBankClient folder. Run the following command

```install
npm install 
```

followed by 

```ng
ng s 
```

The client app is configured to run on port 4300, this can be changed by altering the port setting in the serve section in angular.json

## Usage

To perform a transaction make sure the web api is running and click on depost or withdraw. Enter a value, choose a currency and click on submit. When the app is first installed and ran no funds a re available so the withdraw button is hidden.


## Tests

A basic jasmine unit test is provided in transaction.component.spec.ts. Right now it just checks that the relevant banking service has been injected. Time constraints prevented more extensive tests being written, ideally we'd test that errors are raised when invalid input is supplied.

```jasmine
ng t 
```

## Contributing
Pull requests are welcome. Please contact me to suggest changes.

## License
[MIT](https://choosealicense.com/licenses/mit/)