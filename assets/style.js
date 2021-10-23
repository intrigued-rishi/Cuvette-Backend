var del=$("input");
//creating ajax request to delete the tasks from frontend part
$("button").eq(1).on("click",function(){
    for(let i=2;i<del.length;i++){
        if(del[i].checked)
        {
            var id=del.eq(i).parent().get(0).getAttribute("data-value");
            $.ajax({
                type: "post",
                url: "/delTask",
                data: {data:id},
                success: function (response) {
                    console.log("Deleted!");
                }
            });
            del.eq(i).parent().parent().remove();
        }
    }
});