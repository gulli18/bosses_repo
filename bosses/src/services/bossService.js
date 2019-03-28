const bossService = () => {
    return {
        getBosses: () => fetch('http://localhost:4500/api/bosses').then(d => d.json()).then(d => d),
        getBoss: (bossId) => fetch(`http://localhost:4500/api/bosses/:${bossId}`).then(d => d.json()).then(d => d),
        updateBoss: () => fetch('http://localhost:4500/api/bosses/:bossId').then(d => d.json()).then(d => d.main.temp),
        deleteBoss: () => fetch('http://localhost:4500/api/bosses/:bossId').then(d => d.json()).then(d => d.main.temp),
        createBoss: () => fetch('http://localhost:4500/api/bosses').then(d => d.json()).then(d => d.main.temp)
    };
};

export default bossService();