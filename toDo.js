var toDoList={
    todos:[],
    
    displayToDos: function(){
        console.log("my ToDo list", this.todos);
    },

    addToDos: function(todoText){  //Pusing objects instead of text to the array
        this.todos.push({
            todoText=todoText,     // Yes, we can declare 
            completed = false
        });
        this.displayToDos();
    },

    changeToDos:function(position,newValue){
        this.todos[position]=newValue;
        this.displayToDos();
    },
    
    deleteToDos:function(position){
        this.todos.splice(position, 1);
        this.displayToDos();
    },
}