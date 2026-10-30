
const profiles = {
  quiet: {
    name: 'QUIET EXTRACTION',
    rank: 'COMMANDER',
    bio: `Quiet Extraction is the Commander of Extraction Squad and a dedicated Ghosts of Tabor PvE strategist, researcher, and content creator.

Specializing in the systematic breakdown of game mechanics, Quiet studies spawn behavior, loot distribution, AI patterns, experience progression, and extraction strategies to uncover how the game operates beneath the surface.

Through extensive testing, detailed documentation, and firsthand experimentation, he transforms complex discoveries into practical guides designed to help players maximize efficiency, optimize progression, and improve survival.

His research covers rare loot, keycards, streamer items, boss encounters, hidden mechanics, and high-efficiency XP farming routes.

Beyond research, Quiet puts his strategies to the test through high-level progression and an ongoing deathless extraction streak approaching 300 consecutive successful raids.

As Commander, he leads Extraction Squad with a focus on collaboration, shared knowledge, and building a community where players can learn, improve, and extract together.

STAY QUIET. EXTRACT CLEAN.`
  },
  jugg: {
    name: 'JUGGERNAUTVR1',
    rank: 'LIEUTENANT',
    bio: 'JuggernautVR1 is a Ghosts of Tabor VR streamer specializing in high-value raids, profitable extractions, and building serious vault wealth. Whether running solo or bringing viewers into the action, Jugg focuses on maximizing every raid’s potential. Known for long-range precision, squad operations, and interactive gameplay, he brings a wealth-building mentality to Extraction Squad.'
  },
  mamba: {
    name: 'MAMBA HUNTER',
    rank: 'LIEUTENANT',
    bio: 'Mamba Hunter brings controlled chaos to Extraction Squad, combining tactical instincts with an unpredictable sense of humor. Frequently found battling through Dungeons of Eternity or running raids in Ghosts of Tabor, Mamba thrives on cooperative adventures, unpredictable encounters, and moments that turn serious gameplay into comedy. As he prepares to launch his own content, expect a mix of VR gaming, squad adventures, tactical gameplay, and plenty of laughs.'
  },
  retro: {
    name: 'RETRO REAPER VR',
    rank: 'SERGEANT',
    bio: 'Retro Reaper VR brings an unmistakable retro-inspired identity to Extraction Squad, blending arcade nostalgia with a tactical battlefield aesthetic. As the squad’s Sergeant, Reaper is developing his own direction within the team. More operator intel and future projects will be revealed as his plans take shape.'
  },
  chris: {
    name: 'THIS WASN’T THE PLAN!',
    rank: 'SPECIALIST · CORE SQUAD',
    bio: 'This Wasn’t The Plan! brings an unpredictable, variety-gaming approach to Extraction Squad. Known in game as Uncommon Villager, he currently spends most of his gaming time in Ghosts of Tabor and Dungeons of Eternity, while also exploring console games. The channel has a creative history of original animations and fingerboarding videos, and its next chapter focuses on VR gaming, squad adventures, and whatever happens when the plan goes sideways.'
  }
};

const dialog = document.getElementById('profileDialog');

document.querySelectorAll('[data-operator]').forEach(button => {
  button.addEventListener('click', () => {
    const key = button.dataset.operator;
    const p = profiles[key];

    if (!p || !dialog) return;

    document.getElementById('dialogImage').src = `assets/${key}.webp`;
    document.getElementById('dialogImage').alt = p.name + ' banner';
    document.getElementById('dialogRank').textContent = p.rank;
    document.getElementById('dialogName').textContent = p.name;
    document.getElementById('dialogBio').textContent = p.bio;

    const youtube = document.getElementById('dialogYoutube');
    if (youtube) {
      youtube.href = ({
        quiet: 'https://www.youtube.com/@quietextraction',
        jugg: 'https://www.youtube.com/@juggernautvr1',
        mamba: 'https://www.youtube.com/@mambahunter',
        retro: 'https://www.youtube.com/@retroreapervr',
        chris: 'https://www.youtube.com/@thiswasnttheplanyt'
      })[key];
    }

    dialog.showModal();
  });
});

document.querySelectorAll('.close-dialog,.close-bottom').forEach(button => {
  button.addEventListener('click', () => dialog.close());
});

if (dialog) {
  dialog.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });
}

const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* Extraction Squad — TikTok dossier links */
const squadTikToks = {
  quiet: 'https://www.tiktok.com/@quietextraction',
  jugg: 'https://www.tiktok.com/@juggernaut2300'
};

document.querySelectorAll('[data-operator]').forEach(button => {
  button.addEventListener('click', () => {
    const tiktok = document.getElementById('dialogTiktok');
    if (!tiktok) return;

    const url = squadTikToks[button.dataset.operator];

    if (url) {
      tiktok.href = url;
      tiktok.hidden = false;
    } else {
      tiktok.hidden = true;
    }
  });
});
