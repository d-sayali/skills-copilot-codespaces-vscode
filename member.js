function skillsMember() {
    return skillsMember.map(skills => {
        return {
            skill: skills.skill,
            level: skills.level
        }
    });
}