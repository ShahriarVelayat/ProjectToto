screen.defaultSharedElements = ['navbar'];

$('#system_back, #back').hotspot(() =>
  toto.getScreen('List').show({
    sharedElements: ['avatar:avatar', 'Bryan_McDonald'].concat(screen.defaultSharedElements)
  }));