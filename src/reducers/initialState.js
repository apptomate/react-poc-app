const messagesType = {
  messages: {
    messageCount: 0,
    messageList: []
  }
};
const notificationType = {
  notifications: {
    notificationsCount: 0,
    notificationsList: []
  }
};
const taskType = {
  tasks: {
    tasksCount: 0,
    tasksList: []
  }
};
const userprofileType = {
  userprofile: {
    userId: '',
    userImage: '',
    userName:'',
    designation:'',
    defaultStatus:''
  }
};
const infoboxType = {
  infoboxes: {
    infoboxesList: []
  }
};
const monthlyreportType = {
  monthlyreport: {
    reporttitle: '',
    saleschart: {
      chartduration: '',
      labels: [], 
      datasets: []
    }, 
    goalcompletion: {
      goalparametertitle: '',
      goalcompletionList: []
    },
    totalfigures: {
      totalfiguresList: []
    }
  }
};

const visitorreportType = {
  visitorreport: {
    reporttitle: '',
    reportdata: {
      coordinates: [], 
      otherparameters: []
    }
  }
};

const chatdataType = {
  chatdata: {
    chattitle: '',
    directchatmsg: {
      conversation: []
    }, 
    historychatmsg: {
      historylist: []
    }
  }
};

var latestmembersType = {
  latestmembers: {
    widgettitle: '',
    newmembercount: '',
    newmemberlist: []
  }
};

var report30daysType = {
  reportfor30days: {
    reportinfo: []
  }
};

var browserusageType = {
  browserusage: {
    widgettitle: '',
    listofbrowsers: [],
    piechartdata: [], 
    listofcountries: []
  }
};

const studentsType = {
  studentslist:[]
};

export default {
  messages :messagesType,
  notifications: notificationType,
  tasks: taskType,
  userprofile: userprofileType,
  infoboxes: infoboxType,
  monthlyreport: monthlyreportType, 
  visitorreport: visitorreportType, 
  chatdata: chatdataType, 
  latestmembers: latestmembersType, 
  report30days: report30daysType, 
  browserusage: browserusageType, 
  students: studentsType
};

