/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    "name": "Steve Waweru",
    "role": "Full Stack Web Developer",
    "contacts": {
        "github": "stevewaweru",
        "email": "steviewez@gmail.com",
        "mobile": "123456",
        "twitter": "_swaweru",
        "location": "Nairobi"
    },
    "biopic": "images/fry.jpg",
    "welcomeMessage": "Changing the world, one variable at a time",
    "skills": ["python", "web application development", "health informatics"]
};

bio.diplay =  function () {
    $('#header').prepend(HTMLheaderRole.replace('%data%', bio.role));
    $('#header').prepend(HTMLheaderName.replace('%data%', bio.name));
    $('#topContacts').append(HTMLmobile.replace('%data%', bio.contacts.mobile));
    $('#topContacts').append(HTMLemail.replace('%data%', bio.contacts.email));
    $('#topContacts').append(HTMLtwitter.replace('%data%', bio.contacts.twitter));
    $('#topContacts').append(HTMLgithub.replace('%data%', bio.contacts.github));
    $('#topContacts').append(HTMLlocation.replace('%data%', bio.contacts.location));
    $('#header').append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));
    $('#header').append(HTMLbioPic.replace('%data%', bio.biopic));

    if (bio.skills.length > 0) {
        $('#header').append(HTMLskillsStart);
        for (skill in bio.skills){
            $('#skills').append(HTMLskills.replace('%data%', bio.skills[skill]))
        }

    }
};
bio.diplay();

var work = {
    "jobs": [
        {
            "employer":"University of Nairobi",
            "title": "Software Developer",
            "location": "Nairobi",
            "dates": "2015-2016",
            "description": "Develop, Maintain and support MoH on Health Systems"
        },
        {
            "employer": "IntelliSoft Consulting",
            "title": "Project Management Intern",
            "location": "Nairobi",
            "dates": "2013",
            "description": "Manage process of Software Development"
        },
        {
            "employer": "Andela",
            "title": "Senior Software Engineer",
            "location": "Mombasa",
            "dates": "2016 - Present",
            "description": "Software Engineering"
        }
    ]
};

work.display = function () {
    if (work.jobs.length > 0) {
        $('#workExperience').append(HTMLworkStart);
        for (job in work.jobs){
            var formattedData = HTMLworkEmployer.replace('%data%', work.jobs[job].employer) + HTMLworkTitle.replace('%data%', work.jobs[job].title);
            $('.work-entry:last').append(formattedData);
            $('.work-entry:last').append(HTMLworkDates.replace('%data%', work.jobs[job].dates));
            $('.work-entry:last').append(HTMLworkDescription.replace('%data%', work.jobs[job].description));
        }
    }
};

work.display();

var education = {
    "schools": [
        {
            "name": "University of Nairobi",
            "dates": "2011-2015",
            "location": "Nairobi",
            "degree": "Comp Sci",
            "url": "",
            "major": []
        },
        {
            "name": "Institute of Advanced Technology",
            "dates": "2011",
            "location": "Nairobi",
            "degree": "Network Admin",
            "url": "",
            "major": []
        },
        {
            "name": "Udacity",
            "dates": "2016",
            "location": "",
            "degree": "Full Stack Web Developer",
            "url": "",
            "major": []
        }
        ]
};

education.diplay = function () {
    for(school in education.schools){
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLschoolName.replace('%data%', education.schools[school].name));
        $(".education-entry:last").append(HTMLschoolLocation.replace('%data%', education.schools[school].location));
        $(".education-entry:last").append(HTMLschoolDates.replace('%data%', education.schools[school].dates));
        $(".education-entry:last").append(HTMLschoolDegree.replace('%data%', education.schools[school].degree));
    }
};
education.diplay();

var projects = {
    "projects": [
        {
            "title": "Soddo Project",
            "dates": "2013",
            "description": "Implementation of OpenMRS in Soddo Hospital, Ethiopia",
            "images": []
        },
        {
            "title": "TinK Network",
            "dates": "2016",
            "description": "Implementation of an Innovators Network",
            "images": []
        }
    ]
};

projects.display = function () {
    for (var project in projects.projects){
        $("#projects").append(HTMLprojectStart);
        $(".project-entry").append(HTMLprojectTitle.replace("%data%", projects.projects[project].title));
        $(".project-entry").append(HTMLprojectDates.replace("%data%", projects.projects[project].dates));
        $(".project-entry").append(HTMLprojectDescription.replace("%data%", projects.projects[project].description));

        if (projects.projects[project].images.length > 0){
            $(".project-entry").append(HTMLprojectImage.replace("%data%", "images/fry.jpg"));
        }

    }
};

projects.display();


function locationizer(work_object){
    var locationArray = [];
    for (var location in work_object.jobs){
        locationArray.push(work_object.jobs[location].location);
    }
    return locationArray;
}

$("#main").prepend(internationalizeButton);

function inName(name){
    var names = name.split(" ");
    var name1 = names[0][0].toUpperCase() + names[0].slice(1).toLowerCase();
    var name2 = names[1].toUpperCase();
    return name1 + " " + name2;
}

$("#mapDiv").append(googleMap);