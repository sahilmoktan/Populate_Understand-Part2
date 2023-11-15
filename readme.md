learning data association:Populate mongoose

data association : connection between 2 model so could be related with eachother's relation
eg: users ko keyId lai user le banayeko post sangai jodne taki kasko post ho vanera paxi verify garna sahaj hos, vice versa

steps implimented
created userModel inside user.js and postModel in post.js uder routes folder
in index.js made route of creating user and post
after creating user and post individually, post ko model ma user id pani add hune field thapne
    user:{
    type:mongoose.Schema.Types.ObjectId
    ref:'User'
    },
    mathi code le kunai post huda user ko keyId post ma attach vayera janxa, ref le userKo database bata vanera bujauxa, same vice versa, user ko model ma post ko keyId auune field thapne but yesma chai already array hunxa, jaha post haru collection ko lagi space hunxa, tyo array ma user le thapeko/gareko post ko id arrya ma collect hudai janxa, (user le gareko post garu ko collection vayera basne array)
createPost route ma user ko field add garne, array ma post id push garne so user ko collection ma dehiyos
/getAllHisPost ma hamile user lai find gareu, ani user ko data lai poplate gareu taki usko pani data fully dekhyos 


