// Run some Jquery
$(document).ready(function(){
    //When Search is clivked Run code
    $('#search').click(function(){
        //Taking the text to search
        var userinput= $('#userinput').val();
        // API url with userinput
        var url= "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search="+userinput;

        
        $.ajax({
            type:"GET",
            url:url,
            async:false,
            dataType: "jsonp",
            success: function(data){
            //     console.log(data[1][0]); for reading
            //     console.log(data[2][0]); for description
            //     console.log(data[3][0]); for link
            //     console.log(data);       for complete Array
                $('#output').html(' '); //for clearing previous output
                for(var i=0;i<data[1].length;i++){
                    $('#output').prepend("<li><a href="+data[3][i]+">"+data[1][i]+"</a></p>"+data[2][i]+"</p></li>");
                }
                $("#userinput").val(' '); //for clearing the previous userinput
            },
            error: function(errorMessage){
                alert("Error");
            }

        });

    });

    // for getting the data on pressing ENTER
    $('#userinput').keypress(function(e){
        if(e.which==13){
            $("#search").click();
        }

    });

});




























