/* ==================================
   AshCore AI V1.0
   chat.js Part 1
================================== */

const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const typingArea = document.getElementById("typingArea");

function addUserMessage(message){

const div = document.createElement("div");

div.className = "user-message";

div.textContent = message;

chatBox.appendChild(div);

scrollBottom();

}

function addAIMessage(message){

const div = document.createElement("div");

div.className = "ai-message";

div.innerHTML = message;

chatBox.appendChild(div);

scrollBottom();

}

function scrollBottom(){

chatBox.scrollTop = chatBox.scrollHeight;

}

/* ==================================
   AshCore AI V1.0
   chat.js Part 2
================================== */

function sendMessage(){

const message = userInput.value.trim();

if(message==="") return;

addUserMessage(message);

userInput.value="";

typingArea.style.display="flex";

scrollBottom();

setTimeout(()=>{

typingArea.style.display="none";

let reply="";

const text=message.toLowerCase();

if(text.includes("hello") || text.includes("hi")){
reply="👋 Hello! Welcome to AshCore AI.";
}
else if(text.includes("your name")){
reply="🤖 My name is AshCore AI.";
}
else if(text.includes("who made you")){
reply="👨‍💻 I was created by Ashish Kumar.";
}
else{
reply="😊 I received your message:<br><br><b>"+message+"</b><br><br>Database integration is coming soon.";
}

addAIMessage(reply);

},1200);

}

sendBtn.addEventListener("click",sendMessage);

userInput.addEventListener("keypress",function(e){

if(e.key==="Enter"){

e.preventDefault();

sendMessage();

}

});
/* ==================================
   AshCore AI V1.0
   chat.js Part 3
================================== */

const menuBtn = document.getElementById("menuBtn");
const closeMenu = document.getElementById("closeMenu");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");
const newChatBtn = document.getElementById("newChatBtn");

// Open Menu
menuBtn.addEventListener("click", () => {
    sideMenu.classList.add("active");
    overlay.classList.add("active");
});

// Close Menu
function closeSidebar() {
    sideMenu.classList.remove("active");
    overlay.classList.remove("active");
}

closeMenu.addEventListener("click", closeSidebar);
overlay.addEventListener("click", closeSidebar);

// New Chat
newChatBtn.addEventListener("click", () => {

    chatBox.innerHTML = `
    <div class="ai-message">
        👋 Hello Ashish!<br><br>
        New chat started.<br><br>
        How can I help you today?
    </div>
    `;

    userInput.value = "";
    scrollBottom();

});

// Auto Focus
window.onload = () => {
    userInput.focus();
};

// Future API Ready
// fetch("/api/chat")
// This section will be connected later with your AI Database.
