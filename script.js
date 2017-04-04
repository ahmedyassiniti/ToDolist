$(document).ready(function(){
		$("#btn").on("click",AddTask);


	function AddTask(event){
		event.preventDefault();
		//Add task
		var taskname=$("#task").val().trim("");
		var myul=$("#myul").find("li");
		var flag=false;
		if(taskname=="")
		{
			alert("please enter vaild task");
		}
		else
		{
			if(myul.length>0)
			{

				for (var i = 0; i < myul.length; i++)
			  { 
				if(taskname == myul[i].innerHTML.trim(" "))
				{
					flag=true;
				}
				
							 }
			 if(flag == true) {
				alert("item exists");
			} 
			else 
			{
				$("#myul").append('<li>'+taskname+'</li>');
				$("#task").val("");
			}
			

			}
else
{
			$("#myul").append('<li>'+taskname+'</li>');
			$("#task").val("");
		}

		}


		 


	

}
//DELETE TASK
	$('ul:li').on('click',function(){
		$(this).parent().remove();
		
	})

});