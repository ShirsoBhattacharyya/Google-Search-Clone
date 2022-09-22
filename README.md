
# Google-Search-Clone

## Summary

This project attempts to demonstrate the functionalities of a search engine website like Google.
The search results are displayed according to what the user searches in the search box. The search results are fetched from live google 
API.



## Screenshots

![Google Search](https://i.ibb.co/jZLwhrg/Google-Search-Image.png)
![Google Search Results](https://i.ibb.co/y59GMV5/Google-Search-Results-Image.png)


## Features

- #### User search:
    The user is able to google literally anything he wants. The input term is being taken from the search box via useState hook and sent to the context api where in the reducer function the initialState is being updated and sent to the api after getting the term via the use of useContext as a dynamic query parameter(q) through which relevant information is being fetched.
    
- #### Live Search Results:
    Through a customized hook, I managed to develop a way to take any user input term and manufacture real time google search results. Even though the free version of the api is restricted to only 100 searches. To avoid hurdles in development, I also created a mock api which mimics the google response for development and testing purposes to prevent exhaustion of the live API that easily.

- #### Fetching from API:
    Through the usage of either fetch or axios, we can easily manage to fetch data from any api and append the data according to the way we want. I did insert a fetch function inside a useEffect hook to automatically generate live results from the api. In the api link, three parameters were critical, the api key(key), the programmable search engine id(cx) and the query parameter(q). Please do not use my api key as it exhausts only after a 100 searches and the results won't be displayed. For further details on how to create your own API key, please visit key.js and read through the annotations for better clarity.

- #### Cross platform responsiveness:
    The responsiveness of a website in various platforms ensure a great user experience throughout and makes any project a lot more impactful. I have ensured that this is taken care of as well in this project.



## 🚀 About Me

Hi, this is Shirso Bhattacharyya. I'm a full stack developer based in India. I've always enjoyed working in different varieties of projects to enhance my experience in developing a variety of websites with different set of features and functionalities.
Please feel free to drop off a text for collaborations or even if you wanna just say 'hi'.


## Feedback

If you have any feedback, please feel free to reach out to me at shirso369@gmail.com.

 
