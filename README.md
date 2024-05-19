# Temperature Conversion Microservice

This Javascript-written microservice converts temperatures from Celsius to Fahrenheit via a REST API.

## Table of Contents
- [Requesting Data](#requesting-data)
- [Receiving Data](#receiving-data)
- [Example Calls](#example-calls)
- [UML Sequence Diagram](#uml-sequence-diagram)

## Requesting Data

To request a temperature conversion, send a GET request to the following endpoint:
```
GET http://localhost:5004/temperature-conversion?amount=<celsius-temperature>
```
Where `<celsius-temperature>` is the Celsius temperature you want to convert to Fahrenheit.

## Receiving Data

The microservice responds with a JSON object with the key temperature and the converted temperature in Fahrenheit as its value. The structure of the response is:
```json
{
  "temperature": <fahrenheit-temperature>
}
```

## Example Calls

Here are examples of how to programmatically request and receive data from the microservice using Python and NodeJS.

### Python
```python
import requests

def get_converted_temperature(celsius_temperature):
    try:
        print(f"Sending a request with a temperature of: {celsius_temperature}°C")
        response = requests.get("http://localhost:5004/temperature-conversion", params={"amount": celsius_temperature})
        response_json = response.json()
        print(f"Received a response with a temperature of: {response_json['temperature']}°F")
    except Exception as e:
        print("Error:", e)

# Example call
get_converted_temperature(73)
```

### Node.js
```javascript
const axios = require('axios');

const get_converted_temperature = async (celsius_temperature) => {
  try {
    console.log(`Sending a request with a temperature of: ${celsius_temperature}°C`);
    const response = await axios.get(`http://localhost:5004/temperature-conversion`, {
      params: { amount: celsius_temperature }
    });
    console.log(`Received a response with a temperature of: ${response.data.temperature}°F`);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
};

get_converted_temperature(73);
```

## UML Sequence Diagram
![UML Sequence Diagram](<uml.png>)