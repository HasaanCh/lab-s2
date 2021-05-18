jQuery(document).ready(function($)
{


// $('.openmodale').click(function (e) {
//     e.preventDefault();
//     $('.modale').addClass('opened');
// });
// $('.closemodale').click(function (e) {
//     e.preventDefault();
//     $('.modale').removeClass('opened');
// });

var array;


    getData(1);
    // AddRecord();
   
    function getData(pagenum)
    {
        $.ajax({
            type: "get",
            url: "https://reqres.in/api/users?page="+pagenum,
            beforeSend:function()
            {
             $('.main-data').append('<p class="loading">Loading.....</p>');
            },
            success: function (response) {
             $('.main-data').html('');
             console.log(response);
             for(var i=0;i<response.data.length;i++)
             {
                  $('.main-data').append('<div class="record"> <p class="id">'+response.data[i].id+'</p> <li class="fname record-list">'+response.data[i].first_name+'</li> <li class="lname record-list">'+response.data[i].last_name+'</li> <li class="email record-list">'+response.data[i].email+'</li> <li class="avatar record-list"> <img src="'+response.data[i].avatar+'" alt=""> </li> </div>');
             }
                
            }
        });
    }

    $('.next.nav-button').click(function()
    {
        getData(2);
    });

    $('.prev.nav-button').click(function()
    {
        getData(1);
    });


   

//    function deleteRecord(id,ele)
//    {
//     $.ajax({
//         type: "DELETE",
//         url: "https://jsonplaceholder.typicode.com/users/1/todos/" +id,
//         beforeSend:function()
//         {
         
//         },
//         success: function (response) {
//          alert("Record Deleted");
//             ele.parent().parent().remove();
//             getData();
//         }
//     });
//    }


//    function AddRecord()
//    {
//     $('#btn_ingresar').off().click(function()
//     {
//     var name=$('.name-field.input').val();
//     var color=$('.color-field.input').val();
//     var department=$('.dep-field.input').val();
//     var description=$('.desc-field.input').val();
//     var price=$('.price-field.input').val();

//     $.ajax({
//         type: "POST",
//         url: "https://jsonplaceholder.typicode.com/users/1/todos",
//         data:{color:color,department:department,price:price,name:name,description:description},
//         beforeSend:function()
//         {
//          console.log(name,color,department,description,price);
//         },
//         success: function (response) {
//         alert("Record Added");
//         getData();
//         }
//     });
//     });    
//    }

//    function editRecord(id,nanu)
//    {
//     $('.modale').addClass('opened');

//     $('.name-field.input').val(nanu[0]);
//     $('.color-field.input').val(nanu[1]);
//     $('.dep-field.input').val(nanu[2]);
//   $('.desc-field.input').val(nanu[3]);
//    $('.price-field.input').val(nanu[4]);
//     $('#btn_ingresar').off().click(function()
//     {
        
//     var name=$('.name-field.input').val();
//     var color=$('.color-field.input').val();
//     var department=$('.dep-field.input').val();
//     var description=$('.desc-field.input').val();
//     var price=$('.price-field.input').val();

//     $.ajax({
//         type: "PUT",
//         url: "https://jsonplaceholder.typicode.com/users/1/todos"+id,
//         data:{color:color,department:department,price:price,name:name,description:description,_id:id},
//         beforeSend:function()
//         {
         
//         },
//         success: function (response) {
//         alert("Record Edited");
//         getData();
//         }
//     });

//     });

//    }




});