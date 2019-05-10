// 控制管理按钮的显示
let show = false
function showManage(){
    show =  !show
    if(show){
        $(".handle-btn").css("visibility","visible")
        $("#manage").attr("class", "btn btn-primary")
    }else{
        $(".handle-btn").css("visibility","hidden")
        $("#manage").attr("class", "btn btn-default")
    }
}

// 分页
$('.cut-page').click(function(e){
  var target = e.target
  
});


// 增加商品
$('.add').click(function(e){
    // let product = false
    // product = !product
    console.log(event.target.id)
    if($(`#${event.target.id}`).text() === "+"){
        $(`#${event.target.id}`).html("√")
        $(`#${event.target.id}`).attr("class","btn btn-success add")
    }else{
        $(`#${event.target.id}`).html("+")
        $(`#${event.target.id}`).attr("class","btn btn-default add")
        
    }
})

// 上传图片
function upLoadClick() {
    // console.log(event.target)
     $("#up").click()
}

// 判断是否显示图片
if($('.upload img').attr("src") === "#"){
    $('.upload img').css("display","none")
}

// 专题信息展示的时候导航栏控制展示信息
function showBasic(){
    $("#basic").attr("class","active")
    $("#owner").attr("class","")
    $('#addActivity').css("display","block")
    $('#showProduct').css("display","none")
}

function showOwner(){
    $("#owner").attr("class","active")
    $("#basic").attr("class","")
    $('#addActivity').css("display","none")
    $('#showProduct').css("display","block")
}

// 控制专题信息模态框的显示
$('.box .thumbnail img').click(function(){
    $('#activityMenu').css("display","block")
    $('#exampleModal').modal()
})

// 控制专题信息导航栏的展示
function addActivity(){
    console.log(1)
    $('#activityMenu').css("display","none")
    $('#addActivity').css("display","block")
    $('#showProduct').css("display","none")
}
