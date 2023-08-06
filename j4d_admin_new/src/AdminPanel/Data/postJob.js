const currentDate = new Date();
const timestamp = currentDate.getTime();
export default [
    {
        id: timestamp,
        jobTitle: "",
        jobOpening:0,
        state:'',
        city:'',
        jobType:'',
        DueDate:'',
        jobField:'',
        workExp : '',
        jobLevel: '',
        pay: '',
        benefits: [],
        minReq : {
                    Req1:'',
                    Req2:'',
                    Req3:'',
                    Req4:'',
                    Req5:'',
                    Req6:''
                 },
        jobDesc : '',         
        skills: [],
        preferances : {
            candidatesWillingToRelocate : true,
            experiencedCandidates : true,
            skillBadgePreferance : true,
            profileCompletion: true,
            skillExp : {
                skillName:"",
                exp : ''
            },
            HighestEd:'',
            priorityLoc : '',
            appliedBefore : '',
        },
        recruiterEmail: '',
        orgLinkedIn: '',
        sharePolicies : true,
        contactAllowance: true,
        lighteningStatus: {
            lightening: false,
            tilldate : "",
            hiresNumber : '',
            adBudget: {
                type:'Daily',
                Amount:'813'
            },
            duration:"Run Continously",
            location:'Mumbai',
            estimatedresults:{
                impressions:'20k',
                clicks :'12k',
                applications:'500+'
            },
            finalPrice:'6400',
            payStatus:''

        }
    }
]