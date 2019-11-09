class Start {
    getNums() {
        return this.nums || 0;
    }
    set(nums) {
        this.nums = nums
    }
};

class A extends Start {
    constructor (){
        super();
        this.set((10 + 25) * 4 + 52 * (3 + 6));
    }
};

class B extends Start {
    constructor (){
        super();
        this.set((10 + 25) * 4 + 52 * (3 + 6));
    }
};

class C extends Start {
    constructor (){
        super();
        this.set((10 + 25) * 4 + 52 * (3 + 6));
    }
};

class Composite extends Start {
    constructor () {
        super();
        this.elem = [];
    }

    add(elem){
        this.elem.push(elem);
    }

    getSumm(){
        return this.elem
                .map( start => start.getNums())
                .reduce((a, b) => a + b);
    }
};

const s = new Composite();
s.add(new A());
s.add(new B());
s.add(new C());

console.log(`${s.getSumm()}`) 