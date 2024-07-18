const URL= "https://cat-fact.herokuapp.com";

const Factpara= document.queryselector("#welcome");

const btn=document.queryselector("#download");

const getfact = async()=>{
    console.log("getting data..");
    let response= await fetch(URL);

    console.log(response);
    let data= await response.json();
    Factpara.intertext=data[1].text;

};

btn.addeventlistner("click", getfact);



