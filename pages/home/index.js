import NewsCard from "@/components/NewsCard";
import axios from "axios";
import React, { useEffect, useState } from "react";
import News from "@/utils/db"
import Header from "@/components/Header";
import { useRouter } from "next/router";
import { useSearchParams } from 'next/navigation'

const index = () => {
  
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState("2023-08-04"); // Adjust the start date
  // const [endDate, setEndDate] = useState("");
  // const [sortBy, setSortBy] = useState("popularity");
  const [loading, setLoading] = useState(false);
  const apiKey = '103602da7f1747f2b90d5b429640d862';
const router = useRouter()
  // const {date, endDate, sortBy} = router.query
  // const searchParams = new URLSearchParams(window.location.search);
  const searchParams = useSearchParams()
const date = searchParams.get('date');
const endDate = searchParams.get('endDate');
  console.log("+++++++++++++++++++++++++++++++++++++++++++++==",date, endDate);
//   const fetchData = async () => {
//     try {
//       const response = await axios.get(
//         `https://newsapi.org/v2/everything?q=${searchTerm || "apple"}&from=${
//           endDate || `${new Date()}`
//         }&to=${startDate}&sortBy=${sortBy}&apiKey=${apiKey}`
//       );

//       setArticles(response.data.articles);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };
  // const debounce = (func, delay) => {
  //   let timeoutId;
  //   return function () {
  //     const context = this;
  //     const args = arguments;
  //     clearTimeout(timeoutId);
  //     timeoutId = setTimeout(() => {
  //       func.apply(context, args);
  //     }, delay);
  //   };
  // };

 

//   // Use useEffect with dependencies to trigger fetchData when input values change
//   // Debounce the fetchData function
//   const debouncedFetchData = debounce(fetchData, 500); // 500ms debounce delay

//   useEffect(() => {
//     debouncedFetchData();
//   }, [searchTerm, startDate, endDate, sortBy]);
  return (
    <div>
    <Header />
      <h1>{date}</h1>
      <h1>{endDate}</h1>
      {/* <h1>{sortBy}</h1> */}

      {/* <div className='search'>
           <form>
        <label>
          Search Term:
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
        <label>
          Start Date:
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>
        <label>
          End Date:
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </label>
        <label>
          Sort By:
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="publishedAt">Published Date</option>
            <option value="relevancy">Relevancy</option>
            <option value="popularity">Popularity</option>
          </select>
        </label>
      </form>
    </div> */}
      {/* <div class="containers">
        <form class="search-form">
          <div class="form-group">
            <label for="searchTerm">Search Term:</label>
            <input
              type="text"
              id="searchTerm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="startDate">Start Date:</label>
            <input
              type="date"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="endDate">End Date:</label>
            <input
              type="date"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="sortBy">Sort By:</label>
            <select
              id="sortBy"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="publishedAt">Published Date</option>
              <option value="relevancy">Relevancy</option>
              <option value="popularity">Popularity</option>
            </select>
          </div>
        </form>
      </div> */}

    <div  className="container"> 
    {News.map((article, index)=>{
        return (
            <>
             <NewsCard article={article} key={index} />
            </>
        )
     })}</div>

    </div>
  );
};

export default index;



