//initializing the async function
async function fetchUserData(){
    //definign the API URL
    const apiUrl='https://jsonplaceholder.typicode.com/users';
    //SELECTION OF THE DATA CONTAINER ELEMENT
    const dataContainer = document.getElementById('api-data');
    //fetching data using the try-catch method 
    try{
        //asynchronously getting data 
        const response = await fetch(apiUrl);
        //converting the response to json
        const users = await response.json();
        //clear the loading message 
        dataContainer.innerHTML='';

        //creating the user List 
        const userList=document.createElement('ul');
        //looping through the users array
        users.forEach(function(user){
            const list = document.createElement('li');
            //setting the text content of the <li> to the user's name 
             list.textContent=user.name;
            //append the <li> to userlList
            userList.append(list);
        });
         //append the userList to dataContainer
         dataContainer.append(userList);
         }catch{
            //clear the existing content of dataContainer
            dataContainer.innerHTML='Failed to load user data'; 
        }
}
document.addEventListener('DOMContentLoaded',function(){
    fetchUserData();
});