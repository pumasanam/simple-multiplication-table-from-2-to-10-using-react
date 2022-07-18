import React,{useState} from 'react'

const Multiplication = () => {
    const [two1,setTwo1] = useState(1);
    const [two, setTwo] = useState(2);
    const twoFun =()=>{
        if(two1 >=10){
            setTwo1(1);
            setTwo(2);
        }
        else{
            setTwo1(two1+1);
            setTwo(two+2);
        }
        
    };

    const twobackFun =()=>{
        if(two1<=1){
            setTwo1(1);
            setTwo(2);
        }
        else{
            setTwo1(two1-1);
            setTwo(two-2);
        }
            
    };
    // two table section


    const [three1,setthree1] = useState(1);
    const [three, setthree] = useState(3);
    const threeFun =()=>{
        if(three1 >=10){
            setthree1(1);
            setthree(3);
        }
        else{
            setthree1(three1+1);
            setthree(three+3);
        }
        
    };

    const threebackfun =()=>{
        if(three1<=1){
            setthree1(1);
            setthree(3);
        }
        else{
            setthree1(three1-1);
            setthree(three-3);
        }
    }

    // three section


    const [four1,setfour1] = useState(1);
    const [four, setfour] = useState(4);
    const fourFun =()=>{
        if(four1 >=10){
            setfour1(1);
            setfour(4);
        }
        else{
            setfour1(four1+1);
            setfour(four+4);
        }
        
    };

    const fourbackfun =()=>{
        if(four1<=1){
            setfour1(1);
            setfour(4);
        }
        else{
            setfour1(four1-1);
            setfour(four-4);
        }
    };

    // four multiplication section



    const [five1,setfive1] = useState(1);
    const [five, setfive] = useState(5);
    const fiveFun =()=>{
        if(five1 >=10){
            setfive1(1);
            setfive(5);
        }
        else{
            setfive1(five1+1);
            setfive(five+5);
        }
        
    };

    const fivebackfun =()=>{
        if(five1<=1){
            setfive1(1);
            setfive(5);
        }
        else{
            setfive1(five1-1);
            setfive(five-5);
        }
    };
    // five section

    const [six1,setsix1] = useState(1);
    const [six, setsix] = useState(6);
    const sixFun =()=>{
        if(six1 >=10){
            setsix1(1);
            setsix(6);
        }
        else{
            setsix1(six1+1);
            setsix(six+6);
        }
        
    };

    const sixbackfun =()=>{
        if(six1<=1){
            setsix1(1);
            setsix(6);
        }
        else{
            setsix1(six1-1);
            setsix(six-6);
        }
    };
    // six multiplication section


    const [seven1,setseven1] = useState(1);
    const [seven, setseven] = useState(7);
    const sevenFun =()=>{
        if(seven1 >=10){
            setseven1(1);
            setseven(7);
        }
        else{
            setseven1(seven1+1);
            setseven(seven+7);
        }
        
    };

    const sevenbackfun =()=>{
        if(seven1<=1){
            setseven1(1);
            setseven(7);
        }
        else{
            setseven1(seven1-1);
            setseven(seven-7);
        }
    };

    // 7 multiplication table



    const [eight1,seteight1] = useState(1);
    const [eight, seteight] = useState(8);
    const eightFun =()=>{
        if(eight1 >=10){
            seteight1(1);
            seteight(8);
        }
        else{
            seteight1(eight1+1);
            seteight(eight+8);
        }
        
    };

    const eightbackfun =()=>{
        if(eight1<=1){
            seteight1(1);
            seteight(8);
        }
        else{
            seteight1(eight1-1);
            seteight(eight-8);
        }
    };

    // 8 multiplication table


    const [nine1,setnine1] = useState(1);
    const [nine, setnine] = useState(9);
    const nineFun =()=>{
        if(nine1 >=10){
            setnine1(1);
            setnine(9);
        }
        else{
            setnine1(nine1+1);
            setnine(nine+9);
        }
        
    };

    const ninebackfun =()=>{
        if(nine1<=1){
            setnine1(1);
            setnine(9);
        }
        else{
            setnine1(nine1-1);
            setnine(nine-9);
        }
    };

    // nine table section


    const [ten1,setten1] = useState(1);
    const [ten, setten] = useState(10);
    const tenFun =()=>{
        if(ten1 >=10){
            setten1(1);
            setten(10);
        }
        else{
            setten1(ten1+1);
            setten(ten+10);
        }
        
    };

    const tenbackfun =()=>{
        if(ten1<=1){
            setten1(1);
            setten(10);
        }
        else{
            setten1(ten1-1);
            setten(ten-10);
        }
    };


   


    

  return (
    <>
      <div className="table">
        <h1>Multiplication Table From 2 To 10</h1>

        <div className="table_list">
            <div className="mult_table">
                <h2>2 * {two1} = {two}</h2>
                <button onClick={twoFun}>Click</button>
                <button onClick={twobackFun} className="second">Back</button>
            </div>

{/* 2 */}


            <div className="mult_table">
                <h2>3 * {three1} = {three}</h2>
                <button onClick={threeFun}>Click</button>
                <button onClick={threebackfun} className="second">Back</button>
            </div>
{/* 3 */}

            <div className="mult_table">
                <h2>4 * {four1} = {four}</h2>
                <button onClick={fourFun}>Click</button>
                <button onClick={fourbackfun} className="second">Back</button>
            </div>

{/* 4 */}
            <div className="mult_table">
                <h2>5 * {five1} = {five}</h2>
                <button onClick={fiveFun}>Click</button>
                <button onClick={fivebackfun} className="second">Back</button>
            </div>
{/* 5 */}
            <div className="mult_table">
                <h2>6 * {six1} = {six}</h2>
                <button onClick={sixFun}>Click</button>
                <button onClick={sixbackfun} className="second">Back</button>
            </div>
{/* 6 */}

            <div className="mult_table">
                <h2>7 * {seven1} = {seven}</h2>
                <button onClick={sevenFun}>Click</button>
                <button onClick={sevenbackfun} className="second">Back</button>
            </div>
{/* 7 */}

            <div className="mult_table">
                <h2>8 * {eight1} = {eight}</h2>
                <button onClick={eightFun}>Click</button>
                <button onClick={eightbackfun} className="second">Back</button>
            </div>
{/* 8 */}
            <div className="mult_table">
                <h2>9 * {nine1} = {nine}</h2>
                <button onClick={nineFun}>Click</button>
                <button onClick={ninebackfun} className="second">Back</button>
            </div>
{/* 9 */}
            <div className="mult_table">
                <h2>10 * {ten1} = {ten}</h2>
                <button onClick={tenFun}>Click</button>
                <button onClick={tenbackfun} className="second">Back</button>
            </div>
{/* 10 */}
        </div>
      </div>
    </>
  );
};

export default Multiplication;
