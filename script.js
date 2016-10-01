var toDoList={
    todos:[],
    
    displayToDos: function(){
        console.log("my ToDo list", this.todos);
    },

    addToDos: function(todoText){  //Pusing objects instead of text to the array
        this.todos.push({
            todoText:todoText,     // Yes, we can declare 
            completed: false
        });
        this.displayToDos();
    },

    changeToDos:function(position,newtodoText){
        //this.todos[position]=newValue;
        this.todos[position].todoText=newtodoText;
        this.displayToDos();
    },
    
    deleteToDos:function(position){
        this.todos.splice(position, 1);
        this.displayToDos();
    },
    
    toggleToDos:function(position){
        var todo = this.todos[position];
        todo.completed=!todo.completed;
        this.displayToDos();
    }
}