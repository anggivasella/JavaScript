class Add {
    constructor(...words) {
        this.words = words;
    }
    print(){
        console.log("$" + this.words.join("$") + "$");
    }
}

var x = new Add("hehe", "hoho", "haha", "hihi", "huhu");
var y = new Add("this", "is", "awesome");
var z = new Add("lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit");
x.print();
y.print();
z.print();

/*output = $hehe$hoho$haha$hihi$huhu$
$this$is$awesome$
$lorem$ipsum$dolor$sit$amet$consectetur$adipiscing$elit$*/