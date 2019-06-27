//toggle the edit/save button 
function toggleEditSave() {
    if (document.getElementById('editOrSave').innerText == 'Edit') {
        document.getElementById('editOrSave').innerText = 'Save';
        enableEditableText();
    } else {
        document.getElementById('editOrSave').innerText = 'Edit';
        updateEditedBlog();
    }
};

function enableEditableText() {
    //blog body
    var getBlogContentEle = document.getElementById('blogBody');
    var getBlogContent = getBlogContentEle.innerText;
    var inputElement = '<div><br><textarea class="txtBlog" id="txtEditedBlog" rows="15" style="width:99.5%">' +
        getBlogContent +
        '</textarea></div><br>'
    getBlogContentEle.innerHTML = inputElement;
    //blog title    
    var blogTitle = document.getElementById('blogTitleNew');
    var blogTitleContent = blogTitle.innerText;

    var inputTitleElement = '<div><br><textarea class="txtBlog" id="txtEditedBlogTitle"  rows="1" style="width:40%">' +
        blogTitleContent +
        '</textarea></div>'
    blogTitle.innerHTML = inputTitleElement;
}
function updateEditedBlog() {
    //blog body
    var editedBlog = document.getElementById('txtEditedBlog');
    var textEdited = (editedBlog.value).toString();
    var getDiv = document.getElementById('blogBody');
    getDiv.innerText = textEdited;
    //blog title
    var editBlogTitle = document.getElementById('txtEditedBlogTitle');
    var titleTextEdited = (editBlogTitle.value).toString();
    var getTitleDiv = document.getElementById('blogTitleNew');
    getTitleDiv.innerText = titleTextEdited;

}
var likes = 1;
function toggleLike() {
    document.getElementById('button2').innerText = 'Liked!';
    if (likes == 1)
        document.getElementById('counterliked').innerText = likes++ + ' person likes this!';
    else
        document.getElementById('counterliked').innerText = likes++ + ' people have liked this!';
};

function addComment() {    
    var x = document.getElementById("txtCommentCommentPost").addEventListener("onchange", function () {
        document.getElementById("txtCommentCommentPost").innerHTML;
    });

    var x = document.getElementById("txtCommentCommentPost").value;
    if (x != "") {
        var pElement = '<div id="commentdiv"><p class="overflow-visible eachcomment">' + x + '</p></div>';
        document.getElementById("txtCommentCommentPost").value = "";
        var getDiv = document.getElementById('listAllComments');
        getDiv.innerHTML = pElement + getDiv.innerHTML;
    }
}
