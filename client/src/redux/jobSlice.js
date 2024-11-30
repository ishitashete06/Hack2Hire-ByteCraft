// import { createSlice } from "@reduxjs/toolkit";

// const jobSlice = createSlice({
//     name:"job",
//     initialState:{
//         allJobs:[],
//         allAdminJobs:[],
//         singleJob:null, 
//         searchJobByText:"",
//         allAppliedJobs:[],
//         searchedQuery:"",
//     },
//     reducers:{
//         // actions
//         setAllJobs:(state,action) => {
//             state.allJobs = action.payload;
//         },
//         setSingleJob:(state,action) => {
//             state.singleJob = action.payload;
//         },
//         setAllAdminJobs:(state,action) => {
//             state.allAdminJobs = action.payload;
//         },
//         setSearchJobByText:(state,action) => {
//             state.searchJobByText = action.payload;
//         },
//         setAllAppliedJobs:(state,action) => {
//             state.allAppliedJobs = action.payload;
//         },
//         setSearchedQuery:(state,action) => {
//             state.searchedQuery = action.payload;
//         }
//     }
// });
// export const {
//     setAllJobs, 
//     setSingleJob, 
//     setAllAdminJobs,
//     setSearchJobByText, 
//     setAllAppliedJobs,
//     setSearchedQuery
// } = jobSlice.actions;
// export default jobSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
    name: "job",
    initialState: {
        allJobs: [],
        allAdminJobs: [],
        singleJob: null,
        searchJobByText: "",
        allAppliedJobs: [],
        searchedQuery: "",
        categoryFilter: "", // Added state to store the selected category filter
    },
    reducers: {
        // actions
        setAllJobs: (state, action) => {
            state.allJobs = action.payload;
        },
        setSingleJob: (state, action) => {
            state.singleJob = action.payload;
        },
        setAllAdminJobs: (state, action) => {
            state.allAdminJobs = action.payload;
        },
        setSearchJobByText: (state, action) => {
            state.searchJobByText = action.payload;
        },
        setAllAppliedJobs: (state, action) => {
            state.allAppliedJobs = action.payload;
        },
        setSearchedQuery: (state, action) => {
            state.searchedQuery = action.payload;
        },
        setCategoryFilter: (state, action) => { // Added action to set category filter
            state.categoryFilter = action.payload;
        },
    },
});

export const {
    setAllJobs,
    setSingleJob,
    setAllAdminJobs,
    setSearchJobByText,
    setAllAppliedJobs,
    setSearchedQuery,
    setCategoryFilter, // Export new action for setting the category filter
} = jobSlice.actions;

export default jobSlice.reducer;
