var toDoList={
    todos:["item1","item2","item3","item4"];
    
    displayToDos: function(){
        console.log("my ToDo list", this.todos);
    }

    addToDos: function(todo){
        this.todos.pust(todo);
        this.displayToDos();
    }

    changeToDos:function(position,newValue){
        this.todos[position]=newValue;
        this.displayToDos();
    }
    
    deleteToDos:function(position){
        this.todos.splice(position, 1);
        this.displayToDos();
    }
}