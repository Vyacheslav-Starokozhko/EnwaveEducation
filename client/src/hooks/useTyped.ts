
const useTyped = (words: TypedWord[])=>{
    let sequence = []

    words.map((value)=>{
        sequence.push(value.text,value.delay)
    });

    return sequence;
}

export default useTyped
