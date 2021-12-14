sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    projectile.destroy(effects.disintegrate, 500)
})
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    info.changeLifeBy(-1)
    projectile.destroy(effects.disintegrate, 500)
})
let mySprite2: Sprite = null
let projectile: Sprite = null
info.setScore(0)
info.setLife(3)
tiles.setWallAt(tiles.getTileLocation(0, 0), true)
if (info.life() > 0) {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . b 5 5 b . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . b b b b b 5 5 5 5 5 5 5 b . . 
        . b d 5 b 5 5 5 5 5 5 5 5 b . . 
        . . b 5 5 b 5 d 1 f 5 d 4 f . . 
        . . b d 5 5 b 1 f f 5 4 4 c . . 
        b b d b 5 5 5 d f b 4 4 4 4 b . 
        b d d c d 5 5 b 5 4 4 4 4 4 4 b 
        c d d d c c b 5 5 5 5 5 5 5 b . 
        c b d d d d d 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `, 0, 50)
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        e . . . . . . . . . . . . . . e 
        e . . . . . . . . . . . . . . e 
        e . . . . . . . . . . . . . . e 
        e . . . . . . . . . . . . . . e 
        e . . . . . . . . . . . . . . e 
        e . . . . . . . . . . . . . . e 
        e . . . . . . . . . . . . . . e 
        e e e e e e e e e e e e e e e e 
        `, SpriteKind.Player)
    mySprite2.setPosition(76, 111)
    controller.moveSprite(mySprite2, 100, 0)
}
