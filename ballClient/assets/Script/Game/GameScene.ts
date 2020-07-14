const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property({
        type: cc.Node,
        tooltip: "ball",
    })
    ball = null;

    onLoad () {
        cc.director.getPhysicsManager().enabled = true; // 开启物理系统
        cc.director.getPhysicsManager().debugDrawFlags = cc.PhysicsManager.DrawBits.e_aabbBit | // 物理系统调试信息
            cc.PhysicsManager.DrawBits.e_pairBit |
            cc.PhysicsManager.DrawBits.e_centerOfMassBit |
            cc.PhysicsManager.DrawBits.e_jointBit |
            cc.PhysicsManager.DrawBits.e_shapeBit
        ;
    }

    start () {

    }

    public onFireClick(): void {
        if (this.ball) {
            const rigidbody = this.ball.getComponent(cc.RigidBody);
            // const mass = rigidbody.getMass();
            // cc.log(mass);
            const force: cc.Vec2 = new cc.Vec2(2000, -2000);
            // rigidbody.applyForceToCenter(force);
            rigidbody.linearVelocity = force;
        }
    }

    // update (dt) {}
}
