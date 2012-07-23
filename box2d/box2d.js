/*
 * Copyright (c) 2006-2007 Erin Catto http://www.gphysics.com
 *
 * This software is provided 'as-is', without any express or implied
 * warranty.  In no event will the authors be held liable for any damages
 * arising from the use of this software.
 * Permission is granted to anyone to use this software for any purpose,
 * including commercial applications, and to alter it and redistribute it
 * freely, subject to the following restrictions:
 * 1. The origin of this software must not be misrepresented; you must not
 * claim that you wrote the original software. If you use this software
 * in a product, an acknowledgment in the product documentation would be
 * appreciated but is not required.
 * 2. Altered source versions must be plainly marked as such, and must not be
 * misrepresented as being the original software.
 * 3. This notice may not be removed or altered from any source distribution.
 *
 * 
 * Sean Lin 2012-5-8,
 *
 * The library is box2dweb, http://code.google.com/p/box2dweb/
 *
 * It is a port of Box2DFlash 2.1a to JavaScript.
 * You can read the documentation for Box2dFlash, since nearly everything is
 * organized the same way. http://www.box2dflash.org/docs/2.1a/reference/
 *
 */

var Box2D = {};

(function (a2j, undefined) {

    if(!(Object.prototype.defineProperty instanceof Function)
        && Object.prototype.__defineGetter__ instanceof Function
        && Object.prototype.__defineSetter__ instanceof Function)
    {
        Object.defineProperty = function(obj, p, cfg) {
            if(cfg.get instanceof Function)
                obj.__defineGetter__(p, cfg.get);
            if(cfg.set instanceof Function)
                obj.__defineSetter__(p, cfg.set);
        }
    }

    function emptyFn() {};
    a2j.inherit = function(cls, base) {
        var tmpCtr = cls;
        emptyFn.prototype = base.prototype;
        cls.prototype = new emptyFn;
        cls.prototype.constructor = tmpCtr;
    };

    a2j.generateCallback = function generateCallback(context, cb) {
        return function () {
            cb.apply(context, arguments);
        };
    };

    a2j.NVector = function NVector(length) {
        if (length === undefined) length = 0;
        var tmp = new Array(length || 0);
        for (var i = 0; i < length; ++i)
            tmp[i] = 0;
        return tmp;
    };

    a2j.is = function is(o1, o2) {
        if (o1 === null) return false;
        if ((o2 instanceof Function) && (o1 instanceof o2)) return true;
        if ((o1.constructor.__implements != undefined) && (o1.constructor.__implements[o2])) return true;
        return false;
    };

    a2j.parseUInt = function(v) {
        return Math.abs(parseInt(v));
    }

})(Box2D);

//#TODO remove assignments from global namespace
var Vector = Array;
var Vector_a2j_Number = Box2D.NVector;
//package structure
if (typeof(Box2D) === "undefined") Box2D = {};
if (typeof(Box2D.Collision) === "undefined") Box2D.Collision = {};
if (typeof(Box2D.Collision.Shapes) === "undefined") Box2D.Collision.Shapes = {};
if (typeof(Box2D.Common) === "undefined") Box2D.Common = {};
if (typeof(Box2D.Common.Math) === "undefined") Box2D.Common.Math = {};
if (typeof(Box2D.Dynamics) === "undefined") Box2D.Dynamics = {};
if (typeof(Box2D.Dynamics.Contacts) === "undefined") Box2D.Dynamics.Contacts = {};
if (typeof(Box2D.Dynamics.Controllers) === "undefined") Box2D.Dynamics.Controllers = {};
if (typeof(Box2D.Dynamics.Joints) === "undefined") Box2D.Dynamics.Joints = {};
//pre-definitions
(function () {
    Box2D.Collision.IBroadPhase = 'Box2D.Collision.IBroadPhase';

    function b2AABB() {
        b2AABB.b2AABB.apply(this, arguments);
    };
    Box2D.Collision.b2AABB = b2AABB;

    function b2Bound() {
        b2Bound.b2Bound.apply(this, arguments);
    };
    Box2D.Collision.b2Bound = b2Bound;

    function b2BoundValues() {
        b2BoundValues.b2BoundValues.apply(this, arguments);
        if (this.constructor === b2BoundValues) this.b2BoundValues.apply(this, arguments);
    };
    Box2D.Collision.b2BoundValues = b2BoundValues;

    function b2Collision() {
        b2Collision.b2Collision.apply(this, arguments);
    };
    Box2D.Collision.b2Collision = b2Collision;

    function b2ContactID() {
        b2ContactID.b2ContactID.apply(this, arguments);
        if (this.constructor === b2ContactID) this.b2ContactID.apply(this, arguments);
    };
    Box2D.Collision.b2ContactID = b2ContactID;

    function b2ContactPoint() {
        b2ContactPoint.b2ContactPoint.apply(this, arguments);
    };
    Box2D.Collision.b2ContactPoint = b2ContactPoint;

    function b2Distance() {
        b2Distance.b2Distance.apply(this, arguments);
    };
    Box2D.Collision.b2Distance = b2Distance;

    function b2DistanceInput() {
        b2DistanceInput.b2DistanceInput.apply(this, arguments);
    };
    Box2D.Collision.b2DistanceInput = b2DistanceInput;

    function b2DistanceOutput() {
        b2DistanceOutput.b2DistanceOutput.apply(this, arguments);
    };
    Box2D.Collision.b2DistanceOutput = b2DistanceOutput;

    function b2DistanceProxy() {
        b2DistanceProxy.b2DistanceProxy.apply(this, arguments);
    };
    Box2D.Collision.b2DistanceProxy = b2DistanceProxy;

    function b2DynamicTree() {
        b2DynamicTree.b2DynamicTree.apply(this, arguments);
        if (this.constructor === b2DynamicTree) this.b2DynamicTree.apply(this, arguments);
    };
    Box2D.Collision.b2DynamicTree = b2DynamicTree;

    function b2DynamicTreeBroadPhase() {
        b2DynamicTreeBroadPhase.b2DynamicTreeBroadPhase.apply(this, arguments);
    };
    Box2D.Collision.b2DynamicTreeBroadPhase = b2DynamicTreeBroadPhase;

    function b2DynamicTreeNode() {
        b2DynamicTreeNode.b2DynamicTreeNode.apply(this, arguments);
    };
    Box2D.Collision.b2DynamicTreeNode = b2DynamicTreeNode;

    function b2DynamicTreePair() {
        b2DynamicTreePair.b2DynamicTreePair.apply(this, arguments);
    };
    Box2D.Collision.b2DynamicTreePair = b2DynamicTreePair;

    function b2Manifold() {
        b2Manifold.b2Manifold.apply(this, arguments);
        if (this.constructor === b2Manifold) this.b2Manifold.apply(this, arguments);
    };
    Box2D.Collision.b2Manifold = b2Manifold;

    function b2ManifoldPoint() {
        b2ManifoldPoint.b2ManifoldPoint.apply(this, arguments);
        if (this.constructor === b2ManifoldPoint) this.b2ManifoldPoint.apply(this, arguments);
    };
    Box2D.Collision.b2ManifoldPoint = b2ManifoldPoint;

    function b2Point() {
        b2Point.b2Point.apply(this, arguments);
    };
    Box2D.Collision.b2Point = b2Point;

    function b2RayCastInput() {
        b2RayCastInput.b2RayCastInput.apply(this, arguments);
        if (this.constructor === b2RayCastInput) this.b2RayCastInput.apply(this, arguments);
    };
    Box2D.Collision.b2RayCastInput = b2RayCastInput;

    function b2RayCastOutput() {
        b2RayCastOutput.b2RayCastOutput.apply(this, arguments);
    };
    Box2D.Collision.b2RayCastOutput = b2RayCastOutput;

    function b2Segment() {
        b2Segment.b2Segment.apply(this, arguments);
    };
    Box2D.Collision.b2Segment = b2Segment;

    function b2SeparationFunction() {
        b2SeparationFunction.b2SeparationFunction.apply(this, arguments);
    };
    Box2D.Collision.b2SeparationFunction = b2SeparationFunction;

    function b2Simplex() {
        b2Simplex.b2Simplex.apply(this, arguments);
        if (this.constructor === b2Simplex) this.b2Simplex.apply(this, arguments);
    };
    Box2D.Collision.b2Simplex = b2Simplex;

    function b2SimplexCache() {
        b2SimplexCache.b2SimplexCache.apply(this, arguments);
    };
    Box2D.Collision.b2SimplexCache = b2SimplexCache;

    function b2SimplexVertex() {
        b2SimplexVertex.b2SimplexVertex.apply(this, arguments);
    };
    Box2D.Collision.b2SimplexVertex = b2SimplexVertex;

    function b2TimeOfImpact() {
        b2TimeOfImpact.b2TimeOfImpact.apply(this, arguments);
    };
    Box2D.Collision.b2TimeOfImpact = b2TimeOfImpact;

    function b2TOIInput() {
        b2TOIInput.b2TOIInput.apply(this, arguments);
    };
    Box2D.Collision.b2TOIInput = b2TOIInput;

    function b2WorldManifold() {
        b2WorldManifold.b2WorldManifold.apply(this, arguments);
        if (this.constructor === b2WorldManifold) this.b2WorldManifold.apply(this, arguments);
    };
    Box2D.Collision.b2WorldManifold = b2WorldManifold;

    function ClipVertex() {
        ClipVertex.ClipVertex.apply(this, arguments);
    };
    Box2D.Collision.ClipVertex = ClipVertex;

    function Features() {
        Features.Features.apply(this, arguments);
    };
    Box2D.Collision.Features = Features;

    function b2CircleShape() {
        b2CircleShape.b2CircleShape.apply(this, arguments);
        if (this.constructor === b2CircleShape) this.b2CircleShape.apply(this, arguments);
    };
    Box2D.Collision.Shapes.b2CircleShape = b2CircleShape;

    function b2EdgeChainDef() {
        b2EdgeChainDef.b2EdgeChainDef.apply(this, arguments);
        if (this.constructor === b2EdgeChainDef) this.b2EdgeChainDef.apply(this, arguments);
    };
    Box2D.Collision.Shapes.b2EdgeChainDef = b2EdgeChainDef;

    function b2EdgeShape() {
        b2EdgeShape.b2EdgeShape.apply(this, arguments);
        if (this.constructor === b2EdgeShape) this.b2EdgeShape.apply(this, arguments);
    };
    Box2D.Collision.Shapes.b2EdgeShape = b2EdgeShape;

    function b2MassData() {
        b2MassData.b2MassData.apply(this, arguments);
    };
    Box2D.Collision.Shapes.b2MassData = b2MassData;

    function b2PolygonShape() {
        b2PolygonShape.b2PolygonShape.apply(this, arguments);
        if (this.constructor === b2PolygonShape) this.b2PolygonShape.apply(this, arguments);
    };
    Box2D.Collision.Shapes.b2PolygonShape = b2PolygonShape;

    function b2Shape() {
        b2Shape.b2Shape.apply(this, arguments);
        if (this.constructor === b2Shape) this.b2Shape.apply(this, arguments);
    };
    Box2D.Collision.Shapes.b2Shape = b2Shape;
    Box2D.Common.b2internal = 'Box2D.Common.b2internal';

    function b2Color() {
        b2Color.b2Color.apply(this, arguments);
        if (this.constructor === b2Color) this.b2Color.apply(this, arguments);
    };
    Box2D.Common.b2Color = b2Color;

    function b2Settings() {
        b2Settings.b2Settings.apply(this, arguments);
    };
    Box2D.Common.b2Settings = b2Settings;

    function b2Mat22() {
        b2Mat22.b2Mat22.apply(this, arguments);
        if (this.constructor === b2Mat22) this.b2Mat22.apply(this, arguments);
    };
    Box2D.Common.Math.b2Mat22 = b2Mat22;

    function b2Mat33() {
        b2Mat33.b2Mat33.apply(this, arguments);
        if (this.constructor === b2Mat33) this.b2Mat33.apply(this, arguments);
    };
    Box2D.Common.Math.b2Mat33 = b2Mat33;

    function b2Math() {
        b2Math.b2Math.apply(this, arguments);
    };
    Box2D.Common.Math.b2Math = b2Math;

    function b2Sweep() {
        b2Sweep.b2Sweep.apply(this, arguments);
    };
    Box2D.Common.Math.b2Sweep = b2Sweep;

    function b2Transform() {
        b2Transform.b2Transform.apply(this, arguments);
        if (this.constructor === b2Transform) this.b2Transform.apply(this, arguments);
    };
    Box2D.Common.Math.b2Transform = b2Transform;

    function b2Vec2() {
        b2Vec2.b2Vec2.apply(this, arguments);
        if (this.constructor === b2Vec2) this.b2Vec2.apply(this, arguments);
    };
    Box2D.Common.Math.b2Vec2 = b2Vec2;

    function b2Vec3() {
        b2Vec3.b2Vec3.apply(this, arguments);
        if (this.constructor === b2Vec3) this.b2Vec3.apply(this, arguments);
    };
    Box2D.Common.Math.b2Vec3 = b2Vec3;

    function b2Body() {
        b2Body.b2Body.apply(this, arguments);
        if (this.constructor === b2Body) this.b2Body.apply(this, arguments);
    };
    Box2D.Dynamics.b2Body = b2Body;

    function b2BodyDef() {
        b2BodyDef.b2BodyDef.apply(this, arguments);
        if (this.constructor === b2BodyDef) this.b2BodyDef.apply(this, arguments);
    };
    Box2D.Dynamics.b2BodyDef = b2BodyDef;

    function b2ContactFilter() {
        b2ContactFilter.b2ContactFilter.apply(this, arguments);
    };
    Box2D.Dynamics.b2ContactFilter = b2ContactFilter;

    function b2ContactImpulse() {
        b2ContactImpulse.b2ContactImpulse.apply(this, arguments);
    };
    Box2D.Dynamics.b2ContactImpulse = b2ContactImpulse;

    function b2ContactListener() {
        b2ContactListener.b2ContactListener.apply(this, arguments);
    };
    Box2D.Dynamics.b2ContactListener = b2ContactListener;

    function b2ContactManager() {
        b2ContactManager.b2ContactManager.apply(this, arguments);
        if (this.constructor === b2ContactManager) this.b2ContactManager.apply(this, arguments);
    };
    Box2D.Dynamics.b2ContactManager = b2ContactManager;

    function b2DebugDraw() {
        b2DebugDraw.b2DebugDraw.apply(this, arguments);
        if (this.constructor === b2DebugDraw) this.b2DebugDraw.apply(this, arguments);
    };
    Box2D.Dynamics.b2DebugDraw = b2DebugDraw;

    function b2DestructionListener() {
        b2DestructionListener.b2DestructionListener.apply(this, arguments);
    };
    Box2D.Dynamics.b2DestructionListener = b2DestructionListener;

    function b2FilterData() {
        b2FilterData.b2FilterData.apply(this, arguments);
    };
    Box2D.Dynamics.b2FilterData = b2FilterData;

    function b2Fixture() {
        b2Fixture.b2Fixture.apply(this, arguments);
        if (this.constructor === b2Fixture) this.b2Fixture.apply(this, arguments);
    };
    Box2D.Dynamics.b2Fixture = b2Fixture;

    function b2FixtureDef() {
        b2FixtureDef.b2FixtureDef.apply(this, arguments);
        if (this.constructor === b2FixtureDef) this.b2FixtureDef.apply(this, arguments);
    };
    Box2D.Dynamics.b2FixtureDef = b2FixtureDef;

    function b2Island() {
        b2Island.b2Island.apply(this, arguments);
        if (this.constructor === b2Island) this.b2Island.apply(this, arguments);
    };
    Box2D.Dynamics.b2Island = b2Island;

    function b2TimeStep() {
        b2TimeStep.b2TimeStep.apply(this, arguments);
    };
    Box2D.Dynamics.b2TimeStep = b2TimeStep;

    function b2World() {
        b2World.b2World.apply(this, arguments);
        if (this.constructor === b2World) this.b2World.apply(this, arguments);
    };
    Box2D.Dynamics.b2World = b2World;

    function b2CircleContact() {
        b2CircleContact.b2CircleContact.apply(this, arguments);
    };
    Box2D.Dynamics.Contacts.b2CircleContact = b2CircleContact;

    function b2Contact() {
        b2Contact.b2Contact.apply(this, arguments);
        if (this.constructor === b2Contact) this.b2Contact.apply(this, arguments);
    };
    Box2D.Dynamics.Contacts.b2Contact = b2Contact;

    function b2ContactConstraint() {
        b2ContactConstraint.b2ContactConstraint.apply(this, arguments);
        if (this.constructor === b2ContactConstraint) this.b2ContactConstraint.apply(this, arguments);
    };
    Box2D.Dynamics.Contacts.b2ContactConstraint = b2ContactConstraint;

    function b2ContactConstraintPoint() {
        b2ContactConstraintPoint.b2ContactConstraintPoint.apply(this, arguments);
    };
    Box2D.Dynamics.Contacts.b2ContactConstraintPoint = b2ContactConstraintPoint;

    function b2ContactEdge() {
        b2ContactEdge.b2ContactEdge.apply(this, arguments);
    };
    Box2D.Dynamics.Contacts.b2ContactEdge = b2ContactEdge;

    function b2ContactFactory() {
        b2ContactFactory.b2ContactFactory.apply(this, arguments);
        if (this.constructor === b2ContactFactory) this.b2ContactFactory.apply(this, arguments);
    };
    Box2D.Dynamics.Contacts.b2ContactFactory = b2ContactFactory;

    function b2ContactRegister() {
        b2ContactRegister.b2ContactRegister.apply(this, arguments);
    };
    Box2D.Dynamics.Contacts.b2ContactRegister = b2ContactRegister;

    function b2ContactResult() {
        b2ContactResult.b2ContactResult.apply(this, arguments);
    };
    Box2D.Dynamics.Contacts.b2ContactResult = b2ContactResult;

    function b2ContactSolver() {
        b2ContactSolver.b2ContactSolver.apply(this, arguments);
        if (this.constructor === b2ContactSolver) this.b2ContactSolver.apply(this, arguments);
    };
    Box2D.Dynamics.Contacts.b2ContactSolver = b2ContactSolver;

    function b2EdgeAndCircleContact() {
        b2EdgeAndCircleContact.b2EdgeAndCircleContact.apply(this, arguments);
    };
    Box2D.Dynamics.Contacts.b2EdgeAndCircleContact = b2EdgeAndCircleContact;

    function b2NullContact() {
        b2NullContact.b2NullContact.apply(this, arguments);
        if (this.constructor === b2NullContact) this.b2NullContact.apply(this, arguments);
    };
    Box2D.Dynamics.Contacts.b2NullContact = b2NullContact;

    function b2PolyAndCircleContact() {
        b2PolyAndCircleContact.b2PolyAndCircleContact.apply(this, arguments);
    };
    Box2D.Dynamics.Contacts.b2PolyAndCircleContact = b2PolyAndCircleContact;

    function b2PolyAndEdgeContact() {
        b2PolyAndEdgeContact.b2PolyAndEdgeContact.apply(this, arguments);
    };
    Box2D.Dynamics.Contacts.b2PolyAndEdgeContact = b2PolyAndEdgeContact;

    function b2PolygonContact() {
        b2PolygonContact.b2PolygonContact.apply(this, arguments);
    };
    Box2D.Dynamics.Contacts.b2PolygonContact = b2PolygonContact;

    function b2PositionSolverManifold() {
        b2PositionSolverManifold.b2PositionSolverManifold.apply(this, arguments);
        if (this.constructor === b2PositionSolverManifold) this.b2PositionSolverManifold.apply(this, arguments);
    };
    Box2D.Dynamics.Contacts.b2PositionSolverManifold = b2PositionSolverManifold;

    function b2BuoyancyController() {
        b2BuoyancyController.b2BuoyancyController.apply(this, arguments);
    };
    Box2D.Dynamics.Controllers.b2BuoyancyController = b2BuoyancyController;

    function b2ConstantAccelController() {
        b2ConstantAccelController.b2ConstantAccelController.apply(this, arguments);
    };
    Box2D.Dynamics.Controllers.b2ConstantAccelController = b2ConstantAccelController;

    function b2ConstantForceController() {
        b2ConstantForceController.b2ConstantForceController.apply(this, arguments);
    };
    Box2D.Dynamics.Controllers.b2ConstantForceController = b2ConstantForceController;

    function b2Controller() {
        b2Controller.b2Controller.apply(this, arguments);
    };
    Box2D.Dynamics.Controllers.b2Controller = b2Controller;

    function b2ControllerEdge() {
        b2ControllerEdge.b2ControllerEdge.apply(this, arguments);
    };
    Box2D.Dynamics.Controllers.b2ControllerEdge = b2ControllerEdge;

    function b2GravityController() {
        b2GravityController.b2GravityController.apply(this, arguments);
    };
    Box2D.Dynamics.Controllers.b2GravityController = b2GravityController;

    function b2TensorDampingController() {
        b2TensorDampingController.b2TensorDampingController.apply(this, arguments);
    };
    Box2D.Dynamics.Controllers.b2TensorDampingController = b2TensorDampingController;

    function b2DistanceJoint() {
        b2DistanceJoint.b2DistanceJoint.apply(this, arguments);
        if (this.constructor === b2DistanceJoint) this.b2DistanceJoint.apply(this, arguments);
    };
    Box2D.Dynamics.Joints.b2DistanceJoint = b2DistanceJoint;

    function b2DistanceJointDef() {
        b2DistanceJointDef.b2DistanceJointDef.apply(this, arguments);
        if (this.constructor === b2DistanceJointDef) this.b2DistanceJointDef.apply(this, arguments);
    };
    Box2D.Dynamics.Joints.b2DistanceJointDef = b2DistanceJointDef;

    function b2FrictionJoint() {
        b2FrictionJoint.b2FrictionJoint.apply(this, arguments);
        if (this.constructor === b2FrictionJoint) this.b2FrictionJoint.apply(this, arguments);
    };
    Box2D.Dynamics.Joints.b2FrictionJoint = b2FrictionJoint;

    function b2FrictionJointDef() {
        b2FrictionJointDef.b2FrictionJointDef.apply(this, arguments);
        if (this.constructor === b2FrictionJointDef) this.b2FrictionJointDef.apply(this, arguments);
    };
    Box2D.Dynamics.Joints.b2FrictionJointDef = b2FrictionJointDef;

    function b2GearJoint() {
        b2GearJoint.b2GearJoint.apply(this, arguments);
        if (this.constructor === b2GearJoint) this.b2GearJoint.apply(this, arguments);
    };
    Box2D.Dynamics.Joints.b2GearJoint = b2GearJoint;

    function b2GearJointDef() {
        b2GearJointDef.b2GearJointDef.apply(this, arguments);
        if (this.constructor === b2GearJointDef) this.b2GearJointDef.apply(this, arguments);
    };
    Box2D.Dynamics.Joints.b2GearJointDef = b2GearJointDef;

    function b2Jacobian() {
        b2Jacobian.b2Jacobian.apply(this, arguments);
    };
    Box2D.Dynamics.Joints.b2Jacobian = b2Jacobian;

    function b2Joint() {
        b2Joint.b2Joint.apply(this, arguments);
        if (this.constructor === b2Joint) this.b2Joint.apply(this, arguments);
    };
    Box2D.Dynamics.Joints.b2Joint = b2Joint;

    function b2JointDef() {
        b2JointDef.b2JointDef.apply(this, arguments);
        if (this.constructor === b2JointDef) this.b2JointDef.apply(this, arguments);
    };
    Box2D.Dynamics.Joints.b2JointDef = b2JointDef;

    function b2JointEdge() {
        b2JointEdge.b2JointEdge.apply(this, arguments);
    };
    Box2D.Dynamics.Joints.b2JointEdge = b2JointEdge;

    function b2LineJoint() {
        b2LineJoint.b2LineJoint.apply(this, arguments);
        if (this.constructor === b2LineJoint) this.b2LineJoint.apply(this, arguments);
    };
    Box2D.Dynamics.Joints.b2LineJoint = b2LineJoint;

    function b2LineJointDef() {
        b2LineJointDef.b2LineJointDef.apply(this, arguments);
        if (this.constructor === b2LineJointDef) this.b2LineJointDef.apply(this, arguments);
    };
    Box2D.Dynamics.Joints.b2LineJointDef = b2LineJointDef;

    function b2MouseJoint() {
        b2MouseJoint.b2MouseJoint.apply(this, arguments);
        if (this.constructor === b2MouseJoint) this.b2MouseJoint.apply(this, arguments);
    };
    Box2D.Dynamics.Joints.b2MouseJoint = b2MouseJoint;

    function b2MouseJointDef() {
        b2MouseJointDef.b2MouseJointDef.apply(this, arguments);
        if (this.constructor === b2MouseJointDef) this.b2MouseJointDef.apply(this, arguments);
    };
    Box2D.Dynamics.Joints.b2MouseJointDef = b2MouseJointDef;

    function b2PrismaticJoint() {
        b2PrismaticJoint.b2PrismaticJoint.apply(this, arguments);
        if (this.constructor === b2PrismaticJoint) this.b2PrismaticJoint.apply(this, arguments);
    };
    Box2D.Dynamics.Joints.b2PrismaticJoint = b2PrismaticJoint;

    function b2PrismaticJointDef() {
        b2PrismaticJointDef.b2PrismaticJointDef.apply(this, arguments);
        if (this.constructor === b2PrismaticJointDef) this.b2PrismaticJointDef.apply(this, arguments);
    };
    Box2D.Dynamics.Joints.b2PrismaticJointDef = b2PrismaticJointDef;

    function b2PulleyJoint() {
        b2PulleyJoint.b2PulleyJoint.apply(this, arguments);
        if (this.constructor === b2PulleyJoint) this.b2PulleyJoint.apply(this, arguments);
    };
    Box2D.Dynamics.Joints.b2PulleyJoint = b2PulleyJoint;

    function b2PulleyJointDef() {
        b2PulleyJointDef.b2PulleyJointDef.apply(this, arguments);
        if (this.constructor === b2PulleyJointDef) this.b2PulleyJointDef.apply(this, arguments);
    };
    Box2D.Dynamics.Joints.b2PulleyJointDef = b2PulleyJointDef;

    function b2RevoluteJoint() {
        b2RevoluteJoint.b2RevoluteJoint.apply(this, arguments);
        if (this.constructor === b2RevoluteJoint) this.b2RevoluteJoint.apply(this, arguments);
    };
    Box2D.Dynamics.Joints.b2RevoluteJoint = b2RevoluteJoint;

    function b2RevoluteJointDef() {
        b2RevoluteJointDef.b2RevoluteJointDef.apply(this, arguments);
        if (this.constructor === b2RevoluteJointDef) this.b2RevoluteJointDef.apply(this, arguments);
    };
    Box2D.Dynamics.Joints.b2RevoluteJointDef = b2RevoluteJointDef;

    function b2WeldJoint() {
        b2WeldJoint.b2WeldJoint.apply(this, arguments);
        if (this.constructor === b2WeldJoint) this.b2WeldJoint.apply(this, arguments);
    };
    Box2D.Dynamics.Joints.b2WeldJoint = b2WeldJoint;

    function b2WeldJointDef() {
        b2WeldJointDef.b2WeldJointDef.apply(this, arguments);
        if (this.constructor === b2WeldJointDef) this.b2WeldJointDef.apply(this, arguments);
    };
    Box2D.Dynamics.Joints.b2WeldJointDef = b2WeldJointDef;
})(); //definitions
Box2D.postDefs = [];
(function () {
    var b2CircleShape = Box2D.Collision.Shapes.b2CircleShape,
        b2EdgeChainDef = Box2D.Collision.Shapes.b2EdgeChainDef,
        b2EdgeShape = Box2D.Collision.Shapes.b2EdgeShape,
        b2MassData = Box2D.Collision.Shapes.b2MassData,
        b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape,
        b2Shape = Box2D.Collision.Shapes.b2Shape,
        b2Color = Box2D.Common.b2Color,
        b2internal = Box2D.Common.b2internal,
        b2Settings = Box2D.Common.b2Settings,
        b2Mat22 = Box2D.Common.Math.b2Mat22,
        b2Mat33 = Box2D.Common.Math.b2Mat33,
        b2Math = Box2D.Common.Math.b2Math,
        b2Sweep = Box2D.Common.Math.b2Sweep,
        b2Transform = Box2D.Common.Math.b2Transform,
        b2Vec2 = Box2D.Common.Math.b2Vec2,
        b2Vec3 = Box2D.Common.Math.b2Vec3,
        b2AABB = Box2D.Collision.b2AABB,
        b2Bound = Box2D.Collision.b2Bound,
        b2BoundValues = Box2D.Collision.b2BoundValues,
        b2Collision = Box2D.Collision.b2Collision,
        b2ContactID = Box2D.Collision.b2ContactID,
        b2ContactPoint = Box2D.Collision.b2ContactPoint,
        b2Distance = Box2D.Collision.b2Distance,
        b2DistanceInput = Box2D.Collision.b2DistanceInput,
        b2DistanceOutput = Box2D.Collision.b2DistanceOutput,
        b2DistanceProxy = Box2D.Collision.b2DistanceProxy,
        b2DynamicTree = Box2D.Collision.b2DynamicTree,
        b2DynamicTreeBroadPhase = Box2D.Collision.b2DynamicTreeBroadPhase,
        b2DynamicTreeNode = Box2D.Collision.b2DynamicTreeNode,
        b2DynamicTreePair = Box2D.Collision.b2DynamicTreePair,
        b2Manifold = Box2D.Collision.b2Manifold,
        b2ManifoldPoint = Box2D.Collision.b2ManifoldPoint,
        b2Point = Box2D.Collision.b2Point,
        b2RayCastInput = Box2D.Collision.b2RayCastInput,
        b2RayCastOutput = Box2D.Collision.b2RayCastOutput,
        b2Segment = Box2D.Collision.b2Segment,
        b2SeparationFunction = Box2D.Collision.b2SeparationFunction,
        b2Simplex = Box2D.Collision.b2Simplex,
        b2SimplexCache = Box2D.Collision.b2SimplexCache,
        b2SimplexVertex = Box2D.Collision.b2SimplexVertex,
        b2TimeOfImpact = Box2D.Collision.b2TimeOfImpact,
        b2TOIInput = Box2D.Collision.b2TOIInput,
        b2WorldManifold = Box2D.Collision.b2WorldManifold,
        ClipVertex = Box2D.Collision.ClipVertex,
        Features = Box2D.Collision.Features,
        IBroadPhase = Box2D.Collision.IBroadPhase;

    b2AABB.b2AABB = function () {
        this.lowerBound = new b2Vec2();
        this.upperBound = new b2Vec2();
    };
    b2AABB.prototype.IsValid = function () {
        var dX = this.upperBound.x - this.lowerBound.x;
        var dY = this.upperBound.y - this.lowerBound.y;
        var valid = dX >= 0.0 && dY >= 0.0;
        valid = valid && this.lowerBound.IsValid() && this.upperBound.IsValid();
        return valid;
    }
    b2AABB.prototype.GetCenter = function () {
        return new b2Vec2((this.lowerBound.x + this.upperBound.x) / 2, (this.lowerBound.y + this.upperBound.y) / 2);
    }
    b2AABB.prototype.GetExtents = function () {
        return new b2Vec2((this.upperBound.x - this.lowerBound.x) / 2, (this.upperBound.y - this.lowerBound.y) / 2);
    }
    b2AABB.prototype.Contains = function (aabb) {
        var result = true;
        result = result && this.lowerBound.x <= aabb.lowerBound.x;
        result = result && this.lowerBound.y <= aabb.lowerBound.y;
        result = result && aabb.upperBound.x <= this.upperBound.x;
        result = result && aabb.upperBound.y <= this.upperBound.y;
        return result;
    }
    b2AABB.prototype.RayCast = function (output, input) {
        var tmin = (-Number.MAX_VALUE);
        var tmax = Number.MAX_VALUE;
        var pX = input.p1.x;
        var pY = input.p1.y;
        var dX = input.p2.x - input.p1.x;
        var dY = input.p2.y - input.p1.y;
        var absDX = Math.abs(dX);
        var absDY = Math.abs(dY);
        var normal = output.normal;
        var inv_d = 0;
        var t1 = 0;
        var t2 = 0;
        var t3 = 0;
        var s = 0; {
            if (absDX < Number.MIN_VALUE) {
                if (pX < this.lowerBound.x || this.upperBound.x < pX) return false;
            }
            else {
                inv_d = 1.0 / dX;
                t1 = (this.lowerBound.x - pX) * inv_d;
                t2 = (this.upperBound.x - pX) * inv_d;
                s = (-1.0);
                if (t1 > t2) {
                    t3 = t1;
                    t1 = t2;
                    t2 = t3;
                    s = 1.0;
                }
                if (t1 > tmin) {
                    normal.x = s;
                    normal.y = 0;
                    tmin = t1;
                }
                tmax = Math.min(tmax, t2);
                if (tmin > tmax) return false;
            }
        } {
            if (absDY < Number.MIN_VALUE) {
                if (pY < this.lowerBound.y || this.upperBound.y < pY) return false;
            }
            else {
                inv_d = 1.0 / dY;
                t1 = (this.lowerBound.y - pY) * inv_d;
                t2 = (this.upperBound.y - pY) * inv_d;
                s = (-1.0);
                if (t1 > t2) {
                    t3 = t1;
                    t1 = t2;
                    t2 = t3;
                    s = 1.0;
                }
                if (t1 > tmin) {
                    normal.y = s;
                    normal.x = 0;
                    tmin = t1;
                }
                tmax = Math.min(tmax, t2);
                if (tmin > tmax) return false;
            }
        }
        output.fraction = tmin;
        return true;
    }
    b2AABB.prototype.TestOverlap = function (other) {
        var d1X = other.lowerBound.x - this.upperBound.x;
        var d1Y = other.lowerBound.y - this.upperBound.y;
        var d2X = this.lowerBound.x - other.upperBound.x;
        var d2Y = this.lowerBound.y - other.upperBound.y;
        if (d1X > 0.0 || d1Y > 0.0) return false;
        if (d2X > 0.0 || d2Y > 0.0) return false;
        return true;
    }
    b2AABB.Combine = function (aabb1, aabb2) {
        var aabb = new b2AABB();
        aabb.Combine(aabb1, aabb2);
        return aabb;
    }
    b2AABB.prototype.Combine = function (aabb1, aabb2) {
        this.lowerBound.x = Math.min(aabb1.lowerBound.x, aabb2.lowerBound.x);
        this.lowerBound.y = Math.min(aabb1.lowerBound.y, aabb2.lowerBound.y);
        this.upperBound.x = Math.max(aabb1.upperBound.x, aabb2.upperBound.x);
        this.upperBound.y = Math.max(aabb1.upperBound.y, aabb2.upperBound.y);
    }
    b2Bound.b2Bound = function () {};
    b2Bound.prototype.IsLower = function () {
        return (this.value & 1) == 0;
    }
    b2Bound.prototype.IsUpper = function () {
        return (this.value & 1) == 1;
    }
    b2Bound.prototype.Swap = function (b) {
        var tempValue = this.value;
        var tempProxy = this.proxy;
        var tempStabbingCount = this.stabbingCount;
        this.value = b.value;
        this.proxy = b.proxy;
        this.stabbingCount = b.stabbingCount;
        b.value = tempValue;
        b.proxy = tempProxy;
        b.stabbingCount = tempStabbingCount;
    }
    b2BoundValues.b2BoundValues = function () {};
    b2BoundValues.prototype.b2BoundValues = function () {
        this.lowerValues = new Vector_a2j_Number();
        this.lowerValues[0] = 0.0;
        this.lowerValues[1] = 0.0;
        this.upperValues = new Vector_a2j_Number();
        this.upperValues[0] = 0.0;
        this.upperValues[1] = 0.0;
    }
    b2Collision.b2Collision = function () {};
    b2Collision.ClipSegmentToLine = function (vOut, vIn, normal, offset) {
        if (offset === undefined) offset = 0;
        var cv;
        var numOut = 0;
        cv = vIn[0];
        var vIn0 = cv.v;
        cv = vIn[1];
        var vIn1 = cv.v;
        var distance0 = normal.x * vIn0.x + normal.y * vIn0.y - offset;
        var distance1 = normal.x * vIn1.x + normal.y * vIn1.y - offset;
        if (distance0 <= 0.0) vOut[numOut++].Set(vIn[0]);
        if (distance1 <= 0.0) vOut[numOut++].Set(vIn[1]);
        if (distance0 * distance1 < 0.0) {
            var interp = distance0 / (distance0 - distance1);
            cv = vOut[numOut];
            var tVec = cv.v;
            tVec.x = vIn0.x + interp * (vIn1.x - vIn0.x);
            tVec.y = vIn0.y + interp * (vIn1.y - vIn0.y);
            cv = vOut[numOut];
            var cv2;
            if (distance0 > 0.0) {
                cv2 = vIn[0];
                cv.id = cv2.id;
            }
            else {
                cv2 = vIn[1];
                cv.id = cv2.id;
            }++numOut;
        }
        return numOut;
    }
    b2Collision.EdgeSeparation = function (poly1, xf1, edge1, poly2, xf2) {
        if (edge1 === undefined) edge1 = 0;
        var count1 = parseInt(poly1.m_vertexCount);
        var vertices1 = poly1.m_vertices;
        var normals1 = poly1.m_normals;
        var count2 = parseInt(poly2.m_vertexCount);
        var vertices2 = poly2.m_vertices;
        var tMat;
        var tVec;
        tMat = xf1.R;
        tVec = normals1[edge1];
        var normal1WorldX = (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
        var normal1WorldY = (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
        tMat = xf2.R;
        var normal1X = (tMat.col1.x * normal1WorldX + tMat.col1.y * normal1WorldY);
        var normal1Y = (tMat.col2.x * normal1WorldX + tMat.col2.y * normal1WorldY);
        var index = 0;
        var minDot = Number.MAX_VALUE;
        for (var i = 0; i < count2; ++i) {
            tVec = vertices2[i];
            var dot = tVec.x * normal1X + tVec.y * normal1Y;
            if (dot < minDot) {
                minDot = dot;
                index = i;
            }
        }
        tVec = vertices1[edge1];
        tMat = xf1.R;
        var v1X = xf1.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
        var v1Y = xf1.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
        tVec = vertices2[index];
        tMat = xf2.R;
        var v2X = xf2.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
        var v2Y = xf2.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
        v2X -= v1X;
        v2Y -= v1Y;
        var separation = v2X * normal1WorldX + v2Y * normal1WorldY;
        return separation;
    }
    b2Collision.FindMaxSeparation = function (edgeIndex, poly1, xf1, poly2, xf2) {
        var count1 = parseInt(poly1.m_vertexCount);
        var normals1 = poly1.m_normals;
        var tVec;
        var tMat;
        tMat = xf2.R;
        tVec = poly2.m_centroid;
        var dX = xf2.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
        var dY = xf2.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
        tMat = xf1.R;
        tVec = poly1.m_centroid;
        dX -= xf1.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
        dY -= xf1.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
        var dLocal1X = (dX * xf1.R.col1.x + dY * xf1.R.col1.y);
        var dLocal1Y = (dX * xf1.R.col2.x + dY * xf1.R.col2.y);
        var edge = 0;
        var maxDot = (-Number.MAX_VALUE);
        for (var i = 0; i < count1; ++i) {
            tVec = normals1[i];
            var dot = (tVec.x * dLocal1X + tVec.y * dLocal1Y);
            if (dot > maxDot) {
                maxDot = dot;
                edge = i;
            }
        }
        var s = b2Collision.EdgeSeparation(poly1, xf1, edge, poly2, xf2);
        var prevEdge = parseInt(edge - 1 >= 0 ? edge - 1 : count1 - 1);
        var sPrev = b2Collision.EdgeSeparation(poly1, xf1, prevEdge, poly2, xf2);
        var nextEdge = parseInt(edge + 1 < count1 ? edge + 1 : 0);
        var sNext = b2Collision.EdgeSeparation(poly1, xf1, nextEdge, poly2, xf2);
        var bestEdge = 0;
        var bestSeparation = 0;
        var increment = 0;
        if (sPrev > s && sPrev > sNext) {
            increment = (-1);
            bestEdge = prevEdge;
            bestSeparation = sPrev;
        }
        else if (sNext > s) {
            increment = 1;
            bestEdge = nextEdge;
            bestSeparation = sNext;
        }
        else {
            edgeIndex[0] = edge;
            return s;
        }
        while (true) {
            if (increment == (-1)) edge = bestEdge - 1 >= 0 ? bestEdge - 1 : count1 - 1;
            else edge = bestEdge + 1 < count1 ? bestEdge + 1 : 0;s = b2Collision.EdgeSeparation(poly1, xf1, edge, poly2, xf2);
            if (s > bestSeparation) {
                bestEdge = edge;
                bestSeparation = s;
            }
            else {
                break;
            }
        }
        edgeIndex[0] = bestEdge;
        return bestSeparation;
    }
    b2Collision.FindIncidentEdge = function (c, poly1, xf1, edge1, poly2, xf2) {
        if (edge1 === undefined) edge1 = 0;
        var count1 = parseInt(poly1.m_vertexCount);
        var normals1 = poly1.m_normals;
        var count2 = parseInt(poly2.m_vertexCount);
        var vertices2 = poly2.m_vertices;
        var normals2 = poly2.m_normals;
        var tMat;
        var tVec;
        tMat = xf1.R;
        tVec = normals1[edge1];
        var normal1X = (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
        var normal1Y = (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
        tMat = xf2.R;
        var tX = (tMat.col1.x * normal1X + tMat.col1.y * normal1Y);
        normal1Y = (tMat.col2.x * normal1X + tMat.col2.y * normal1Y);
        normal1X = tX;
        var index = 0;
        var minDot = Number.MAX_VALUE;
        for (var i = 0; i < count2; ++i) {
            tVec = normals2[i];
            var dot = (normal1X * tVec.x + normal1Y * tVec.y);
            if (dot < minDot) {
                minDot = dot;
                index = i;
            }
        }
        var tClip;
        var i1 = parseInt(index);
        var i2 = parseInt(i1 + 1 < count2 ? i1 + 1 : 0);
        tClip = c[0];
        tVec = vertices2[i1];
        tMat = xf2.R;
        tClip.v.x = xf2.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
        tClip.v.y = xf2.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
        tClip.id.features.referenceEdge = edge1;
        tClip.id.features.incidentEdge = i1;
        tClip.id.features.incidentVertex = 0;
        tClip = c[1];
        tVec = vertices2[i2];
        tMat = xf2.R;
        tClip.v.x = xf2.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
        tClip.v.y = xf2.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
        tClip.id.features.referenceEdge = edge1;
        tClip.id.features.incidentEdge = i2;
        tClip.id.features.incidentVertex = 1;
    }
    b2Collision.MakeClipPointVector = function () {
        var r = new Vector(2);
        r[0] = new ClipVertex();
        r[1] = new ClipVertex();
        return r;
    }
    b2Collision.CollidePolygons = function (manifold, polyA, xfA, polyB, xfB) {
        var cv;
        manifold.m_pointCount = 0;
        var totalRadius = polyA.m_radius + polyB.m_radius;
        var edgeA = 0;
        b2Collision.s_edgeAO[0] = edgeA;
        var separationA = b2Collision.FindMaxSeparation(b2Collision.s_edgeAO, polyA, xfA, polyB, xfB);
        edgeA = b2Collision.s_edgeAO[0];
        if (separationA > totalRadius) return;
        var edgeB = 0;
        b2Collision.s_edgeBO[0] = edgeB;
        var separationB = b2Collision.FindMaxSeparation(b2Collision.s_edgeBO, polyB, xfB, polyA, xfA);
        edgeB = b2Collision.s_edgeBO[0];
        if (separationB > totalRadius) return;
        var poly1;
        var poly2;
        var xf1;
        var xf2;
        var edge1 = 0;
        var flip = 0;
        var k_relativeTol = 0.98;
        var k_absoluteTol = 0.001;
        var tMat;
        if (separationB > k_relativeTol * separationA + k_absoluteTol) {
            poly1 = polyB;
            poly2 = polyA;
            xf1 = xfB;
            xf2 = xfA;
            edge1 = edgeB;
            manifold.m_type = b2Manifold.e_faceB;
            flip = 1;
        }
        else {
            poly1 = polyA;
            poly2 = polyB;
            xf1 = xfA;
            xf2 = xfB;
            edge1 = edgeA;
            manifold.m_type = b2Manifold.e_faceA;
            flip = 0;
        }
        var incidentEdge = b2Collision.s_incidentEdge;
        b2Collision.FindIncidentEdge(incidentEdge, poly1, xf1, edge1, poly2, xf2);
        var count1 = parseInt(poly1.m_vertexCount);
        var vertices1 = poly1.m_vertices;
        var local_v11 = vertices1[edge1];
        var local_v12;
        if (edge1 + 1 < count1) {
            local_v12 = vertices1[parseInt(edge1 + 1)];
        }
        else {
            local_v12 = vertices1[0];
        }
        var localTangent = b2Collision.s_localTangent;
        localTangent.Set(local_v12.x - local_v11.x, local_v12.y - local_v11.y);
        localTangent.Normalize();
        var localNormal = b2Collision.s_localNormal;
        localNormal.x = localTangent.y;
        localNormal.y = (-localTangent.x);
        var planePoint = b2Collision.s_planePoint;
        planePoint.Set(0.5 * (local_v11.x + local_v12.x), 0.5 * (local_v11.y + local_v12.y));
        var tangent = b2Collision.s_tangent;
        tMat = xf1.R;
        tangent.x = (tMat.col1.x * localTangent.x + tMat.col2.x * localTangent.y);
        tangent.y = (tMat.col1.y * localTangent.x + tMat.col2.y * localTangent.y);
        var tangent2 = b2Collision.s_tangent2;
        tangent2.x = (-tangent.x);
        tangent2.y = (-tangent.y);
        var normal = b2Collision.s_normal;
        normal.x = tangent.y;
        normal.y = (-tangent.x);
        var v11 = b2Collision.s_v11;
        var v12 = b2Collision.s_v12;
        v11.x = xf1.position.x + (tMat.col1.x * local_v11.x + tMat.col2.x * local_v11.y);
        v11.y = xf1.position.y + (tMat.col1.y * local_v11.x + tMat.col2.y * local_v11.y);
        v12.x = xf1.position.x + (tMat.col1.x * local_v12.x + tMat.col2.x * local_v12.y);
        v12.y = xf1.position.y + (tMat.col1.y * local_v12.x + tMat.col2.y * local_v12.y);
        var frontOffset = normal.x * v11.x + normal.y * v11.y;
        var sideOffset1 = (-tangent.x * v11.x) - tangent.y * v11.y + totalRadius;
        var sideOffset2 = tangent.x * v12.x + tangent.y * v12.y + totalRadius;
        var clipPoints1 = b2Collision.s_clipPoints1;
        var clipPoints2 = b2Collision.s_clipPoints2;
        var np = 0;
        np = b2Collision.ClipSegmentToLine(clipPoints1, incidentEdge, tangent2, sideOffset1);
        if (np < 2) return;
        np = b2Collision.ClipSegmentToLine(clipPoints2, clipPoints1, tangent, sideOffset2);
        if (np < 2) return;
        manifold.m_localPlaneNormal.SetV(localNormal);
        manifold.m_localPoint.SetV(planePoint);
        var pointCount = 0;
        for (var i = 0; i < b2Settings.b2_maxManifoldPoints; ++i) {
            cv = clipPoints2[i];
            var separation = normal.x * cv.v.x + normal.y * cv.v.y - frontOffset;
            if (separation <= totalRadius) {
                var cp = manifold.m_points[pointCount];
                tMat = xf2.R;
                var tX = cv.v.x - xf2.position.x;
                var tY = cv.v.y - xf2.position.y;
                cp.m_localPoint.x = (tX * tMat.col1.x + tY * tMat.col1.y);
                cp.m_localPoint.y = (tX * tMat.col2.x + tY * tMat.col2.y);
                cp.m_id.Set(cv.id);
                cp.m_id.features.flip = flip;
                ++pointCount;
            }
        }
        manifold.m_pointCount = pointCount;
    }
    b2Collision.CollideCircles = function (manifold, circle1, xf1, circle2, xf2) {
        manifold.m_pointCount = 0;
        var tMat;
        var tVec;
        tMat = xf1.R;
        tVec = circle1.m_p;
        var p1X = xf1.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
        var p1Y = xf1.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
        tMat = xf2.R;
        tVec = circle2.m_p;
        var p2X = xf2.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
        var p2Y = xf2.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
        var dX = p2X - p1X;
        var dY = p2Y - p1Y;
        var distSqr = dX * dX + dY * dY;
        var radius = circle1.m_radius + circle2.m_radius;
        if (distSqr > radius * radius) {
            return;
        }
        manifold.m_type = b2Manifold.e_circles;
        manifold.m_localPoint.SetV(circle1.m_p);
        manifold.m_localPlaneNormal.SetZero();
        manifold.m_pointCount = 1;
        manifold.m_points[0].m_localPoint.SetV(circle2.m_p);
        manifold.m_points[0].m_id.key = 0;
    }
    b2Collision.CollidePolygonAndCircle = function (manifold, polygon, xf1, circle, xf2) {
        manifold.m_pointCount = 0;
        var tPoint;
        var dX = 0;
        var dY = 0;
        var positionX = 0;
        var positionY = 0;
        var tVec;
        var tMat;
        tMat = xf2.R;
        tVec = circle.m_p;
        var cX = xf2.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
        var cY = xf2.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
        dX = cX - xf1.position.x;
        dY = cY - xf1.position.y;
        tMat = xf1.R;
        var cLocalX = (dX * tMat.col1.x + dY * tMat.col1.y);
        var cLocalY = (dX * tMat.col2.x + dY * tMat.col2.y);
        var dist = 0;
        var normalIndex = 0;
        var separation = (-Number.MAX_VALUE);
        var radius = polygon.m_radius + circle.m_radius;
        var vertexCount = parseInt(polygon.m_vertexCount);
        var vertices = polygon.m_vertices;
        var normals = polygon.m_normals;
        for (var i = 0; i < vertexCount; ++i) {
            tVec = vertices[i];
            dX = cLocalX - tVec.x;
            dY = cLocalY - tVec.y;
            tVec = normals[i];
            var s = tVec.x * dX + tVec.y * dY;
            if (s > radius) {
                return;
            }
            if (s > separation) {
                separation = s;
                normalIndex = i;
            }
        }
        var vertIndex1 = parseInt(normalIndex);
        var vertIndex2 = parseInt(vertIndex1 + 1 < vertexCount ? vertIndex1 + 1 : 0);
        var v1 = vertices[vertIndex1];
        var v2 = vertices[vertIndex2];
        if (separation < Number.MIN_VALUE) {
            manifold.m_pointCount = 1;
            manifold.m_type = b2Manifold.e_faceA;
            manifold.m_localPlaneNormal.SetV(normals[normalIndex]);
            manifold.m_localPoint.x = 0.5 * (v1.x + v2.x);
            manifold.m_localPoint.y = 0.5 * (v1.y + v2.y);
            manifold.m_points[0].m_localPoint.SetV(circle.m_p);
            manifold.m_points[0].m_id.key = 0;
            return;
        }
        var u1 = (cLocalX - v1.x) * (v2.x - v1.x) + (cLocalY - v1.y) * (v2.y - v1.y);
        var u2 = (cLocalX - v2.x) * (v1.x - v2.x) + (cLocalY - v2.y) * (v1.y - v2.y);
        if (u1 <= 0.0) {
            if ((cLocalX - v1.x) * (cLocalX - v1.x) + (cLocalY - v1.y) * (cLocalY - v1.y) > radius * radius) return;
            manifold.m_pointCount = 1;
            manifold.m_type = b2Manifold.e_faceA;
            manifold.m_localPlaneNormal.x = cLocalX - v1.x;
            manifold.m_localPlaneNormal.y = cLocalY - v1.y;
            manifold.m_localPlaneNormal.Normalize();
            manifold.m_localPoint.SetV(v1);
            manifold.m_points[0].m_localPoint.SetV(circle.m_p);
            manifold.m_points[0].m_id.key = 0;
        }
        else if (u2 <= 0) {
            if ((cLocalX - v2.x) * (cLocalX - v2.x) + (cLocalY - v2.y) * (cLocalY - v2.y) > radius * radius) return;
            manifold.m_pointCount = 1;
            manifold.m_type = b2Manifold.e_faceA;
            manifold.m_localPlaneNormal.x = cLocalX - v2.x;
            manifold.m_localPlaneNormal.y = cLocalY - v2.y;
            manifold.m_localPlaneNormal.Normalize();
            manifold.m_localPoint.SetV(v2);
            manifold.m_points[0].m_localPoint.SetV(circle.m_p);
            manifold.m_points[0].m_id.key = 0;
        }
        else {
            var faceCenterX = 0.5 * (v1.x + v2.x);
            var faceCenterY = 0.5 * (v1.y + v2.y);
            separation = (cLocalX - faceCenterX) * normals[vertIndex1].x + (cLocalY - faceCenterY) * normals[vertIndex1].y;
            if (separation > radius) return;
            manifold.m_pointCount = 1;
            manifold.m_type = b2Manifold.e_faceA;
            manifold.m_localPlaneNormal.x = normals[vertIndex1].x;
            manifold.m_localPlaneNormal.y = normals[vertIndex1].y;
            manifold.m_localPlaneNormal.Normalize();
            manifold.m_localPoint.Set(faceCenterX, faceCenterY);
            manifold.m_points[0].m_localPoint.SetV(circle.m_p);
            manifold.m_points[0].m_id.key = 0;
        }
    }
    b2Collision.TestOverlap = function (a, b) {
        var t1 = b.lowerBound;
        var t2 = a.upperBound;
        var d1X = t1.x - t2.x;
        var d1Y = t1.y - t2.y;
        t1 = a.lowerBound;
        t2 = b.upperBound;
        var d2X = t1.x - t2.x;
        var d2Y = t1.y - t2.y;
        if (d1X > 0.0 || d1Y > 0.0) return false;
        if (d2X > 0.0 || d2Y > 0.0) return false;
        return true;
    }
    Box2D.postDefs.push(function () {
        Box2D.Collision.b2Collision.s_incidentEdge = b2Collision.MakeClipPointVector();
        Box2D.Collision.b2Collision.s_clipPoints1 = b2Collision.MakeClipPointVector();
        Box2D.Collision.b2Collision.s_clipPoints2 = b2Collision.MakeClipPointVector();
        Box2D.Collision.b2Collision.s_edgeAO = new Vector_a2j_Number(1);
        Box2D.Collision.b2Collision.s_edgeBO = new Vector_a2j_Number(1);
        Box2D.Collision.b2Collision.s_localTangent = new b2Vec2();
        Box2D.Collision.b2Collision.s_localNormal = new b2Vec2();
        Box2D.Collision.b2Collision.s_planePoint = new b2Vec2();
        Box2D.Collision.b2Collision.s_normal = new b2Vec2();
        Box2D.Collision.b2Collision.s_tangent = new b2Vec2();
        Box2D.Collision.b2Collision.s_tangent2 = new b2Vec2();
        Box2D.Collision.b2Collision.s_v11 = new b2Vec2();
        Box2D.Collision.b2Collision.s_v12 = new b2Vec2();
        Box2D.Collision.b2Collision.b2CollidePolyTempVec = new b2Vec2();
        Box2D.Collision.b2Collision.b2_nullFeature = 0x000000ff;
    });
    b2ContactID.b2ContactID = function () {
        this.features = new Features();
    };
    b2ContactID.prototype.b2ContactID = function () {
        this.features._m_id = this;
    }
    b2ContactID.prototype.Set = function (id) {
        this.key = id._key;
    }
    b2ContactID.prototype.Copy = function () {
        var id = new b2ContactID();
        id.key = this.key;
        return id;
    }
    Object.defineProperty(b2ContactID.prototype, 'key', {
        enumerable: false,
        configurable: true,
        get: function () {
            return this._key;
        }
    });
    Object.defineProperty(b2ContactID.prototype, 'key', {
        enumerable: false,
        configurable: true,
        set: function (value) {
            if (value === undefined) value = 0;
            this._key = value;
            this.features._referenceEdge = this._key & 0x000000ff;
            this.features._incidentEdge = ((this._key & 0x0000ff00) >> 8) & 0x000000ff;
            this.features._incidentVertex = ((this._key & 0x00ff0000) >> 16) & 0x000000ff;
            this.features._flip = ((this._key & 0xff000000) >> 24) & 0x000000ff;
        }
    });
    b2ContactPoint.b2ContactPoint = function () {
        this.position = new b2Vec2();
        this.velocity = new b2Vec2();
        this.normal = new b2Vec2();
        this.id = new b2ContactID();
    };
    b2Distance.b2Distance = function () {};
    b2Distance.Distance = function (output, cache, input) {
        ++b2Distance.b2_gjkCalls;
        var proxyA = input.proxyA;
        var proxyB = input.proxyB;
        var transformA = input.transformA;
        var transformB = input.transformB;
        var simplex = b2Distance.s_simplex;
        simplex.ReadCache(cache, proxyA, transformA, proxyB, transformB);
        var vertices = simplex.m_vertices;
        var k_maxIters = 20;
        var saveA = b2Distance.s_saveA;
        var saveB = b2Distance.s_saveB;
        var saveCount = 0;
        var closestPoint = simplex.GetClosestPoint();
        var distanceSqr1 = closestPoint.LengthSquared();
        var distanceSqr2 = distanceSqr1;
        var i = 0;
        var p;
        var iter = 0;
        while (iter < k_maxIters) {
            saveCount = simplex.m_count;
            for (i = 0;
                 i < saveCount; i++) {
                saveA[i] = vertices[i].indexA;
                saveB[i] = vertices[i].indexB;
            }
            switch (simplex.m_count) {
                case 1:
                    break;
                case 2:
                    simplex.Solve2();
                    break;
                case 3:
                    simplex.Solve3();
                    break;
                default:
                    b2Settings.b2Assert(false);
            }
            if (simplex.m_count == 3) {
                break;
            }
            p = simplex.GetClosestPoint();
            distanceSqr2 = p.LengthSquared();
            if (distanceSqr2 > distanceSqr1) {}
            distanceSqr1 = distanceSqr2;
            var d = simplex.GetSearchDirection();
            if (d.LengthSquared() < Number.MIN_VALUE * Number.MIN_VALUE) {
                break;
            }
            var vertex = vertices[simplex.m_count];
            vertex.indexA = proxyA.GetSupport(b2Math.MulTMV(transformA.R, d.GetNegative()));
            vertex.wA = b2Math.MulX(transformA, proxyA.GetVertex(vertex.indexA));
            vertex.indexB = proxyB.GetSupport(b2Math.MulTMV(transformB.R, d));
            vertex.wB = b2Math.MulX(transformB, proxyB.GetVertex(vertex.indexB));
            vertex.w = b2Math.SubtractVV(vertex.wB, vertex.wA);
            ++iter;
            ++b2Distance.b2_gjkIters;
            var duplicate = false;
            for (i = 0;
                 i < saveCount; i++) {
                if (vertex.indexA == saveA[i] && vertex.indexB == saveB[i]) {
                    duplicate = true;
                    break;
                }
            }
            if (duplicate) {
                break;
            }++simplex.m_count;
        }
        b2Distance.b2_gjkMaxIters = b2Math.Max(b2Distance.b2_gjkMaxIters, iter);
        simplex.GetWitnessPoints(output.pointA, output.pointB);
        output.distance = b2Math.SubtractVV(output.pointA, output.pointB).Length();
        output.iterations = iter;
        simplex.WriteCache(cache);
        if (input.useRadii) {
            var rA = proxyA.m_radius;
            var rB = proxyB.m_radius;
            if (output.distance > rA + rB && output.distance > Number.MIN_VALUE) {
                output.distance -= rA + rB;
                var normal = b2Math.SubtractVV(output.pointB, output.pointA);
                normal.Normalize();
                output.pointA.x += rA * normal.x;
                output.pointA.y += rA * normal.y;
                output.pointB.x -= rB * normal.x;
                output.pointB.y -= rB * normal.y;
            }
            else {
                p = new b2Vec2();
                p.x = .5 * (output.pointA.x + output.pointB.x);
                p.y = .5 * (output.pointA.y + output.pointB.y);
                output.pointA.x = output.pointB.x = p.x;
                output.pointA.y = output.pointB.y = p.y;
                output.distance = 0.0;
            }
        }
    }
    Box2D.postDefs.push(function () {
        Box2D.Collision.b2Distance.s_simplex = new b2Simplex();
        Box2D.Collision.b2Distance.s_saveA = new Vector_a2j_Number(3);
        Box2D.Collision.b2Distance.s_saveB = new Vector_a2j_Number(3);
    });
    b2DistanceInput.b2DistanceInput = function () {};
    b2DistanceOutput.b2DistanceOutput = function () {
        this.pointA = new b2Vec2();
        this.pointB = new b2Vec2();
    };
    b2DistanceProxy.b2DistanceProxy = function () {};
    b2DistanceProxy.prototype.Set = function (shape) {
        switch (shape.GetType()) {
            case b2Shape.e_circleShape:
            {
                var circle = (shape instanceof b2CircleShape ? shape : null);
                this.m_vertices = new Vector(1, true);
                this.m_vertices[0] = circle.m_p;
                this.m_count = 1;
                this.m_radius = circle.m_radius;
            }
                break;
            case b2Shape.e_polygonShape:
            {
                var polygon = (shape instanceof b2PolygonShape ? shape : null);
                this.m_vertices = polygon.m_vertices;
                this.m_count = polygon.m_vertexCount;
                this.m_radius = polygon.m_radius;
            }
                break;
            default:
                b2Settings.b2Assert(false);
        }
    }
    b2DistanceProxy.prototype.GetSupport = function (d) {
        var bestIndex = 0;
        var bestValue = this.m_vertices[0].x * d.x + this.m_vertices[0].y * d.y;
        for (var i = 1; i < this.m_count; ++i) {
            var value = this.m_vertices[i].x * d.x + this.m_vertices[i].y * d.y;
            if (value > bestValue) {
                bestIndex = i;
                bestValue = value;
            }
        }
        return bestIndex;
    }
    b2DistanceProxy.prototype.GetSupportVertex = function (d) {
        var bestIndex = 0;
        var bestValue = this.m_vertices[0].x * d.x + this.m_vertices[0].y * d.y;
        for (var i = 1; i < this.m_count; ++i) {
            var value = this.m_vertices[i].x * d.x + this.m_vertices[i].y * d.y;
            if (value > bestValue) {
                bestIndex = i;
                bestValue = value;
            }
        }
        return this.m_vertices[bestIndex];
    }
    b2DistanceProxy.prototype.GetVertexCount = function () {
        return this.m_count;
    }
    b2DistanceProxy.prototype.GetVertex = function (index) {
        if (index === undefined) index = 0;
        b2Settings.b2Assert(0 <= index && index < this.m_count);
        return this.m_vertices[index];
    }
    b2DynamicTree.b2DynamicTree = function () {};
    b2DynamicTree.prototype.b2DynamicTree = function () {
        this.m_root = null;
        this.m_freeList = null;
        this.m_path = 0;
        this.m_insertionCount = 0;
    }
    b2DynamicTree.prototype.CreateProxy = function (aabb, userData) {
        var node = this.AllocateNode();
        var extendX = b2Settings.b2_aabbExtension;
        var extendY = b2Settings.b2_aabbExtension;
        node.aabb.lowerBound.x = aabb.lowerBound.x - extendX;
        node.aabb.lowerBound.y = aabb.lowerBound.y - extendY;
        node.aabb.upperBound.x = aabb.upperBound.x + extendX;
        node.aabb.upperBound.y = aabb.upperBound.y + extendY;
        node.userData = userData;
        this.InsertLeaf(node);
        return node;
    }
    b2DynamicTree.prototype.DestroyProxy = function (proxy) {
        this.RemoveLeaf(proxy);
        this.FreeNode(proxy);
    }
    b2DynamicTree.prototype.MoveProxy = function (proxy, aabb, displacement) {
        b2Settings.b2Assert(proxy.IsLeaf());
        if (proxy.aabb.Contains(aabb)) {
            return false;
        }
        this.RemoveLeaf(proxy);
        var extendX = b2Settings.b2_aabbExtension + b2Settings.b2_aabbMultiplier * (displacement.x > 0 ? displacement.x : (-displacement.x));
        var extendY = b2Settings.b2_aabbExtension + b2Settings.b2_aabbMultiplier * (displacement.y > 0 ? displacement.y : (-displacement.y));
        proxy.aabb.lowerBound.x = aabb.lowerBound.x - extendX;
        proxy.aabb.lowerBound.y = aabb.lowerBound.y - extendY;
        proxy.aabb.upperBound.x = aabb.upperBound.x + extendX;
        proxy.aabb.upperBound.y = aabb.upperBound.y + extendY;
        this.InsertLeaf(proxy);
        return true;
    }
    b2DynamicTree.prototype.Rebalance = function (iterations) {
        if (iterations === undefined) iterations = 0;
        if (this.m_root == null) return;
        for (var i = 0; i < iterations; i++) {
            var node = this.m_root;
            var bit = 0;
            while (node.IsLeaf() == false) {
                node = (this.m_path >> bit) & 1 ? node.child2 : node.child1;
                bit = (bit + 1) & 31;
            }++this.m_path;
            this.RemoveLeaf(node);
            this.InsertLeaf(node);
        }
    }
    b2DynamicTree.prototype.GetFatAABB = function (proxy) {
        return proxy.aabb;
    }
    b2DynamicTree.prototype.GetUserData = function (proxy) {
        return proxy.userData;
    }
    b2DynamicTree.prototype.Query = function (callback, aabb) {
        if (this.m_root == null) return;
        var stack = new Vector();
        var count = 0;
        stack[count++] = this.m_root;
        while (count > 0) {
            var node = stack[--count];
            if (node.aabb.TestOverlap(aabb)) {
                if (node.IsLeaf()) {
                    var proceed = callback(node);
                    if (!proceed) return;
                }
                else {
                    stack[count++] = node.child1;
                    stack[count++] = node.child2;
                }
            }
        }
    }
    b2DynamicTree.prototype.RayCast = function (callback, input) {
        if (this.m_root == null) return;
        var p1 = input.p1;
        var p2 = input.p2;
        var r = b2Math.SubtractVV(p1, p2);
        r.Normalize();
        var v = b2Math.CrossFV(1.0, r);
        var abs_v = b2Math.AbsV(v);
        var maxFraction = input.maxFraction;
        var segmentAABB = new b2AABB();
        var tX = 0;
        var tY = 0; {
            tX = p1.x + maxFraction * (p2.x - p1.x);
            tY = p1.y + maxFraction * (p2.y - p1.y);
            segmentAABB.lowerBound.x = Math.min(p1.x, tX);
            segmentAABB.lowerBound.y = Math.min(p1.y, tY);
            segmentAABB.upperBound.x = Math.max(p1.x, tX);
            segmentAABB.upperBound.y = Math.max(p1.y, tY);
        }
        var stack = new Vector();
        var count = 0;
        stack[count++] = this.m_root;
        while (count > 0) {
            var node = stack[--count];
            if (node.aabb.TestOverlap(segmentAABB) == false) {
                continue;
            }
            var c = node.aabb.GetCenter();
            var h = node.aabb.GetExtents();
            var separation = Math.abs(v.x * (p1.x - c.x) + v.y * (p1.y - c.y)) - abs_v.x * h.x - abs_v.y * h.y;
            if (separation > 0.0) continue;
            if (node.IsLeaf()) {
                var subInput = new b2RayCastInput();
                subInput.p1 = input.p1;
                subInput.p2 = input.p2;
                subInput.maxFraction = input.maxFraction;
                maxFraction = callback(subInput, node);
                if (maxFraction == 0.0) return;
                if (maxFraction > 0.0) {
                    tX = p1.x + maxFraction * (p2.x - p1.x);
                    tY = p1.y + maxFraction * (p2.y - p1.y);
                    segmentAABB.lowerBound.x = Math.min(p1.x, tX);
                    segmentAABB.lowerBound.y = Math.min(p1.y, tY);
                    segmentAABB.upperBound.x = Math.max(p1.x, tX);
                    segmentAABB.upperBound.y = Math.max(p1.y, tY);
                }
            }
            else {
                stack[count++] = node.child1;
                stack[count++] = node.child2;
            }
        }
    }
    b2DynamicTree.prototype.AllocateNode = function () {
        if (this.m_freeList) {
            var node = this.m_freeList;
            this.m_freeList = node.parent;
            node.parent = null;
            node.child1 = null;
            node.child2 = null;
            return node;
        }
        return new b2DynamicTreeNode();
    }
    b2DynamicTree.prototype.FreeNode = function (node) {
        node.parent = this.m_freeList;
        this.m_freeList = node;
    }
    b2DynamicTree.prototype.InsertLeaf = function (leaf) {
        ++this.m_insertionCount;
        if (this.m_root == null) {
            this.m_root = leaf;
            this.m_root.parent = null;
            return;
        }
        var center = leaf.aabb.GetCenter();
        var sibling = this.m_root;
        if (sibling.IsLeaf() == false) {
            do {
                var child1 = sibling.child1;
                var child2 = sibling.child2;
                var norm1 = Math.abs((child1.aabb.lowerBound.x + child1.aabb.upperBound.x) / 2 - center.x) + Math.abs((child1.aabb.lowerBound.y + child1.aabb.upperBound.y) / 2 - center.y);
                var norm2 = Math.abs((child2.aabb.lowerBound.x + child2.aabb.upperBound.x) / 2 - center.x) + Math.abs((child2.aabb.lowerBound.y + child2.aabb.upperBound.y) / 2 - center.y);
                if (norm1 < norm2) {
                    sibling = child1;
                }
                else {
                    sibling = child2;
                }
            }
            while (sibling.IsLeaf() == false)
        }
        var node1 = sibling.parent;
        var node2 = this.AllocateNode();
        node2.parent = node1;
        node2.userData = null;
        node2.aabb.Combine(leaf.aabb, sibling.aabb);
        if (node1) {
            if (sibling.parent.child1 == sibling) {
                node1.child1 = node2;
            }
            else {
                node1.child2 = node2;
            }
            node2.child1 = sibling;
            node2.child2 = leaf;
            sibling.parent = node2;
            leaf.parent = node2;
            do {
                if (node1.aabb.Contains(node2.aabb)) break;
                node1.aabb.Combine(node1.child1.aabb, node1.child2.aabb);
                node2 = node1;
                node1 = node1.parent;
            }
            while (node1)
        }
        else {
            node2.child1 = sibling;
            node2.child2 = leaf;
            sibling.parent = node2;
            leaf.parent = node2;
            this.m_root = node2;
        }
    }
    b2DynamicTree.prototype.RemoveLeaf = function (leaf) {
        if (leaf == this.m_root) {
            this.m_root = null;
            return;
        }
        var node2 = leaf.parent;
        var node1 = node2.parent;
        var sibling;
        if (node2.child1 == leaf) {
            sibling = node2.child2;
        }
        else {
            sibling = node2.child1;
        }
        if (node1) {
            if (node1.child1 == node2) {
                node1.child1 = sibling;
            }
            else {
                node1.child2 = sibling;
            }
            sibling.parent = node1;
            this.FreeNode(node2);
            while (node1) {
                var oldAABB = node1.aabb;
                node1.aabb = b2AABB.Combine(node1.child1.aabb, node1.child2.aabb);
                if (oldAABB.Contains(node1.aabb)) break;
                node1 = node1.parent;
            }
        }
        else {
            this.m_root = sibling;
            sibling.parent = null;
            this.FreeNode(node2);
        }
    }
    b2DynamicTreeBroadPhase.b2DynamicTreeBroadPhase = function () {
        this.m_tree = new b2DynamicTree();
        this.m_moveBuffer = new Vector();
        this.m_pairBuffer = new Vector();
        this.m_pairCount = 0;
    };
    b2DynamicTreeBroadPhase.prototype.CreateProxy = function (aabb, userData) {
        var proxy = this.m_tree.CreateProxy(aabb, userData);
        ++this.m_proxyCount;
        this.BufferMove(proxy);
        return proxy;
    }
    b2DynamicTreeBroadPhase.prototype.DestroyProxy = function (proxy) {
        this.UnBufferMove(proxy);
        --this.m_proxyCount;
        this.m_tree.DestroyProxy(proxy);
    }
    b2DynamicTreeBroadPhase.prototype.MoveProxy = function (proxy, aabb, displacement) {
        var buffer = this.m_tree.MoveProxy(proxy, aabb, displacement);
        if (buffer) {
            this.BufferMove(proxy);
        }
    }
    b2DynamicTreeBroadPhase.prototype.TestOverlap = function (proxyA, proxyB) {
        var aabbA = this.m_tree.GetFatAABB(proxyA);
        var aabbB = this.m_tree.GetFatAABB(proxyB);
        return aabbA.TestOverlap(aabbB);
    }
    b2DynamicTreeBroadPhase.prototype.GetUserData = function (proxy) {
        return this.m_tree.GetUserData(proxy);
    }
    b2DynamicTreeBroadPhase.prototype.GetFatAABB = function (proxy) {
        return this.m_tree.GetFatAABB(proxy);
    }
    b2DynamicTreeBroadPhase.prototype.GetProxyCount = function () {
        return this.m_proxyCount;
    }
    b2DynamicTreeBroadPhase.prototype.UpdatePairs = function (callback) {
        var __this = this;
        __this.m_pairCount = 0;
        var i = 0,
            queryProxy;
        for (i = 0;
             i < __this.m_moveBuffer.length; ++i) {
            queryProxy = __this.m_moveBuffer[i];

            function QueryCallback(proxy) {
                if (proxy == queryProxy) return true;
                if (__this.m_pairCount == __this.m_pairBuffer.length) {
                    __this.m_pairBuffer[__this.m_pairCount] = new b2DynamicTreePair();
                }
                var pair = __this.m_pairBuffer[__this.m_pairCount];
                pair.proxyA = proxy < queryProxy ? proxy : queryProxy;
                pair.proxyB = proxy >= queryProxy ? proxy : queryProxy;++__this.m_pairCount;
                return true;
            };
            var fatAABB = __this.m_tree.GetFatAABB(queryProxy);
            __this.m_tree.Query(QueryCallback, fatAABB);
        }
        __this.m_moveBuffer.length = 0;
        for (var i = 0; i < __this.m_pairCount;) {
            var primaryPair = __this.m_pairBuffer[i];
            var userDataA = __this.m_tree.GetUserData(primaryPair.proxyA);
            var userDataB = __this.m_tree.GetUserData(primaryPair.proxyB);
            callback(userDataA, userDataB);
            ++i;
            while (i < __this.m_pairCount) {
                var pair = __this.m_pairBuffer[i];
                if (pair.proxyA != primaryPair.proxyA || pair.proxyB != primaryPair.proxyB) {
                    break;
                }++i;
            }
        }
    }
    b2DynamicTreeBroadPhase.prototype.Query = function (callback, aabb) {
        this.m_tree.Query(callback, aabb);
    }
    b2DynamicTreeBroadPhase.prototype.RayCast = function (callback, input) {
        this.m_tree.RayCast(callback, input);
    }
    b2DynamicTreeBroadPhase.prototype.Validate = function () {}
    b2DynamicTreeBroadPhase.prototype.Rebalance = function (iterations) {
        if (iterations === undefined) iterations = 0;
        this.m_tree.Rebalance(iterations);
    }
    b2DynamicTreeBroadPhase.prototype.BufferMove = function (proxy) {
        this.m_moveBuffer[this.m_moveBuffer.length] = proxy;
    }
    b2DynamicTreeBroadPhase.prototype.UnBufferMove = function (proxy) {
        var i = parseInt(this.m_moveBuffer.indexOf(proxy));
        this.m_moveBuffer.splice(i, 1);
    }
    b2DynamicTreeBroadPhase.prototype.ComparePairs = function (pair1, pair2) {
        return 0;
    }
    b2DynamicTreeBroadPhase.__implements = {};
    b2DynamicTreeBroadPhase.__implements[IBroadPhase] = true;
    b2DynamicTreeNode.b2DynamicTreeNode = function () {
        this.aabb = new b2AABB();
    };
    b2DynamicTreeNode.prototype.IsLeaf = function () {
        return this.child1 == null;
    }
    b2DynamicTreePair.b2DynamicTreePair = function () {};
    b2Manifold.b2Manifold = function () {
        this.m_pointCount = 0;
    };
    b2Manifold.prototype.b2Manifold = function () {
        this.m_points = new Vector(b2Settings.b2_maxManifoldPoints);
        for (var i = 0; i < b2Settings.b2_maxManifoldPoints; i++) {
            this.m_points[i] = new b2ManifoldPoint();
        }
        this.m_localPlaneNormal = new b2Vec2();
        this.m_localPoint = new b2Vec2();
    }
    b2Manifold.prototype.Reset = function () {
        for (var i = 0; i < b2Settings.b2_maxManifoldPoints; i++) {
            ((this.m_points[i] instanceof b2ManifoldPoint ? this.m_points[i] : null)).Reset();
        }
        this.m_localPlaneNormal.SetZero();
        this.m_localPoint.SetZero();
        this.m_type = 0;
        this.m_pointCount = 0;
    }
    b2Manifold.prototype.Set = function (m) {
        this.m_pointCount = m.m_pointCount;
        for (var i = 0; i < b2Settings.b2_maxManifoldPoints; i++) {
            ((this.m_points[i] instanceof b2ManifoldPoint ? this.m_points[i] : null)).Set(m.m_points[i]);
        }
        this.m_localPlaneNormal.SetV(m.m_localPlaneNormal);
        this.m_localPoint.SetV(m.m_localPoint);
        this.m_type = m.m_type;
    }
    b2Manifold.prototype.Copy = function () {
        var copy = new b2Manifold();
        copy.Set(this);
        return copy;
    }
    Box2D.postDefs.push(function () {
        Box2D.Collision.b2Manifold.e_circles = 0x0001;
        Box2D.Collision.b2Manifold.e_faceA = 0x0002;
        Box2D.Collision.b2Manifold.e_faceB = 0x0004;
    });
    b2ManifoldPoint.b2ManifoldPoint = function () {
        this.m_localPoint = new b2Vec2();
        this.m_id = new b2ContactID();
    };
    b2ManifoldPoint.prototype.b2ManifoldPoint = function () {
        this.Reset();
    }
    b2ManifoldPoint.prototype.Reset = function () {
        this.m_localPoint.SetZero();
        this.m_normalImpulse = 0.0;
        this.m_tangentImpulse = 0.0;
        this.m_id.key = 0;
    }
    b2ManifoldPoint.prototype.Set = function (m) {
        this.m_localPoint.SetV(m.m_localPoint);
        this.m_normalImpulse = m.m_normalImpulse;
        this.m_tangentImpulse = m.m_tangentImpulse;
        this.m_id.Set(m.m_id);
    }
    b2Point.b2Point = function () {
        this.p = new b2Vec2();
    };
    b2Point.prototype.Support = function (xf, vX, vY) {
        if (vX === undefined) vX = 0;
        if (vY === undefined) vY = 0;
        return this.p;
    }
    b2Point.prototype.GetFirstVertex = function (xf) {
        return this.p;
    }
    b2RayCastInput.b2RayCastInput = function () {
        this.p1 = new b2Vec2();
        this.p2 = new b2Vec2();
    };
    b2RayCastInput.prototype.b2RayCastInput = function (p1, p2, maxFraction) {
        if (p1 === undefined) p1 = null;
        if (p2 === undefined) p2 = null;
        if (maxFraction === undefined) maxFraction = 1;
        if (p1) this.p1.SetV(p1);
        if (p2) this.p2.SetV(p2);
        this.maxFraction = maxFraction;
    }
    b2RayCastOutput.b2RayCastOutput = function () {
        this.normal = new b2Vec2();
    };
    b2Segment.b2Segment = function () {
        this.p1 = new b2Vec2();
        this.p2 = new b2Vec2();
    };
    b2Segment.prototype.TestSegment = function (lambda, normal, segment, maxLambda) {
        if (maxLambda === undefined) maxLambda = 0;
        var s = segment.p1;
        var rX = segment.p2.x - s.x;
        var rY = segment.p2.y - s.y;
        var dX = this.p2.x - this.p1.x;
        var dY = this.p2.y - this.p1.y;
        var nX = dY;
        var nY = (-dX);
        var k_slop = 100.0 * Number.MIN_VALUE;
        var denom = (-(rX * nX + rY * nY));
        if (denom > k_slop) {
            var bX = s.x - this.p1.x;
            var bY = s.y - this.p1.y;
            var a = (bX * nX + bY * nY);
            if (0.0 <= a && a <= maxLambda * denom) {
                var mu2 = (-rX * bY) + rY * bX;
                if ((-k_slop * denom) <= mu2 && mu2 <= denom * (1.0 + k_slop)) {
                    a /= denom;
                    var nLen = Math.sqrt(nX * nX + nY * nY);
                    nX /= nLen;
                    nY /= nLen;
                    lambda[0] = a;
                    normal.Set(nX, nY);
                    return true;
                }
            }
        }
        return false;
    }
    b2Segment.prototype.Extend = function (aabb) {
        this.ExtendForward(aabb);
        this.ExtendBackward(aabb);
    }
    b2Segment.prototype.ExtendForward = function (aabb) {
        var dX = this.p2.x - this.p1.x;
        var dY = this.p2.y - this.p1.y;
        var lambda = Math.min(dX > 0 ? (aabb.upperBound.x - this.p1.x) / dX : dX < 0 ? (aabb.lowerBound.x - this.p1.x) / dX : Number.POSITIVE_INFINITY,
            dY > 0 ? (aabb.upperBound.y - this.p1.y) / dY : dY < 0 ? (aabb.lowerBound.y - this.p1.y) / dY : Number.POSITIVE_INFINITY);
        this.p2.x = this.p1.x + dX * lambda;
        this.p2.y = this.p1.y + dY * lambda;
    }
    b2Segment.prototype.ExtendBackward = function (aabb) {
        var dX = (-this.p2.x) + this.p1.x;
        var dY = (-this.p2.y) + this.p1.y;
        var lambda = Math.min(dX > 0 ? (aabb.upperBound.x - this.p2.x) / dX : dX < 0 ? (aabb.lowerBound.x - this.p2.x) / dX : Number.POSITIVE_INFINITY,
            dY > 0 ? (aabb.upperBound.y - this.p2.y) / dY : dY < 0 ? (aabb.lowerBound.y - this.p2.y) / dY : Number.POSITIVE_INFINITY);
        this.p1.x = this.p2.x + dX * lambda;
        this.p1.y = this.p2.y + dY * lambda;
    }
    b2SeparationFunction.b2SeparationFunction = function () {
        this.m_localPoint = new b2Vec2();
        this.m_axis = new b2Vec2();
    };
    b2SeparationFunction.prototype.Initialize = function (cache, proxyA, transformA, proxyB, transformB) {
        this.m_proxyA = proxyA;
        this.m_proxyB = proxyB;
        var count = parseInt(cache.count);
        b2Settings.b2Assert(0 < count && count < 3);
        var localPointA;
        var localPointA1;
        var localPointA2;
        var localPointB;
        var localPointB1;
        var localPointB2;
        var pointAX = 0;
        var pointAY = 0;
        var pointBX = 0;
        var pointBY = 0;
        var normalX = 0;
        var normalY = 0;
        var tMat;
        var tVec;
        var s = 0;
        var sgn = 0;
        if (count == 1) {
            this.m_type = b2SeparationFunction.e_points;
            localPointA = this.m_proxyA.GetVertex(cache.indexA[0]);
            localPointB = this.m_proxyB.GetVertex(cache.indexB[0]);
            tVec = localPointA;
            tMat = transformA.R;
            pointAX = transformA.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
            pointAY = transformA.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
            tVec = localPointB;
            tMat = transformB.R;
            pointBX = transformB.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
            pointBY = transformB.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
            this.m_axis.x = pointBX - pointAX;
            this.m_axis.y = pointBY - pointAY;
            this.m_axis.Normalize();
        }
        else if (cache.indexB[0] == cache.indexB[1]) {
            this.m_type = b2SeparationFunction.e_faceA;
            localPointA1 = this.m_proxyA.GetVertex(cache.indexA[0]);
            localPointA2 = this.m_proxyA.GetVertex(cache.indexA[1]);
            localPointB = this.m_proxyB.GetVertex(cache.indexB[0]);
            this.m_localPoint.x = 0.5 * (localPointA1.x + localPointA2.x);
            this.m_localPoint.y = 0.5 * (localPointA1.y + localPointA2.y);
            this.m_axis = b2Math.CrossVF(b2Math.SubtractVV(localPointA2, localPointA1), 1.0);
            this.m_axis.Normalize();
            tVec = this.m_axis;
            tMat = transformA.R;
            normalX = tMat.col1.x * tVec.x + tMat.col2.x * tVec.y;
            normalY = tMat.col1.y * tVec.x + tMat.col2.y * tVec.y;
            tVec = this.m_localPoint;
            tMat = transformA.R;
            pointAX = transformA.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
            pointAY = transformA.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
            tVec = localPointB;
            tMat = transformB.R;
            pointBX = transformB.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
            pointBY = transformB.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
            s = (pointBX - pointAX) * normalX + (pointBY - pointAY) * normalY;
            if (s < 0.0) {
                this.m_axis.NegativeSelf();
            }
        }
        else if (cache.indexA[0] == cache.indexA[0]) {
            this.m_type = b2SeparationFunction.e_faceB;
            localPointB1 = this.m_proxyB.GetVertex(cache.indexB[0]);
            localPointB2 = this.m_proxyB.GetVertex(cache.indexB[1]);
            localPointA = this.m_proxyA.GetVertex(cache.indexA[0]);
            this.m_localPoint.x = 0.5 * (localPointB1.x + localPointB2.x);
            this.m_localPoint.y = 0.5 * (localPointB1.y + localPointB2.y);
            this.m_axis = b2Math.CrossVF(b2Math.SubtractVV(localPointB2, localPointB1), 1.0);
            this.m_axis.Normalize();
            tVec = this.m_axis;
            tMat = transformB.R;
            normalX = tMat.col1.x * tVec.x + tMat.col2.x * tVec.y;
            normalY = tMat.col1.y * tVec.x + tMat.col2.y * tVec.y;
            tVec = this.m_localPoint;
            tMat = transformB.R;
            pointBX = transformB.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
            pointBY = transformB.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
            tVec = localPointA;
            tMat = transformA.R;
            pointAX = transformA.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
            pointAY = transformA.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
            s = (pointAX - pointBX) * normalX + (pointAY - pointBY) * normalY;
            if (s < 0.0) {
                this.m_axis.NegativeSelf();
            }
        }
        else {
            localPointA1 = this.m_proxyA.GetVertex(cache.indexA[0]);
            localPointA2 = this.m_proxyA.GetVertex(cache.indexA[1]);
            localPointB1 = this.m_proxyB.GetVertex(cache.indexB[0]);
            localPointB2 = this.m_proxyB.GetVertex(cache.indexB[1]);
            var pA = b2Math.MulX(transformA, localPointA);
            var dA = b2Math.MulMV(transformA.R, b2Math.SubtractVV(localPointA2, localPointA1));
            var pB = b2Math.MulX(transformB, localPointB);
            var dB = b2Math.MulMV(transformB.R, b2Math.SubtractVV(localPointB2, localPointB1));
            var a = dA.x * dA.x + dA.y * dA.y;
            var e = dB.x * dB.x + dB.y * dB.y;
            var r = b2Math.SubtractVV(dB, dA);
            var c = dA.x * r.x + dA.y * r.y;
            var f = dB.x * r.x + dB.y * r.y;
            var b = dA.x * dB.x + dA.y * dB.y;
            var denom = a * e - b * b;
            s = 0.0;
            if (denom != 0.0) {
                s = b2Math.Clamp((b * f - c * e) / denom, 0.0, 1.0);
            }
            var t = (b * s + f) / e;
            if (t < 0.0) {
                t = 0.0;
                s = b2Math.Clamp((b - c) / a, 0.0, 1.0);
            }
            localPointA = new b2Vec2();
            localPointA.x = localPointA1.x + s * (localPointA2.x - localPointA1.x);
            localPointA.y = localPointA1.y + s * (localPointA2.y - localPointA1.y);
            localPointB = new b2Vec2();
            localPointB.x = localPointB1.x + s * (localPointB2.x - localPointB1.x);
            localPointB.y = localPointB1.y + s * (localPointB2.y - localPointB1.y);
            if (s == 0.0 || s == 1.0) {
                this.m_type = b2SeparationFunction.e_faceB;
                this.m_axis = b2Math.CrossVF(b2Math.SubtractVV(localPointB2, localPointB1), 1.0);
                this.m_axis.Normalize();
                this.m_localPoint = localPointB;
                tVec = this.m_axis;
                tMat = transformB.R;
                normalX = tMat.col1.x * tVec.x + tMat.col2.x * tVec.y;
                normalY = tMat.col1.y * tVec.x + tMat.col2.y * tVec.y;
                tVec = this.m_localPoint;
                tMat = transformB.R;
                pointBX = transformB.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
                pointBY = transformB.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
                tVec = localPointA;
                tMat = transformA.R;
                pointAX = transformA.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
                pointAY = transformA.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
                sgn = (pointAX - pointBX) * normalX + (pointAY - pointBY) * normalY;
                if (s < 0.0) {
                    this.m_axis.NegativeSelf();
                }
            }
            else {
                this.m_type = b2SeparationFunction.e_faceA;
                this.m_axis = b2Math.CrossVF(b2Math.SubtractVV(localPointA2, localPointA1), 1.0);
                this.m_localPoint = localPointA;
                tVec = this.m_axis;
                tMat = transformA.R;
                normalX = tMat.col1.x * tVec.x + tMat.col2.x * tVec.y;
                normalY = tMat.col1.y * tVec.x + tMat.col2.y * tVec.y;
                tVec = this.m_localPoint;
                tMat = transformA.R;
                pointAX = transformA.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
                pointAY = transformA.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
                tVec = localPointB;
                tMat = transformB.R;
                pointBX = transformB.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
                pointBY = transformB.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
                sgn = (pointBX - pointAX) * normalX + (pointBY - pointAY) * normalY;
                if (s < 0.0) {
                    this.m_axis.NegativeSelf();
                }
            }
        }
    }
    b2SeparationFunction.prototype.Evaluate = function (transformA, transformB) {
        var axisA;
        var axisB;
        var localPointA;
        var localPointB;
        var pointA;
        var pointB;
        var seperation = 0;
        var normal;
        switch (this.m_type) {
            case b2SeparationFunction.e_points:
            {
                axisA = b2Math.MulTMV(transformA.R, this.m_axis);
                axisB = b2Math.MulTMV(transformB.R, this.m_axis.GetNegative());
                localPointA = this.m_proxyA.GetSupportVertex(axisA);
                localPointB = this.m_proxyB.GetSupportVertex(axisB);
                pointA = b2Math.MulX(transformA, localPointA);
                pointB = b2Math.MulX(transformB, localPointB);
                seperation = (pointB.x - pointA.x) * this.m_axis.x + (pointB.y - pointA.y) * this.m_axis.y;
                return seperation;
            }
            case b2SeparationFunction.e_faceA:
            {
                normal = b2Math.MulMV(transformA.R, this.m_axis);
                pointA = b2Math.MulX(transformA, this.m_localPoint);
                axisB = b2Math.MulTMV(transformB.R, normal.GetNegative());
                localPointB = this.m_proxyB.GetSupportVertex(axisB);
                pointB = b2Math.MulX(transformB, localPointB);
                seperation = (pointB.x - pointA.x) * normal.x + (pointB.y - pointA.y) * normal.y;
                return seperation;
            }
            case b2SeparationFunction.e_faceB:
            {
                normal = b2Math.MulMV(transformB.R, this.m_axis);
                pointB = b2Math.MulX(transformB, this.m_localPoint);
                axisA = b2Math.MulTMV(transformA.R, normal.GetNegative());
                localPointA = this.m_proxyA.GetSupportVertex(axisA);
                pointA = b2Math.MulX(transformA, localPointA);
                seperation = (pointA.x - pointB.x) * normal.x + (pointA.y - pointB.y) * normal.y;
                return seperation;
            }
            default:
                b2Settings.b2Assert(false);
                return 0.0;
        }
    }
    Box2D.postDefs.push(function () {
        Box2D.Collision.b2SeparationFunction.e_points = 0x01;
        Box2D.Collision.b2SeparationFunction.e_faceA = 0x02;
        Box2D.Collision.b2SeparationFunction.e_faceB = 0x04;
    });
    b2Simplex.b2Simplex = function () {
        this.m_v1 = new b2SimplexVertex();
        this.m_v2 = new b2SimplexVertex();
        this.m_v3 = new b2SimplexVertex();
        this.m_vertices = new Vector(3);
    };
    b2Simplex.prototype.b2Simplex = function () {
        this.m_vertices[0] = this.m_v1;
        this.m_vertices[1] = this.m_v2;
        this.m_vertices[2] = this.m_v3;
    }
    b2Simplex.prototype.ReadCache = function (cache, proxyA, transformA, proxyB, transformB) {
        b2Settings.b2Assert(0 <= cache.count && cache.count <= 3);
        var wALocal;
        var wBLocal;
        this.m_count = cache.count;
        var vertices = this.m_vertices;
        for (var i = 0; i < this.m_count; i++) {
            var v = vertices[i];
            v.indexA = cache.indexA[i];
            v.indexB = cache.indexB[i];
            wALocal = proxyA.GetVertex(v.indexA);
            wBLocal = proxyB.GetVertex(v.indexB);
            v.wA = b2Math.MulX(transformA, wALocal);
            v.wB = b2Math.MulX(transformB, wBLocal);
            v.w = b2Math.SubtractVV(v.wB, v.wA);
            v.a = 0;
        }
        if (this.m_count > 1) {
            var metric1 = cache.metric;
            var metric2 = this.GetMetric();
            if (metric2 < .5 * metric1 || 2.0 * metric1 < metric2 || metric2 < Number.MIN_VALUE) {
                this.m_count = 0;
            }
        }
        if (this.m_count == 0) {
            v = vertices[0];
            v.indexA = 0;
            v.indexB = 0;
            wALocal = proxyA.GetVertex(0);
            wBLocal = proxyB.GetVertex(0);
            v.wA = b2Math.MulX(transformA, wALocal);
            v.wB = b2Math.MulX(transformB, wBLocal);
            v.w = b2Math.SubtractVV(v.wB, v.wA);
            this.m_count = 1;
        }
    }
    b2Simplex.prototype.WriteCache = function (cache) {
        cache.metric = this.GetMetric();
        cache.count = Box2D.parseUInt(this.m_count);
        var vertices = this.m_vertices;
        for (var i = 0; i < this.m_count; i++) {
            cache.indexA[i] = Box2D.parseUInt(vertices[i].indexA);
            cache.indexB[i] = Box2D.parseUInt(vertices[i].indexB);
        }
    }
    b2Simplex.prototype.GetSearchDirection = function () {
        switch (this.m_count) {
            case 1:
                return this.m_v1.w.GetNegative();
            case 2:
            {
                var e12 = b2Math.SubtractVV(this.m_v2.w, this.m_v1.w);
                var sgn = b2Math.CrossVV(e12, this.m_v1.w.GetNegative());
                if (sgn > 0.0) {
                    return b2Math.CrossFV(1.0, e12);
                }
                else {
                    return b2Math.CrossVF(e12, 1.0);
                }
            }
            default:
                b2Settings.b2Assert(false);
                return new b2Vec2();
        }
    }
    b2Simplex.prototype.GetClosestPoint = function () {
        switch (this.m_count) {
            case 0:
                b2Settings.b2Assert(false);
                return new b2Vec2();
            case 1:
                return this.m_v1.w;
            case 2:
                return new b2Vec2(this.m_v1.a * this.m_v1.w.x + this.m_v2.a * this.m_v2.w.x, this.m_v1.a * this.m_v1.w.y + this.m_v2.a * this.m_v2.w.y);
            default:
                b2Settings.b2Assert(false);
                return new b2Vec2();
        }
    }
    b2Simplex.prototype.GetWitnessPoints = function (pA, pB) {
        switch (this.m_count) {
            case 0:
                b2Settings.b2Assert(false);
                break;
            case 1:
                pA.SetV(this.m_v1.wA);
                pB.SetV(this.m_v1.wB);
                break;
            case 2:
                pA.x = this.m_v1.a * this.m_v1.wA.x + this.m_v2.a * this.m_v2.wA.x;
                pA.y = this.m_v1.a * this.m_v1.wA.y + this.m_v2.a * this.m_v2.wA.y;
                pB.x = this.m_v1.a * this.m_v1.wB.x + this.m_v2.a * this.m_v2.wB.x;
                pB.y = this.m_v1.a * this.m_v1.wB.y + this.m_v2.a * this.m_v2.wB.y;
                break;
            case 3:
                pB.x = pA.x = this.m_v1.a * this.m_v1.wA.x + this.m_v2.a * this.m_v2.wA.x + this.m_v3.a * this.m_v3.wA.x;
                pB.y = pA.y = this.m_v1.a * this.m_v1.wA.y + this.m_v2.a * this.m_v2.wA.y + this.m_v3.a * this.m_v3.wA.y;
                break;
            default:
                b2Settings.b2Assert(false);
                break;
        }
    }
    b2Simplex.prototype.GetMetric = function () {
        switch (this.m_count) {
            case 0:
                b2Settings.b2Assert(false);
                return 0.0;
            case 1:
                return 0.0;
            case 2:
                return b2Math.SubtractVV(this.m_v1.w, this.m_v2.w).Length();
            case 3:
                return b2Math.CrossVV(b2Math.SubtractVV(this.m_v2.w, this.m_v1.w), b2Math.SubtractVV(this.m_v3.w, this.m_v1.w));
            default:
                b2Settings.b2Assert(false);
                return 0.0;
        }
    }
    b2Simplex.prototype.Solve2 = function () {
        var w1 = this.m_v1.w;
        var w2 = this.m_v2.w;
        var e12 = b2Math.SubtractVV(w2, w1);
        var d12_2 = (-(w1.x * e12.x + w1.y * e12.y));
        if (d12_2 <= 0.0) {
            this.m_v1.a = 1.0;
            this.m_count = 1;
            return;
        }
        var d12_1 = (w2.x * e12.x + w2.y * e12.y);
        if (d12_1 <= 0.0) {
            this.m_v2.a = 1.0;
            this.m_count = 1;
            this.m_v1.Set(this.m_v2);
            return;
        }
        var inv_d12 = 1.0 / (d12_1 + d12_2);
        this.m_v1.a = d12_1 * inv_d12;
        this.m_v2.a = d12_2 * inv_d12;
        this.m_count = 2;
    }
    b2Simplex.prototype.Solve3 = function () {
        var w1 = this.m_v1.w;
        var w2 = this.m_v2.w;
        var w3 = this.m_v3.w;
        var e12 = b2Math.SubtractVV(w2, w1);
        var w1e12 = b2Math.Dot(w1, e12);
        var w2e12 = b2Math.Dot(w2, e12);
        var d12_1 = w2e12;
        var d12_2 = (-w1e12);
        var e13 = b2Math.SubtractVV(w3, w1);
        var w1e13 = b2Math.Dot(w1, e13);
        var w3e13 = b2Math.Dot(w3, e13);
        var d13_1 = w3e13;
        var d13_2 = (-w1e13);
        var e23 = b2Math.SubtractVV(w3, w2);
        var w2e23 = b2Math.Dot(w2, e23);
        var w3e23 = b2Math.Dot(w3, e23);
        var d23_1 = w3e23;
        var d23_2 = (-w2e23);
        var n123 = b2Math.CrossVV(e12, e13);
        var d123_1 = n123 * b2Math.CrossVV(w2, w3);
        var d123_2 = n123 * b2Math.CrossVV(w3, w1);
        var d123_3 = n123 * b2Math.CrossVV(w1, w2);
        if (d12_2 <= 0.0 && d13_2 <= 0.0) {
            this.m_v1.a = 1.0;
            this.m_count = 1;
            return;
        }
        if (d12_1 > 0.0 && d12_2 > 0.0 && d123_3 <= 0.0) {
            var inv_d12 = 1.0 / (d12_1 + d12_2);
            this.m_v1.a = d12_1 * inv_d12;
            this.m_v2.a = d12_2 * inv_d12;
            this.m_count = 2;
            return;
        }
        if (d13_1 > 0.0 && d13_2 > 0.0 && d123_2 <= 0.0) {
            var inv_d13 = 1.0 / (d13_1 + d13_2);
            this.m_v1.a = d13_1 * inv_d13;
            this.m_v3.a = d13_2 * inv_d13;
            this.m_count = 2;
            this.m_v2.Set(this.m_v3);
            return;
        }
        if (d12_1 <= 0.0 && d23_2 <= 0.0) {
            this.m_v2.a = 1.0;
            this.m_count = 1;
            this.m_v1.Set(this.m_v2);
            return;
        }
        if (d13_1 <= 0.0 && d23_1 <= 0.0) {
            this.m_v3.a = 1.0;
            this.m_count = 1;
            this.m_v1.Set(this.m_v3);
            return;
        }
        if (d23_1 > 0.0 && d23_2 > 0.0 && d123_1 <= 0.0) {
            var inv_d23 = 1.0 / (d23_1 + d23_2);
            this.m_v2.a = d23_1 * inv_d23;
            this.m_v3.a = d23_2 * inv_d23;
            this.m_count = 2;
            this.m_v1.Set(this.m_v3);
            return;
        }
        var inv_d123 = 1.0 / (d123_1 + d123_2 + d123_3);
        this.m_v1.a = d123_1 * inv_d123;
        this.m_v2.a = d123_2 * inv_d123;
        this.m_v3.a = d123_3 * inv_d123;
        this.m_count = 3;
    }
    b2SimplexCache.b2SimplexCache = function () {
        this.indexA = new Vector_a2j_Number(3);
        this.indexB = new Vector_a2j_Number(3);
    };
    b2SimplexVertex.b2SimplexVertex = function () {};
    b2SimplexVertex.prototype.Set = function (other) {
        this.wA.SetV(other.wA);
        this.wB.SetV(other.wB);
        this.w.SetV(other.w);
        this.a = other.a;
        this.indexA = other.indexA;
        this.indexB = other.indexB;
    }
    b2TimeOfImpact.b2TimeOfImpact = function () {};
    b2TimeOfImpact.TimeOfImpact = function (input) {
        ++b2TimeOfImpact.b2_toiCalls;
        var proxyA = input.proxyA;
        var proxyB = input.proxyB;
        var sweepA = input.sweepA;
        var sweepB = input.sweepB;
        b2Settings.b2Assert(sweepA.t0 == sweepB.t0);
        b2Settings.b2Assert(1.0 - sweepA.t0 > Number.MIN_VALUE);
        var radius = proxyA.m_radius + proxyB.m_radius;
        var tolerance = input.tolerance;
        var alpha = 0.0;
        var k_maxIterations = 1000;
        var iter = 0;
        var target = 0.0;
        b2TimeOfImpact.s_cache.count = 0;
        b2TimeOfImpact.s_distanceInput.useRadii = false;
        for (;;) {
            sweepA.GetTransform(b2TimeOfImpact.s_xfA, alpha);
            sweepB.GetTransform(b2TimeOfImpact.s_xfB, alpha);
            b2TimeOfImpact.s_distanceInput.proxyA = proxyA;
            b2TimeOfImpact.s_distanceInput.proxyB = proxyB;
            b2TimeOfImpact.s_distanceInput.transformA = b2TimeOfImpact.s_xfA;
            b2TimeOfImpact.s_distanceInput.transformB = b2TimeOfImpact.s_xfB;
            b2Distance.Distance(b2TimeOfImpact.s_distanceOutput, b2TimeOfImpact.s_cache, b2TimeOfImpact.s_distanceInput);
            if (b2TimeOfImpact.s_distanceOutput.distance <= 0.0) {
                alpha = 1.0;
                break;
            }
            b2TimeOfImpact.s_fcn.Initialize(b2TimeOfImpact.s_cache, proxyA, b2TimeOfImpact.s_xfA, proxyB, b2TimeOfImpact.s_xfB);
            var separation = b2TimeOfImpact.s_fcn.Evaluate(b2TimeOfImpact.s_xfA, b2TimeOfImpact.s_xfB);
            if (separation <= 0.0) {
                alpha = 1.0;
                break;
            }
            if (iter == 0) {
                if (separation > radius) {
                    target = b2Math.Max(radius - tolerance, 0.75 * radius);
                }
                else {
                    target = b2Math.Max(separation - tolerance, 0.02 * radius);
                }
            }
            if (separation - target < 0.5 * tolerance) {
                if (iter == 0) {
                    alpha = 1.0;
                    break;
                }
                break;
            }
            var newAlpha = alpha; {
                var x1 = alpha;
                var x2 = 1.0;
                var f1 = separation;
                sweepA.GetTransform(b2TimeOfImpact.s_xfA, x2);
                sweepB.GetTransform(b2TimeOfImpact.s_xfB, x2);
                var f2 = b2TimeOfImpact.s_fcn.Evaluate(b2TimeOfImpact.s_xfA, b2TimeOfImpact.s_xfB);
                if (f2 >= target) {
                    alpha = 1.0;
                    break;
                }
                var rootIterCount = 0;
                for (;;) {
                    var x = 0;
                    if (rootIterCount & 1) {
                        x = x1 + (target - f1) * (x2 - x1) / (fpyrif1);
 Erin Catto http://w}7 Erin Catto http://wwelse {7 Erin Catto http://wwas-ix = 0.5 * Co1 + x2007 Erin Catto http://www.gphysics.com
 *
 * sweepA.GetTransform(b2TimeOfImpact.s_xfA, x007 Erin Catto http://ww the Buthors be held liable for any damBges
 * arising from the usvar f =  liable for any dfcn.Evaluated liable for any damage
 * Permission is gr007 Erin Catto http://wwif (b2Math.Abs(f - target) < 0.02houttolerance) software is provided 'as-isnewAlpha = x07 Erin Catto http://wwd; ybreak07 Erin Catto http://www.gphysics.com
 *
 * * frf >to the fosoftware is provided 'as-is'1 must not be misrepresented; yofoducf07 Erin Catto http://www.gphysics.com
 *
 * This software is provided 'as-is'2duct, an acknowledgment in the purcect documentation would be++rootIterCount07 Erin Catto http://ww++ liable for anyb2_toiR misreps and redistribute it
 * fr* misrepresen == 50 use this software
 * in a pu must not
 * claim that you wrote the originaw.gphysics.com
 * software.
 * 3. ThiMaxs notice ware ly, sMaxd liable for anyeb/
 *
 * It is , * misrepresen007 Erin Catto hw.gphysics.com* frsoftware < (1.0 + 100.0 * Number.MIN_VALUE
 * aware use this software
 u must not
 * claimw.gphysics.comay. h = software07 Erin Catto hiter++07 Erin Catto hal software.
 * 3. Thitice may not be remo* fr(a2jourck_maxsrepationsttp://www.box2dflash.org/docs/2.1a/reference/
 *
 w.gphysics.DFlash 2.1a to JavaScript is a port of Box2DFlash 2.1a to JavaScrip * You (a2j007 Erin Catreturn

var07 Erinw.gphysBox2D.postDefs.push(func     ( use this sof p, cfCollision.DFlash 2.1a to JavaScCall a p007 Erin Catof Function)
                obj.__dt is a pter__(p, cfg.get);
            if(cfg.set instanype.__definter__(p, cfg.get);
            if(cfg.set instan * It is a pction)
                obj.__defineSetter__(p, cfg.  a2j.inherit = function(cls, base) {
        var tmpCs_cache Box2D b2SimplexC.pro(007 Erin Catype = base.prototype;
        cldisttionInputtotype = D    };

  
        cls.prototype.constructor = tmpCtr;xfAtotype = rs be held= function generateCallback(context, cb) {
   B    return function () {
            cb.apply(context, argumentfcntotype = nepa
     F   if(c
        cls.prototype.constructor = tmpCtr;
    };Out
    a2j.generateCalgth ||n () {
 }007 Erinb2TOI

      i)
   ed a   if(cfg.get instancethis.proxy     returerateCalP    n () {
     tmp;
    ;
       a2j.is = function is(o1, o2) { the atotype = nthe turn false;
        if;
       anceof Functio}length; +WorldManifold.  if ((o1.constp[i] = 0;
        return tmp;m_normaltotype = Vec2urn true;
        if ((o1.constrprototypeructor.__implements != undefined) && (o1.construcpoint a pype Vector(    ttings Javmaxo1.constP  ret007 Erin Catfor ( sofierit  i <     Int(v));
    }

})(Box2D; i++ use this softwar
        ret[i]implements[o2])) returnction(obj,w.gphys
        return false;
  Initializotot] = 0;
  m1.const, amageradiusagesgranllisioB use this soflterelision === undefined)ollisionerit = functionllision = B};
if (typeof(Box2D.C;
 sion.Shapes) ===typeof(B      reany sourc distribution.
 *neProp07 Erin Catw.gphysics.ove assigntypeof(Box2D.CtVec.Math) === "undeManted as bein softor.__XShapes = {};
iif (typeofYBox2D.Dynamics) ===plane(Box2(Box2D.Dynamics) ===cs = {};
fined") Box2D.Dynamiclip{};
if (typeof(Box2D.Dyn") Box2D.fined") Box2D.Dyswitch(typeof(Box2D;
  use this softwarcaseport .constre_circles:7 Erin Catto hsoftware is provideon.M musfA.R07 Erin Catto http:efin = ypeof(Box2Dlocal(Box207 Erin Catto http:.Dyna  reA(Box= "uposi    .x +ints).col1.x resVecn.IBroadPhase2= 'Box2D.Cyfinitions
(function () {
  finex2D.CollisionyIBroadPhase =y'Box2D.Collision.IBroa argument

    function b2AAnts) === Bundefined") Box2D.Dynamics.Joints = {};Number 0]{};
//pre-definitions
(function () {
 B  Box2B.Collision.IBroadPhase = 'Box2D.Collision.IBroadPhase';

    function b2AABB() {
 B      lision.b2BoBB.apply(this, arguments);
    };
    Box2D.Collision.b2AABB = b sofd(Box   Box2D-) {
   === b2BoundValues) this.fines.b2Bouns.apply(Y=== b2BoundValues) this.urcedX *ues;+};
* dn.b2BoundValues = b2* frd2 > organized the sa * organized the samesoftware is provided 'athis. = ly, ssqrt(dpress or implied
 * warronstructor.__.', wdX / dllision = b2Collision;

    functioy b2CYntactID() {
        b2w.gphysics.com
 *This software is provided 'a

    function b21tID() {
        b2ContactID.b2ContactID.n.Math) === ents);
        if (this.cos = {   Bo {
    +Box2D.Col*this.b2ContactID=== b2BoundValues) thisc      {
    tactPoint() {
        b2C

    function b2AABB()cx2D.CundValues.lision.S) {
        b2ContactPoint.b2ContactPoinoundV  Box2D.CoctPoint;

    functionCollision.b2AABB = b2r_a2j_Number 0]on b2ithout func+ctPo007 Erin Catto http:Box2D.Collision.b2D.Coance = bs, acBYdocumentation for Box2dFlash, sash.org/docs/2.1a/refereD.Dynamics.ControlfaceA{};
if (typeof(Box2D.Dynamics.Joints) === "undefined") Box2D.Dynamics.Joints = {};
//prs = Nor.__07 Erin Catto http:typeof(BoxoadPhase = 'Box2D.Collision.IBroadPhase';

    function b2AA "undefinepply(this, arguments);
    };
    Box2D.Collision.b2AABB = b2AABB;
"undefined") Box2D.Dynamics.Joints = {};
//pre-definitions
(functiocs = {};
if (x2D.Collision.IBroadPhase = 'Box2D.Collision.IBroadPhase';

    function b2AAamics.Contacts  b2AABB.b2AABB.apply(this, arguments);
    };
    Box2D.Collision.b2AABB = b2
    function b2typeof(e;

    function b2Dista2ContactID. "undef07 Erin Catto http:O remommon.Math) === ollision() {
 <       b2Bound.b2resentor = Array;
var VectAABB = b2AABB;

    function b2Bound(und() {
        b2Bound.b2Boind.apply(this, arguments);
    }  };) Box2D.Dynaollision.b2Bound = b2Bound;

    function b2BoundValues() {
        b2BoundV2DynamicTreeBundValues.apply(this, arguments);
        if (this.constructor === b2BoundValues) Vector_a2j_Number = on b2amicTreeBro+
       ion = {}- (amicTreeBro-tanceProxy =
 * typeof(B b2DynamicTrD.Colmics.ContacTreePair.b2Distance.cTreePair.allision = b2Collision;

       functiotID.(this, arguPair() {
        b2DynamicTreePair.b2DynamicTreePair.apply(this, arguments);
    };
    Box2D.Collision.b2DynamTree = b2DynamicTreew.gphysics.comb, http://code.googlarguments);
    };
    Box2D.Collision.B{};
if (typeof(Box2D.Dynamics.Joints) === 
    function b2Bound() {
        b2BouistanceOutput.b2DistanceOutput.apply(this, arguments);
    };
    Box2D.Collision.b2DistanceOutput = b2DistanceOutput;

    function b2DistanceProxy() {
        b2DistanceProxy.b2DistoldPoint.b2ManifoldPoint.apply(this, arguments Box2D.Collision.b2DistanceProxy = b2Dilision.b2Bound = b2Bound;

    function b2BoundValues() {
        b2BoundVicTree.apply(thiues.apply(this, arguments);
        if (this.constructor === b2BoundValues) cTree.apply(this, (-typeof(ce;

    function b2Dista2ContactID..apply(tnceInput.b2DistanTree;

    function b2DynamicTreeBroadPhase() {
        b2DynamicTreeBroadPhase.b2DynamicTreeBroadP"undefined") Box2D.Dynents);
    };
    Box2D.Collision.b2DynamicTreeBroadPhase = b2DynamicTreeBroadPhD.Collision.IBroadPhase = 'Box2D.Collision.IBroadPhase';

    function b2AAicTreeNode.apply(thb2AABB.b2AABB.apply(this, arguments);
    };
    Box2D.Collision.b2AABB = beNode;

    function b2DynamicTreePair() {
     B  b2DynamicTreePair.b2DynamicTreePair.apply(this, arguments);
    };
    Box2D.CollisAon.b2DynamicTreePair = b2DynamicTreePair;

    function b2Manifold() {
       
    };
    Box2D.Collision.b2SeparationFunction = b2SeparationFunction;

    function b2Simple2Manifold.apply(this, arguments);
    };
    Box2D.Collision.b2Manifstructure
if ClipVertex.b2SimplexCD = {};
if (      return tmp;vBox2D.NVector;
//package cTreei2D.Cype = ContactIDurn true;
      b2SimplexCafalse;
  Semp[i] = 0;
  otherts);
    };
    B    Vrtex.b.v.b2SimplexCache = b    s, arguidrn true;7 ErinFeatures.rtex = bthis, arguments)
      Object.(typeoProperty(rtex = b2false;
 , 'referenceEdge',arguments);enumerable: false,7 Erin Catconfigunts);
tru};
    Box2get:i] = 0;
        return definePropecTree_2TimeOfImpact
        b2Simplex007 Erin2TimeOfImpact() {
        b2TimeOfImpact.b2TimeOfImpact.apply(this, arguments);
    };
    Box2D.Collision.b2TimeOfImpact = s2TimeOfImpact; inc "undefined") Box2* frifold};
if (typeof(Bs);
  Collision.b2Contaput() {
        b2 =s.constor === b2WorldManifom_id._ke.Coll arguments);
  & 0xfon.b200) | };
   ld) this.b2Worlisi0

 ff007 Erin CatTOIInput.apply(this, arguments);
    };
    Box2D.Collisiincidentpact.apply(this, arguments);
    };
    Box2D.Collision.b2TimeOfImpact = b2TimeOfImpact;

    function b2TOIInput() ments);
   unction ClipVertex() {
        ClipVertex.ClipVertex.apply(this, arguments);
    };
    Box2D.Collision.ClipVertex = ClipVertex;

    function Featufold.b2WorldManifold.apply(this, arguments);
        if (this.constructor === b2WorldManifoments);
   rldManifold.apply(this, arguments);
    };
    Box2D.Collision.b    fdMan};
   ;
    Box2D.<< 8)fold;

2Worlunction ClipVertex() {
        ClipVertex.ClipVertex.apply(this, arguments);mplexC };
    Box2D.Collision.ClipVertex = ClipVertex;

    function Features() {
        Features.Features.apply(this, argumemplexCChainDef.apply(this, arguments);
        if (this.constructor === b2EdgeChainDef) this.b2EdgeChainDef.apply(this, arguments);
    };
    Box2D.Collision   if (this.constructor === b2CircleShape) this.b2CircleShape.apply(this, arguments);
    };
    Bapply(thiManifold.apply(this, arguments);
    };
    Box2D.Collision.b2EdgeChainDef() {
     apply(t<< 16ChainDefx2D.dgeChainDef.apply(this, arguments);
        if (this.constructor === b2Eflip.apply(this, arguments);
    };
    Box2D.Collision.b2TimeOfImpact = b2TimeOfImpact;

    function b2TOIInput() (thinction b2PolygonShape() {
        b2PolygonShape.b2PolygonShape.apply(this, arguments);
        if (this.constructor === b2PolygonShape) this.bfold.b2WorldManifold.apply(this, arguments);
        if (this.constructor === b2WorldManifo(thi b2MassData.b2MassData.apply(this, arguments);
    };
    BoD.ColldgeChainDef() lisio<< 24ChainD
    fdgeChainDef.apply(this, ar})n ()      if(cfg.get inst sofxCaclor =s.prototymm
    
   ;
    Box2b2intern__imp  if (this.consr) this.or === b2Colorom globb2Color.apply(thisrom globor === b2ColoCers =ShapD.Coof Function)
   b2Se));nction b2Seor === b2ColopactChainDetwarngs() {
        b2Settin, arguments)gs.apply(this, ar b2Settings() {
        b2Settin

    fuor === b2ColoMassDatr Bongs() {
        b2Settinthis, aror === b2ColoPolygon b2Settings() {
        b2Settin22) this.b2Mnts);
    };b2Settings() {
        b2Settint22.b2Mat22.apply(tht2urce  if (this.coly, s() {
 ion b2Mat33() {33       b2Mat33.b2Mat33.app33ion b2Mat33() {h       b2Mat33.b2Mat33.apphnts);
    };the        b2Mat33.b2Mat33. };
or === b2Colors be hel       b2Mat33.b2Mat33.rs be helor === b2Colos[o2       b2Mat33.b2Mat33.s[o2h.b2Math.apply(t;
        if (this.consn.Maor === b2ColoBodtID. p, cfDynamic));eep(function b2Sweep(ts);
    };    b2Sweep.b2Ss = b2Settings;ache;
Filceof {
        b2Sweepb2Sweep = b2S.Common.Math.b2SweepImpuhis eep;

    function b2Trasform.b.Common.Math.b2SweepListen2Sweep;

    function b2Traonstruct.Common.Math.b2SweepManag2Sweep;

    function b2Trants);
or === b2ColoDebugDraw2Transform.apply(thiransform;ansform = b2Trastru if(constructor === b2Transform) 2.b2Vec2.apply(thisor === b2Colo = b2S, arguments);    b2Sweepc2) this.bctor === b2Vec2xx = 2Vec2.apply(this, argux2D.C
    };
    Box2D.Carguments);
    };
  ion b2Vec3or === b2ColoIslan2D.Cc2.apply(this, aruments3 = b2Mat33;
imeSt
    Box2D    b2SweepVec3) thor === b2Coloif (();
        if (thisif ((or === b2ColoAAB;
 of Function)
    
   function b2Sweeuts);
     ction)
    2Body     b2Body.b2BodyVfoldox2D.Common., arguments);
onstru.Common.Math.b2ion)
  function b2Body() {ments);
() {
        b2TransD    };
    Box2D.Dynamhe;

.Common.Math.b2Sweep arguunction b2BodyDef() {
      arguansform = b2Tr    }; function b2Body() {tor === this.constructor === 

    aodyDef) this.b2BodyDef.app

  this.constructor === gth || 0)odyDef) this.b2BodyDef.appgth ||this.constructor ===  func b2ContactFilter() {
        funcansform = b2Tr   b2STre b2BodyDef) this.b2Bodymics.b2Con    Box2D.Dynamics.b2ConBroadPh.DynactFilter = b2ContactFilter;
mpulse() {    Box2D.Dynamics.b2ConNod{
        b2ContactImpulse.b2Con;
     Box2D.Dynamics.b2ConPai      if (th= b2ContactFilter;
e;
2Mat22.apply(thmplementsply(this, argumentontactLi
        b2ContactLi.apply(this, arguments);
ents);
    }tor === b2Mat22pply(this, arguments);
ctListener = b2ConRayCast
    };
    Box2D.Dynamicer() {
    2ContactManager() {nction b2ContactFilter() {is, argumentsnts);
    };
gmeply(this, arguments);
anager)nts);
    };
if (length === u this.b2ContactManager.if (length === unts);
    };ew emp this.b2ContactManagerew empntactManager;

   tyFn; function b2DebugDraw() {
 tyFn;ntactManager;

   apply(thinction b2DebugDraw() {
 mplexCructor === b2Vec3e for an === b2DebugDraw) thiiable for an3 = b2Mat33;
     tmp[iof Function)
     i)
   nts);
    };
   ontactListener.b2ContactListeif ((o1.const;
    Box2che.apply(thiply(this, argumeb2SimplexC;
    Box2SimplexVertply(this, argumertex = b;
    Box2Impulse() {
        b2Contact
    funct;
n(obj, p, cfinherit(ings.b2Settingb2Mat22 = b2Mat22;

    funct length; +nction b2Sex() {
    __sup2Sweep;

 = b2Mat22;

    functimeOfImpacDynamics.b2FilterDatafunction b2Setti    if(cfg.get instanceof Function)
  ixture() {
   ) {
   apply};
 , arguger)D);

//#TODBox2D.Coimplements[o2])) return true;
 b2FilterData = b2FilteCopr.ap] = 0;
        return  softurn Mature;

    fn () {
     s Box2cTre Object.definePrope may notre
if (tb2FilterData = b2Filte    b2SimplexVertex.b2SimplexVertex.apprData;Def..cally(this,tex.b2ion.Shapes) ===ata.b2Fsrtex.bationction b2Se) arguments);
    softex.bhis,rtex.b in   };of function b2Set?Island : null007 Erin Catto hBox2D.Coy(this, arg2ir;
//package structure
if (tb2FilterData = b2FilteTesf.apply(t] = 0;
  t   b2Math p      b2FixtureDents) == functionundefined") Bthis.b2BoTimeStep.bCollision.IBr(oadPhase = 'Box) this.bollision.IBroadPhas) this.by = b2Fixture   };
   arguments);
    }BB.a   Box2D.Dy argus.b2TimeStep = b2TimeS arguments);unction b2Wor.b2Bou.x - dicTreePair =;
   .yb2WoTree = b2DynnePrope(es;

    functi) <=guments)ion = ;

    fion = ctor === b2FixtureDef) this.b2FixtureDer() { b2SimplexVerttor == iction        b2TimeStep() {
        b2TimeStep.b2TimeStep.apply(Collisiohis, arguments);
    };
    Box2D.Dynamics.b2TimeStep = b2TimeStep;

    function b2World()Collisio{
        b2World.b2World.apply(this, arguments);
        if (this.constructor === b2WorlreDef(Boxs, ar.p = 's.ap= b2Cir.Math) === "undsfinemics.Contumen
       .Math) === "undbapplss;
seePasfuncsY)t to2World;

    function b2CircleCon   Box2DrDynamics.CooadP-amics.Contais, arguments);
    funct(thiis.construc

    functntact      b2CrntactConsrnceInput.b2Dits);Swee(r argumentr);
    };
    Box2D.sigmr Boc * c2Disr * bion.Shapes) === b2Conllowi ||rain<ision.apply(this, arguments);
   nePrope    } = {};
if (typeof(Box2D.Cr Bo(-(c +Collision.b b2Co)) = b2FixtureDef;ctCo<= a && acs.Cmics.CmaxFra if(cf* rb2SimplexVerte*/
 /= rr07 Erin Catto hpply(t.fstraintP= };

(function ction bfunction b2ontacaargum() {
        b2ContactEdge.br.apsfolddge.aTree = b2Dynamic2ContactEdge.bput.b2iz(this, argumenion b2TOIInprifold.apply(tw.gphysics.raintPoint.b2Contac   };
    Box2D.Dynamics.b2IslCompute
    fu] = 0;
  aabbguments);
    };
    Box2D.Dynamics.Contacts.b2CircleContactrcleContact;

    function b2Contact() {
        b2Contact.b2Contact.apply(this, arguments);{
        b2World.b2World.apply(this, arguments);
        if (this.constructor === b2Worl(thi.lower2Body Box2pappl.b2ContactCon,

     Box2D.Dynamr.apply(this, arguppnts);
    };
+   Box2D.Dynamics.C    function b2ion.b2SimplexVetactFactory.apply(this, argumenthisD = {};
if (tynstruct densityed") Box2D.Collis   Box2};
if (typeof(Bts.b2ContCollision.b2C
    };.
    b2Cs.b2Con* };
    Bo Javpi   function b2Cistraint.apply(this, argumenfunction ce) thy(thisuments); = b2Fixturefunction Is.Joinction b2Con*ynamg res2World;

    function b2Cild.aps.b2TimeStrguments);
    onstructois.constructor       b2ContactResult.b2ContactResult.apply(tSubmergedArer Bo] = 0;
  tor.__, offset) ==, ced") Box2D.CollisrcleCo};
if (typeof(Btact.app(typeof(Box2D.Dynaa port of BulX(act.(this.constructor == sof_imp(-reely, sDotEdgeAndCipaintrcleCo};
    Box2D.Dynlever-Result() {
   +tPoint() {
        b2ContactConstraintPon.Math) === w.gphysics.act() >tResult() {
  undefined") Box2Dy(thisonstructor ==        b2Cly, sPIntactSolver.b2ContactSolver.apply(this, arg(typeof(Box2D.Cd.app.b2ContactConstraint.apply(this, arguments);lhis,l * 2DistanceOutt.app) {
 r2Contly, sasin(l /r === b2NullCont argumePI / 2 arg   bollision.brpyrilpress or implntactounct(-2 / 3
    BopowDynamics, 1.5t (cntac = b2Fixture.Colthis.b+eePair.Box2Dcom    function tRes2CondEdgeContonta) {
        bneProperre= function(obj,    Box2D.Dynamics.b2IslGetL
//prellisioreDef() {
        b2Fixtub2TOIInput()m_   Box2D= b2FixtureDef) this.b2FixtureDef.ics.Contacts.b2PolyAndEdge.b2Contafunction(v) {
      Contact2Polygonhis, arguments);
    };
    Box2D.DynamRs);
 2PolyAndEdgeContact = b2PolyAndEdgeContn b2CircleContact() {
        b2CircleContaSygonContact = b2PolygNullContact) this.bllision = };
if (typeof(Box2D.C
    };
    Bver.apply(this=istancect;

    function b2PolygonContact()(this, arguments);
      ositionSolverManifold.apply(this, arguments);
        if (this.constru Box2D.D) {
   ics.b2Fixs);
    };
    Bo;
 ware {
   ollers =n.Matif (this.constructor === b2PositionSolverManifold, arguments)on.b2Settings =ertex;

    function bapply(this, argfalse;
    , arguments);
s, arguments);
    };
    BplexCany sou  if (this.construisALoo.Dynb2ContactFactornction b2icructo[] function(obj, p, cfFilterDatab2Mat22.b2 arguments);
    };
    Box2D.Dynamics.

    fua = b2FilterData;

    function b2Fixture() {
        b2Fixture.b2Fs.b2ConstanstantForcents);
        if (this.constructor === b2Fixture) this.b2Fixture.apply(this, arguments);
    };
    sDataporamics.JD.Collision.b2SimplexCache =m_voducntrollers.b2ConstantForceControhis,ntrollers.b2ConstantForceContrcoreVller = b2ConstantForceController;     
    function b2Controller() {
 tor.__implements[o2])) returs.constructdirentactEdgController.b2Controller.apply(thinerDir  b2Controller.b2Controller.apply(thi
    
    function b2Contronamics.ControlD.Dynamics.b2Island = b2Island;

    function b2TimeStep() {    b2ContactFactory.b2Contaox2D.Dynamics.Controct.b2CircleContact.apply(this, arguments);
    };
    Box2D.Dynis, arguments);
        if (this.constructor === b2ContactConstraint) this.b2ContactConstraint.a     b2TimeStep.b2TimeStep.apply(v1his, arguments);
    };
    Box2D.Dynamics.b2Tiv = 'ep = b2TimeStep;

   v1function b2World()v1{
        b2World.b2World.apply(this, arguments)ller.apply(this, roller = b2Tenunction b2World()ircleContact;

    funnsorDampingController = b2ToadPrDampingController;

 2.yaintv1onstraint() {
    if(-  functionpingController.b2TensorDampingControlnt.apply(this, aint.apply(this      iX};
    Box2D sofk_sl      is
 * organized the sa.Math) === "unddenndCirclics.Contacts.b2CnY};
    Box2D.Dyn2Dista>istance
        b2Island.b2IbDynamics.Contactsv1pply(this, argumhis, 
    function b2 if (this.consPoint.apply(tbntDef() {b
      efineProperty instaamics.Contacts.b2ContactConstraintPoi2Dist arguments);
    }; sofmu.appl-cs.CobY args.b2CbicTreePair = b2Dynam* fr(-stanceJnceJointD<=f;
&&f;
<tactSomContythingistance arguments);
    };
   raint(this07 Erin Catto http://wwction b2ContactEdge() {
        bynamics) === Le.b2Pollision.bnntDef() {n(this, arguments);
         b2ContactEdge.b2Connonta  BoictionJoint) this.b2FrictionJollision.b2DypplytionJointDef() {
        bnction b2ContactFactorply(this, arguments);
    };
   y() {
        b2ContactFactory.b2Contaox2D.Dynamics.Controarguments);
        if (this.constructor === b2ContactFactory) this.b2ContactFactory.app    b2TensorDampingController.b2TensorDampingController.apply(this, arguments);
    };
    Box2D.Dynamics.Controllers.b2TensorDampingController = b2TensorDampingController;

    function b2Distav2  b2TensorDampingController.b2TensorDampingControlis, arguments);
    };
    Boxnamics.Joints.b2Gnamics.Controllers.b2TensorDampingController = b2Tnt.apply(this, arguments);
    ion.Shapes) ===    <b2Gentact) this.b2Nul, arguments);
   b2M   if (this.const b2ContactRegist  b2M2pply(this, aw.gphysics.This software is pro;
    Box2D.Dynamicsf;

    funrJointDef = b2GearJointDe   if (this.cf (this.construDynais, Yrguments);
    };
    Box2D.DyntResointDef) this.b2Di b2ContactRegist) {
2onstraint() ction b2Jacobian() {
        b2Jacobian.b2Jacos, arguments);
  nt.b2Joint.apply(this, arif (this.consstructure
if (tthis, arguments);
    };
his, arguments);
    };
    Box2D.Dynamics.Contacts.b2ContactResult = b2ContactResult;

    function b2Contault;

    function 
        if (this.cv2007 Erin Cat= b2ContactSon.Math) s.b2Joint = b2Joint;

    functionleContact() {
        b2EdgeAndCircleContact.b2EdgeAndCircleContact.apply(this, arguments);
    };
    Box2Dv0

    functiodgeContact(rcleContContact.b2Pfunctio

    function bDynamics.Contacts.b2EdgeAnts);
    };
ts.b2G     b2LineJoint.b2LineJoins.Contacts.b2Polyd      b2LineContact;
v1    functitructor === b2Liments);
  is.b2LineJoin2.apply(this, argumentJoint1 >"undefined") Box2D.
         distribution.
 *
 *uments);
        i);
    };
    BoxThis software is provideller.
   deCon2Lin- d2
 * ller argd1constructor === 2ContactPoint.b2Contaction (this.constructor === b2yineJointDef) this.b2Line

    function b2FrictionJointDef) thThis software is proion b2LineJointDef() {
       tor =(this.constructor === b2LineJointDef) this.b2LineJointDef.apply(this, ntroments);
    };
    Box2D.Dynamics.Joints.b2LineJointDef = b2LineJointDef;function bb2FrictionJointDef) thn b2Po(v0t.appller.apineJt (c3
        b2PolyAnctiEdge argueJoinyDef() {
       uments);thout (ller.- ctio
 * Cnt) t          ;
 constructo(this.       if   };
    Box2D.ox2D.Dynamics.Contronamieng thisolyAndEdgeContact = b2PolyAndEdgeContl };
useJointDef.apply(this, arguments);
  mplexCroduclyAndEdgeContact = b2PolyAndEdgeContvply(thisintDef;

    function b2PrismaticJoiked a{
        b2PrismaticJoint.b2Prismat2cJoint.apply(this, arguments);
       C    icJoint() {
        b2PrismaticJoint.b2Prisma      b2PrismaticJoint.apply(this, arguments);
    };his.constructor === b2PrismaticJoint) thithis, cJoint.apply(this, arguments);
       put.b2h.abs(    Box2D.Dynamics.Joints.b2MouseJointDetor.__cJoint.apply(this, arguments);
       Droller; (this.constructor === b2PrismaticJointDef) thtroller;b2PrismaticJoint.apply(this, arguments);
ner1 (this.constructor === b2PrismaticJointDef) th) {
     smaticJointDef;

    function b2PulleyJoint
   
        b2PulleyJoint.b2PulleyJoint.apply(this, aricJointDef.apply(this, arguments);
 yJoint(IsConvy(this, arguments);
    };leyJoint.apply(this,nt = bguments);
        if (this.construct=== b2Point = b2PulleyJoint;

    function b2PulleyJointDef() {
icJointDef.apply(this, arguments);
    Firs        b2constructoxfTimeStep() {
        b2xfundefined") BnePropelements[o2]xfs);
    };
    Box2D.Dynamics.b2Ti      er.apply(this, arguments);nt() {y)) ==        b2DistanceJoint.b2DistanceJont() {
        b2Rev;
        if (thi= b2ContactSolver;this, arguments);
     exBox2D.Constructor === b2PrismaticJointDef) thits);
 cJoint.apply(this, arguments);
       Prev;
    };
    Box2D.Dynamics.Joints.b2RevolpvoluteJcJoint.apply(this, arguments);
    S.Dynamuments);
    }, dX,WorldDynamics.ContactXntactResult = b2C(Box2D.Dynamics)JointYntactResult = b2Cfined") Box2D.Dynamimics.Joints.b2PulleyJotion b2GeaointDef;

    function b2RevoluteJoint() {
        b2RevoluteJoint.b2Revolut };
    Box2D.Dynamioint.apply(this, arguments);
        if (this.constructor === b2RevoluteJoint)namics.Joints.b2GearJointDef;

    function b2RevoluteJoint() is, arguments);
    };
  Joint =ef.b2GearJointDef.applyoint.apply(this, arguments);
        if (tnt.apply(this, arguments);tion b2WeldJointDef(  b2F    

   Dyna2World>thisJointDef) 2his.b2W Array;
var Vector_a2x2D.Dynamicsnamics.Joints.b2GearJoi};
    Box2D.Dyna
    Box2D.Dynamics.Jointfunction b2MouseJoint() };
    Box2D.Dynamics.apply(this, argumtDef = b2WeldJointDef;guments);
        if (tb2TOIInput()x2D.DynamicscJoint.apply(this, arguments);
    ontroller() {
        bv1amics.s);
    };
    Box2D.DionSolverManifold;

    function b2BuoyancyControllex2D.Dyna);
    };
    BoxvoluteJoinstru  };
    Box2D.Dynts);
    lision.Shapes.b2Polygo     ticJoint.ontroller;

  s.b2Prismler = b2Controller;s);
    ructor =    Box2Dllerf (this.con b2Moments);
    };
    BoJointDef = b2t;

    .Common.b2= b2ContactEdge;

  cTree.apply(thColor,
   .Common.b2y,
        .Common.b22MouseJoinller() {
       h.b2M(- {
        b2toiSionJoi };
   dgeContac2internalD.Common.MathactResult(l = Boox2D.Common.Math.b2Math,
        b2Sweep.b2internal        b2M2Sweep,
              b2Settings =(this,  = Box2D.Common.Math.b2Math,
        b2Sweep =ontacts.bmmon.Math.b2Sweep,
    2   b2Transform = Box2D.Common.Math.b2Transform,x2D.Collision.b2AABBox2D.Common.Mb2WeldJointDef(erEdge() {
        Def) this.b2PrismatiControllerEdge.apply(= Box2DcTree.apply(thi)at33 = Box2ransformMouseJointDef.apply(this, arguments);S2RevoluteJointDef() {
a,
,     tance
    tanc = bfunction(v) {
      voluteJoina,
2Controller() {
        b2    es,
        b2Collision = Box2Box2D.Coles,
        b2Collision() {
 ut =  = b b2ContactPoint = Box2D.Collision.b2Connts);
    };
    Bo2Distance = Box2D.Collision.b2Distance,
        nShape,
  nput = Box2D.Collision.b2DimentceInput,
        b2DistanceOutlision.ox2D.Collision.b2DistanceOutput,
  lisionb2DistanceProxy = Bothis, aris.construcnts != undefined) && (o1.constru2JointD. if (this.constru
     

    functio0, geChainDef.aptacts.Dyna       b2
      ller.apply(this,
    };
    arguments);
    };
    Box2D.Dynamics.22) this.b2Ma = b2FilterData;

    function b2Fixture() {
        b2Fixture.b2F
        b2Rat22) this.b2Mat2);
        if (this.constructor === b2Fixture) this.b2Fixture.apply(this, arguments);
   
        
        b2RayCastInpuixtureDef() {
        b2FixtureDef.b2Fixtur22) this.b2Mthis, arguments);
        if (this.constructor === b2Fixtu
        b2RayCastInpuef.apply(this, arguments);
    };
    Box2D.Dynamics.b2FixtureDef = b2FixtureDef;

    function b22) this.b2M
        b2Island.b2Island.apply(this, arguments);22) this.b2Ma (this.constructor === b2Island) this
   ro   Boxland.apply(ex = Boxctor === b2Island) thisn b2ConstantAcnd.apply(n b2Constan2CircleShape = Box2DReserve argument b2Constan arguments);
  O remove assignmentsres = Box2D.CollisnamicTreeBroadPhase.b2Dynares = Box2Dr.b2ctioD.Collision.Cls.upperBounis, arguments);
    };
    Box2Bound = new b2Vec2(id = functdocumentation for Box2dFlasstructure
if (t b2SimplexVertex = Box2D.CAsArraureDef() {
  s.upperB, dPhase;

 = b2RevoluteJoinn b2ConstantA      if (this. b2ConstantAccelControlleics.Jurn Math.abs(p(this, argumentsassig;
    Box2.Dynamic;

//#TODO rem    function b2DynamiadPhs.upperB.f = b2M ++i Array;
var Vectomics.Js.upperBoun if (this.constr      n neeChainDef.apply(thi        tperBoh.abs(pv
        var xCache,
        b2SimplexVerBound.y - this.lowerBound.y;
        var valid = dX >= 0.0 && dY >= 0.0;
        valid = valid && this.lowerBoundp2) this.b2Mat2b2Simplex,
        b2SimplexCaBound.y - thpperBound.yrBound.y;
        var .b2PulleyJointDef Bound.y - thxCache,
        b2SimplexVertex = Box2D.Cy + this - this.lowerBound.y;
        var valid = dX >= 0.0 && dY >= 0.0;
        valid = valid && this.lowerB= 0.0 && dY >= 0.0neJolid = valid &&Center = functiots);
    };
    Bo {
ssert(applydPhase;

    b2AABB.bres = Box2D.Collision,
        IBroadPhaseox2D.CollisiodPhase;

    b2AABB.b2D.Common.Math) ===    }
    b2AABB.prototype.Get       this.lowerBound = new b2Vec2();
    this.upperBound = ne);
    };
    b2AABB.w.gphysics.       var tmin = (-Number.MAX_VALUE);
        va () {
        returnd.Is    parseInt(i arguments);
  nd.Ismenty - input.ing MAX_VALUE);
         ? s(dX);:nifold,
        var aa,
a port of SubtstraV, argument.upperBou2]b2LineJoin.upperBou1 = this.upperBounlt = result && aabb.a,
.  };
Squared(Weldorganized the samtor === b2Island) thisid = function ()ort of CrossVFynamicT1.0};
    Box2Dotype.IsValid = functi= b2ContactEdge;

  w.gphysics.lipVertex = Boxware 
        b2RargumenCx = Box      var inv_d 
        varse;

    b2AA   }
    b2AABB.prototyulleyJoint) this.b2nction () {
        return new b2Vec2((this.upperBound.x - this.lowerBound.x) / 2, (this.upperBound.y - this.lowerBound.y) / 2);
    }
    b2AABB.prototype.+ this.us = function (aabb) {
        var result = true;
        result = result && this.lowerBound.xBo(this, argumenhx, h2D.Dynamics.Contachx0.0;
        va s;apes = {};
if (thontactResult = b2
     if (this.constructlid = valid &&4    }
    b2AABB.protot4this.upperBound.y;
   perBo0nd = ((-hn.b2Coh    b2ContMAX_VALUE;
        1 if (t    max) return false;
            }2
        }hlues,
        b2Col var t1 =3 if (tmin > t) {
                id = fun  if (t0.0 } { this.lowerBounde.IsValid = fun
     1 fal0.ifold,
        b2und.y < pYr.MIN_Vn fal thi          }
            ethis.lowe thi             inv_d = 1.0ex = Box2D.CZerots);
      }
    b2AABB.prototytmin) {
                    normal.x = s;
                    normal.y = 0;
                    tmin = t1;
  pperBound.y - this.lowerBound.y) / 2);
    }
    b2AABB.prototype.BoxVALUE) {
         ar result = true;
        result = result && this.lowerBound.xOri    dtmin) {
             , 
     , angl "undefined") .x = s;
                    normal.y = 0;
                    tmin = t1;
  * fr= Box2D.
if (typeof(B= Box2D.Coision.Shapes.b* fr  tmiax) return false
      
        b2Manifold          }
                tmax = Math.min(tmax, t2);
                if (tmin > tmax) return false;
            }
        } {
            if (absDY < Number.MIN_VALUE) {
                if (pY < this.lowerBound.y || this.upperBound.y < pY) return false;
            }
            else {
                inv_d = 1.0 / dY;
                t1 = (this.lowerBound.y - pY) * inv_d;
                t2 = (this.uppeisio     .Math) === "undx }; return function () {
     oint.apply(urn true;
    }
  ints= Box  tmin;

//#TODO remove assignmentsut.p2.x - input.p1.x;
        var dY =     this.upperBoun     b2LineJoint.b2LineJoin;
    };
    b2AABB.prote.IsValid = functDynamics.ContMVJoinR.b2EdgeAn   var dX = this.upperlowerBound.x;
        var dY         normal.x = 0;
                    tmin = t1;
                }
                tmax = Math.min(tmax, t2);
                if (tmin > tmax) return false;
            }
        }
        output.fraction = tmin;
        rpperBound.y - this.lowerBound.y) / 2);
    }
    b2AABB.prototype.       norm                   tmin        if (t1 > tmin) {
                    normal.y = s;
             ;
    };
    Bo.Collision.Shapes.b2Edge         }
        b2Color = BoxCollisiopress or impl
                if (V(ts);
    };
;
            }
    V(onstructor ===t2 = (this.upper', without 2MouseJointDngCount = this.stabbingCoun {
       ef.b2MouseJo || this.upperBound.y < pY) a port of       ifutput.normal;
   v2oint.      t1 = (this.lowerBound.y - 0d.x < pX) return false;
            elsent.apptempProxy;
      e = b.value;
             else this.tempProxy;
         this.sinv_d;
                & 1) == 1;
    }
    b2Bound.protopperBound.y - this.lowerBound.y) / 2);
    }
    b2AABB.prototype.pact}
    b        if (t1 > tmin) {
                    normal.y = s;
        and = b2Island;

   stru2TimeStep() {
    fined") Box2D.Common.MJoints.b2RevoluteJoint
if (is.b2WointDef;

 .Math) === "undes, argumenoint.apply(th 2, (this.upperBics.C(Box(tJoinoadPhase = '+ b2Cnormal, offsthis, arguments);ics.Cor ==n, normal, ofnt.appl
        ifb2WeldJointDef(ombine(aabb1, aabb2);
        return aabb;
    }
    b2AABmics.J    this.upperBoun  this.lowerBounon.b2 (vOut,-ox2D.Co  this.lowerBoun2Disted) offtance0 

    function  = vIn[1];
  id = funct1.y;
        var ado0;
upper
    
   ointDe* t, arguments);
    };norm>     ointDef() {
        b2Lineint.b2ContactCon2LineJointDef;

    funcnction b2ContactFainv_d;
                     b2GravityController.b2GravityController.apply(this, arguments);ument2Bound = function () ntact
    functConstraint}
    b2Collision.bn.Math) === "unde };
    Box2D.Dynamics..Math) === "undefined") Box2D.     mics.Contactsb2DistanceJoint) thi
          
    function b2int() {
        b2Dfunction b2TensorDampingController() {
    p   b2In, normal, offset) {
        if (offset === undefinynamit = 0;
        var cv;
        var numOut = 0;   tVec.y =     b2i+ interp * (vIn1.y - vIn0.y);
           on.b2inOut[numOut];
            var cv2;
            if (distance0 > GearJIn, normal, offset) {
        if (offset === undefinapplyt = 0;
        var cv;
        var numOut = 0;this.b2Bou2eePai   if (this.c   };
   2D.Colif (this.construcind   fuy - input(-1};
    Box2D
        cv = vIn[0];
        var vIn0 = cv.v;
        cv = vIn[1];
        var vIn1 = cv.v;
       x2D.Colvar count1 = pary);
    ffset;_vertexCount);
;
        var distance1 = normal.x * vIn1.x + gument aabb..y * vIn1.y - offset;
        if (distancon b2DistintVec = normals1[e
   ffset;
 d      if (distance0 <=tMat.col1.x tmin;ut[numOut++].Set(vIn[ince     tVec llowi arguments);
    };
   0]);
        if (distance1this, arguments);
    };
    BoxThis software is provideJointDef..col1.xtactCo&&      tVec <distancnceJoin.col1. arguments);
    };
   istance1t.col2.y */rmal1WorldX  and redistribute it
 *   var ithis, arguments);
        if (this.constru);
        var 0) vOl1Y = (tMat.col2 = vOuormal1WorldX + tMat.col2.y * normal1Wo = vOut[        var index = 0;
        var minDot, arguments);
    };
    Box* fr = vOul2.x * n-ision.apply(this, arguments);
    };0]);
        if (distance1 <= 0.0) vOut[numOut++nstan   va> "undefined") Box2D.ction b2ContactEdgument.y - offset;
      b2TimeStep.b2TimeStep.ap;
        var distance1 =    vnormal.x * vIn1.2ContactEdge.b2Con   Box2D.Dynamic2D.Collision.IBroadPhase';
   if (absDX < N2FrictionJointDef.apply(this, arguments);
    };
    Box2D.C   if (absDX < Nnction b2ContactFactory() {
        b2ContactFactory.b2Contan.b2SeparationFunction,
guments);
        if (this. };
    Box2D.Dynamics.Joints.b2PulleyJo"undefinIn[1];
        var0normal.x * v - distan
    };
    Box2D.Dynamics.Joints.
        tVec = vertices2[index];
      - distan       b2WeldJointDef.b2WeldJointDef2.position.x + (tMat.col1.x * tVec.x + t  cv = vO(Boxrmal1W
            cv = vOfinefunctily1.m_vertices;
       1 vIn[0];
        var vIn0 = cv.v;
        cv = vIn[1];
        var vIn1 = cv.v;
  ics.JWorldY;
        return separation;
    }
    b2Collision.FindMaxSeparatio        vion (edgeIndex, poly1, xf1, poly2, xf2) {
        var count1 = parseInt(poll1WorldY)exCount);GetCX ?.R;
   : vpply(this, argumfunction functio<r dYtVec = Yoly1Tree = b2Dynamic_vertexCo_vertex>    tV_vertexly1.m_centroid;
  rmals1 = rmals1 >ositiormals1 tMat.col1.x * tw.gphysics.;
    Box2D.Dynamicat = xf    Box2D.Dynam.apply(this, arguments);
   tmn.x + (X * xf1.R.col1.x + dY * xf1.R.c = b2GearJointD_vertex    function b2 xf1.R.col2.x + dY * xf1.R.  tmrmals1        var edge = 0;
      if (distance0 * distance1 unction b2JointDef() {
        b2JointDef.b2JointDef.apply(this, arguments);
        if (this.constru* frtype.Swap = function=
   software is proJointDef.apply(t', without 
                iBox2D.Colli        }
 s
 * arising froJointDef.apply(t {
       
                iundValues =        }
  * tVec.x + tMat.ctor === b2JointD       b2Mani};
    Box2D.Dyna ? edge - 1 : couCommon = {};
if (typeof(Box2D.C true;(Box2nd = function ()  true;finednd = function () ntact.b var nextEdge = pa
        var sPree0 > 0.0)  var nextEdge = pa.id =  var nextEdge = pak_inv;
 ythi/ 3       b2Maniombine(aabb1, aabb2);
        return aabb;
    }
    b2AA1, pol      tVec = poly2.m_centroid;
        p;
 s(dX);
        var absDY = M xf2);
        = Math.abs(dX))] :n = v2X * normal1WorldX + v2Y  var norm   b2 cv2 = rtices2 = poly2.m_  best(poly1
        var tMat;
   normGearJp3tion = sPrev;
        }
  applyp3lse if (sNext > s) {
     funcstSe* best-     atiosPrev;
        }
 tri  tmi() {
 umentsD;ntact+  b2e {
     ments);
    }; xf1, p[0] = edge;
   *1, xf1, * ( 0.0+aratio+  inc   if (absDX < N;
           }
        while (true) .MAX else      * tVec.x + tMat.sPrevb2Pol   if (this.constructtureDf (sNext > s) {
           e   if (this.constructey= b2Co ? bestEdge + 1 : 0;s     
        }
        eey2);
 (sNext > s) {
     intf2);hile (true0.ng re(s = *;s = + xf2)          bestSe    }(pox2D             22Sweeuments     p= normal.x * vIn       stSepstEdge = edge;
   y     y     ybestS edgeIndex[0];
    ;
 0] = b    ret      else {;
 py;IedgeD
        +
     Bound.x) / 2, (this.lowfunction b2ContactSolver()ly(this, art == (-1))X *nextEdgef2) {
        if (edYe1 === undefined) edge1 =JointDef.apply(thisin > tmX        , arguments);= b2ContactSoctSolver()I     for (var i = 0; i < count1; ++i) {
     leContact() {
        b2EdgeAndCircleContact.b2EdgeAndCircleContact.apply(this, arguments);
    };
    Box2Dtor.__LDynamics.ContTnd.x, aabtor.__(this, argumentsrcleCotVectact.ap- };
    Box2D.Dynamoint.apply(structor === b2Liepthturn Math.abs(_a2j_organithis.upperBound.Idivevalid && this.lowerBoundintoI   var vertices1 = poly1.m_verti = noul2.y * tVec.y);
        tMat = xf2.R;lastleContactstOunt.b2ContactCon(output, input) {
        var tmin = (-Number.MAX_VALUE);
        va () {
        returMat.con(aabb1.lowereContact;Lbb1, aabb2) {
         functiL           break;
 sMat.col1.y *
        {
  0; {
            if (absDX < NnstanLineJointDef() {
       nstanr i = 0; i arguments);
    };
   * fr! + tMat.col1. use this software
 * in a pcol2.y * tVei -pply(this, arguments);
  tX;Mat.col1, undefined) {

 * The library is box2dweb, http://code.googThis software is provided 'aact()   if (dot < minDot) {
                m
        var
                index = i;
            }
        }
        var tClip;
        var i1 = parseInw.gphysics.com + tMat.col1.y * * tVec.x +tMat.col2.y * tVec.y);amics.Co         "undefined") Box2D.Dyn0{};
if (typeofparseInt(i1 + 1 < count2 ? i1 + 1 : 0);
     tDef;b2SimplexCthis, arctEdge;

    fuunt = tempStaunction b2J(md, 2007 Erin Catto http://wwlContacamics.Contacts.bmd = Box2is.lowerBound.x | + tMat.col2.x mdePairthis, arguments);
        if (this.constructor === b2ContactID) t b2LineJointDef.b2LineJ);
    };
    Box2D.Collision.b2Manifold = b2M1at.col2.y * tVec.y);
 col2.y * tV
   1       if (this.constructocol2.y * tVetype.Swap = functio                index ar i1 = parseInt(index);
        var i2 = pars
        varerenceEdge = edge1;
        tClip.id.features.incidentEdge e() {
        b2Simple + tMat.col2.y * sDX = Math.ab+ tMat.col2     %ntVertex = 1;
      tMat = xf2.R;
        (2);
        
        v ClipVertex();
        r[1] = new ClipVecol2Lamddply(t0ucto
      ol2.y * ]t (c)yA, xfA, polyB, 2]polyA, xfA, polyB, xf tMat = xf2.R;
   (manifold, polyA, xfA
        xfB) {
     rtex();
 
        m= polyA.m_rolygons = function ics.Controllers.b    this.upperBou polyB, x
   (ruction (manifSweep,
    A;
        var s2eparation (manifbb1, aabb2) {
       var sep;
 ionA = b2Collision.FindMaxSeparation(b2Collisio;
 = b2Collisi tMat = xf2.R;
   lision.s_edgeAO[0] = edgeA;
    = polyA.m_parationA 
        vion.FindMaxSeparatioyB.m_radius2Joint        vbb1, aabb2) {
   2Collision.   edgeA 0] = edgeB;
        var separationB = b2Cuncti] = edgeB;r nextEdge = parseInt(ege, poly2, xf2);
   

    function b2Controll
        var increment = (b2CollisiNext = b2Collisi) {
       assi
        v       resuwhile
   !=ertex();
 int;

    functi          pVertex();
        rc = normals2[i];
   =lip = 0;
    v > sn;
   07 Erin Catto hThis v > s   tVec = poly2.m_centroid;
        lse {
            ed((f (this.c
    if (thge = ne
       ctor =) this.b2lyA;
     polyyB;
            if (absDX < NIndex[0] = edge;
            return s;
         }
        w+ tMa2D.Colli           ief() {
       ifold.m_typy = b2Manifold.e_faceB;
    1 : c- 1 : count;
        }
           var xf2;
  eJoint;

       MultipplyintD;

    function x = 0;
        tClipc[1];
        tVecact.apply(this, arguments);
        b2RayCastInpusmaticJoinstantAcconstructor === b2PrismaticJoint) this  var k_absoluteT          flip = 0;
        }
       r.b2ConentEdge = b2Collision.s_incidentEdge;
  r.b22Collision.FindIncidentEdge(incidentEdge, put.b2tact = b2PolygonContact;

    function id = fu2Collision.FindIncidentEdge(incidentEdge,         if (this.con< minDot) {
 his, e{
   var parationB > tota    onstrion = v2X * normal1Wo.x + t          }
         poly   }        var 
        var tVec;
        var tMat;
        tMat = xf2.R;ics.JparseInt(edge1 + 1)];
tion    }
        else {
   func     local_v12 =arguments);
 >ices1[parsttp://www.box2dflash.o          lX_VALUE;
        foces1[parseInManifold.apply(this,b2FrictionJointDef) this.b2Fr.Normaliz vertices1[edge1];
        var local_v12;
     apply(this, argumen+ 1 < count1) {
            local_v12 = vertices1[parseInt(edge1 + 1)];
        }
        else {
            local_v12 = vertices1[0];
        }
        var localTangent = b2Collision.s_localTangent;
        localTangent.Set(local_v12.x - local_v11.x, local_v12.y - local_v11.y);
        localTangent.Normalize();
        var localNormal = b2Collision.s_localNormal;
        localNormal.x =  xf2);
        .NormaliztantAccelContro   flip = 0;
        }
Validat) {
        b2ConstantForcY = xf2.position.y + (tMat.col1.y * tVec.x + tMat.clision.b2RayCastOutput,
        b2Segmeold = b2PositionSolverManifold;

    function b2BuoyancyControlllt = true;
             }
            entrollers.b2ConstantForceControoly1, xf1,alid() && this.upperBoue.IsValid = fuMat.col2.x * local_v11      if (distance0 * distance1 <ollisif1, edge1, poc (tMat.col1.y * t(tmin >= 0.0;
        vaf1.posi, input) {
      nd.IsValy - input xf2);
        functi)nmentsf1.potor = Array;
var Vector_a2j_otype.Combine ntrollers.b2Controller rBound.x = Math.min(aabb2D.NVector;
//package structure
if (te {
                inv_d = == 1;
    }stanc;
        v12.x = xf1.position.x + (tMat.col1.x * local_v12.pply(thireturn;
        var poly1;rseInt(edge + 1 < count1     var sNext = b2Collision.EdgeSeparation(poly1xf1, nextEdge, poly2, xf2);
        var bestEd1.posit bestSeparation = 0;
       v = 0;
        if (sPrev > s && sPref1.pos?     (-1);
           vevEdge;
            bestSeparation = sPrev;
        }
        else if (sNext > s) {
            increment = 1;
            bestEdge = nextEdge;
            bestS(eparation = sNext;
 t1 - 1;
           lse {
            edgeIndex[0] = edge;
            returnpe = b2Manifold.e_facle (true) {
            if (increment == e {
            poly= 0 ? bestEdge - 1 : count1 - 1;
   eJoint;

    1 === undefined) edge1 =  - l === undefined) edge1 =nePropeCollision.Shapes.e {
               O);
        if ohis.* v11.x) - tangent.y * v11.y + totalRadius;
        var sideOffset2 = ommon.Math) === "undx2D.Dynah.abs(pf1.pos    input) {
        var tmin = (-Number.MAXpPoints2;
        var np =pn(aabb    np = b2Colliw.gphysics.p[1.x) bbinp1WorldX + v2Y * nomin() {
 organizeAXnt;

    functi   }
   ply(this, argumenipplypPoints2;
        var np = 0;* mip.m_l= Math.abs(-               break;
ux         lo-tMat. = normal.x * vInt(cv.istEdg2.x -        

    function al1X  };
   ollision.b.id)*v.id)+.flip    , arguments);
  .id)/=unt;
 nifold.m_pointCouYt = pointCount;
    }
 t(cv.yollis-  manifold.m_pointCs = fu.y + xsPrev;
        }
 at = xf1.l1.x + tY * tMat.col1.y);
ation = function m_pointCount = 0;
        var tMat_vertexCo {
      Y * tMatanifold, circle1, xf1mals1 = tVec = circle1.m_p;
        var pO remove jssignmjx;
        jtDef = b2DistanceJointDef.b2Bou[j              cp.m_id.featu parseInt(polyat.c;
                ++poinuments);
   
     
         tVec.y);
        b2ContactCons(func.m_p;
 yhis.b2WonJoint() {
        b2     at = x) manifold.apply(this, argumnifold.ap1.pon.x + ar p2Y fineynamics.Contacts.tVec.y);
 >
     )
        2.position.y + (tMat.col1.y dX = p2Y - p1X;.col2.y * tVec.y);
 w.gphysics.com.y * v12.y dot;
(dX      var* circlen = tVec.x c = normals2[i];
 ntactllow9hout * tMatut[numOut++].Set(vIn[ * tMat.cof2) {
        .id.featubb.Rhase = 'ircle2, xf2) {
    d.m_type = b2Ma (-NuxTree = b2DynamicTreetype = b2oint.auyicTreePair = b2Dynam_p);
      (-Nuyn.b2BoundValues = b2Boun, xf1, prevEhout at = xf+X = p2X        manifold.m_pointCount n.Edge        ma.MAX     va=== b2BoundValues) thisx + tMatype fold.m_localPlaneNormal dot;
          
    Box2D.Dynamin s;
   ision.IBroadPha     var normals1 =ision.CollidePolygo  tm      ld.apply(this, argold, polygon, xf1, cint;
    old.m_points[0].m_id.typeextment
           ircle1.m_radius ar dY = 0;
        var positio {
       rcle2.m_radius;
        if (did.x - this.lowerBound.x; p, cfg) {
            if(cfg.get instanceof Function)
  guments);
    };
  .s_m.0;

      t22])) return length; +this.b2Fixtur};
    Box2D.Dynamics.ConarationFunction,
        b2Simplex = Box2D.CointDef =ision.Shapinv_d;
 lexVertex = Box2D.Collision.b2SimplexVertex,
        bctor === b2, argun b2PositionSolverManifo 0;
        }
   TBuoyanconstructor === b2PrismaticJoint) thib2Fixture.b
        var cLocalY = (d      this.upperValues[0] = 0.0;
          b2ContactFactory.b2Conta) {
        b2GravityController.b2GravityController.apply(this, argumentr.MAX_VALUE);
        var radius = polygon.ol2.y * tVec.y);
        v2X -= v1rtexCount);
        var verticehis, arguments);
    };
    Box2D.Dynamics.Contacts.b2ContactResult = b2ContactResult;

rtexCount);
        var verticeleContact() {
        b2EdgeAndCircleContact.b2EdgeAndCircleContact.apply(this, arguments);
    };
    Buments);
         var radius and Overla.Dynconstructosb2Se1guments);
1,    re2guments);
rValues = new Vects, ar  a2j.generateCallback = function gmics.Co    };

    a2j.is = function is(o1, o            = Box   ret           }
        }    if (o1 === null) return false;
 = parseInt(
        ventEdge = funmics.C     }++nollin;
       + 1 < vertexCount ? vertI;
            + 1 < vertexCounuseonCoiveTb2ContactFactornt = braw.b2DebugDrype = new emptyFn;
        cls    if (sepa.      var sideOffset2 = pply(t 0);
        for (var i = 0; i nstructor === .tor === apply(thi    if (sepahis, arues[1] = 0.0;
    ction b
    }; < 1 = b2DistanceJoint;

    fu    var radius = polygon.mon.Math.b != undefined) && (o1.construc2BuoyancyControllunknown.s_v12;
        v11.x 
        {
        b2linearMath function(obj, p, cfg) {
            if(cfg.get instanceof Function)
  ixture() {
   ;
           ar vertices1 = poly1.m_verti      return;
        }
       er() {
   erit = function(cls, base) {
        }
       Bound.y - this.);
              return;
        }
       a,
     on (b) {
           return;
        }
          re tManstantAc) {
             return;
        }
       hitction
    ) * (v1.y - v2.y);
        if (u1 <= 0.0) {miss         m var u2 = (cLocalX - v2.x) * (v1.x - v2.x) + startsInside         mvertices1 = poly1.m_v2Color.b2Color.apply(this, arguments);
        if (this.constructor === b2Color) this.b2Color.apply(this, arguments);
    };
    Box2D.Common.b2Color = b2Color;

    fu {
        b2Mat33.b2Mat33.apply(this, arguments);
        if (this.constructor === b2Mat33) this.b2Mat33.apply(this, arguments);
    };
    Box2D.Common.Math.b2Mat33 = b2Mat33;

    function b2Math() {
        b2Math.b2Math.apply(this, arguments);
    };
    Box2D.Common.Math.b2Math = b2Math;

    b2FilterDnstructonstruct   manifold.m_localPoint.y = 0._nce1)SolverManifold = gtionSolverManifold =     ldPoint = Box2D.b2ManifoitionSolverMa
      this, argumr, gg, bb valid = dX >= 0.Dyna
if (typeof(BoalPlaneNormal.x * frggrmal.Normalize()ld.mapes = {};
if (tbbrmal.Normalize()manilaneNormal.x = cLocSweep;

y - iUnput25houtgCount;lamp                this.stabbingCocalX .m_p);
            manifold.m_poin  ma].m_id.key = 0;
        }].m_.m_p);
            manifold.m_poinhis.].m_id.key = 0;
guments);eNormal.y = cLo    b2SimplexVer      manifold.m_localPlaneNormal.Normalize();
            manifold.m_localPoint.SetV(v2);
            manifold.m_points[0].m_localPoint.SetV(circle.m_p);
            manifold.m_points[0].m_id.key = 0;
        }
        else {
            var faceCenterX = 0.5 * (v1.x + v2.x);
            var faceCenterY = 0.5 * (v1.y + v2.y);
            sepa2TimeOfImpact() {
   ration = (cLocalXt.b2b2Shape() {
        b2Shape.b2Shape.apply(this, arguments);
        if (this.construnt = b2ContactConstlaneNormal.Normalize();
            mant.SetV(circle.m_p);
            manifold.m_points[0].m_id.key = 0;
    TOIInput.apply(this, arguments);
    lPlaneNormal.Normaligb2Shape() {
        b2Shape.b2Shape.apply(this, arguments);
        if (this.construggfold.m_points[0].m_lold.m_localPoint.SetV(v2);
                }
        else {
            var faceCenterX = 0.5 * (v1.x + v2..TestOverlap = function (a, b) {
        var t1 = b.lowerbb2Shape() {
        b2Shape.b2Shape.apply(this, arguments);
        if (this.construnifold.m_localP        manifold.m_points[0].m_localPoint.S v2.x);
            var faceCenterY = 0.5 * (v1.y + v2.y);
         - t2.y;
        if (d1X > 0.0 || d1Y > 0.0) return false;
  c
   .apply(this, arguments);
    };
    Box2D.Collision.b2TimeOfImpact = b2TimeOfImpact;

    function b2TOIInnifold =b2MassDaManifold g2EdgeChManifold beChainDef.apply(this, argumelt = result &
    Box2D.x + tMat.col2.y * tVec.om global MixFrintactEdgconstructof1);
  1, ollision       var k_rftwarllision.rmal.Normalize() new b2Vec2apes = {};
if (tCollisionc2();
        Box2D.Col     * dX + tVec.y * dYollision.b new b2Vec*2Collision.int.x = 0.5 * (v1or_a2j_NumberRestitucts.b2PolyAndEdger.b2Collisi1,  new b2Vec2n.s_localTangent = new b2Vec2(rmal.Normalize();llision.s_tanapes = {};
if (t
        Boangent = new b2Vec2();
        Box2D.Collision.b2ec2();
     >ew b2Vec2();
?ion.b2Collisio:;
        Boec2();
        Box2D.Colli& aabb
        if ( valid = dX >= 0.! {
            rethrow "& aabb
   Failed"
        this.lowerBound. p, cfg) {
            if(cfg.get instanceof Functb2Color = b2Col.VERSION = "2.1ay. hec2();
    ff;
    });
    b2ContUSHRT_M   BonDef.b2Efct documentaff;
    });
    b2Cont b2Con       P    var     b2ContactID.prototype.b2Con    }

})(Box2D    if ((cLocalX - v1.xtID.prototype.b2Con(thiEposi);
   0.) * (v1.y - v2.y);
ype.Set = function (id)= xfB;iius) 2       b2Mani_key;
    }
    b2ContactBound.yonContact2
 * alPoint.SetV(circle.m_p);
    n () {
        var id = new b2ircle.m_p).EdgeS05 b2ContactID.prototype.Set = function (nguloperty(b2    / 18s
 * rototype.b2Contafunction () {
        var id = new b2.b2Math,= 8     id.key = this.key;
        return id;
    }
    Object.defimaxTOI
     sPeruments);3  b2ContactID.prototype.Set = function D.protJ  retkey', {
        enumerable: false,
        configuvelocityThreshements1= function () {
        var id = new b2maxLrcle.Coroller;

0.    enumerable: false,
        configurabArable:      this.fethis      configurable: true,
        get: function () {
         D.prs bel     opy = function () {
        var id = new b20ff;
             valocalPoint.SetV(c0ff;
         nfigurable: true0ff;
        is.features._incidentVertex = ((this._keyRot        .m_p);cidentEdge = ((this._key & 0x0000ff00) >> 8) & 0x000000ff      }00) >> 16) & 0x000000ff;
       }
his.features._flip       }function () {
        var id = new b2c
     Baumgar (-taatures._referenceEdge = this._key & 0x000timeToSl;
   0.actID.prototype, 'key', {
        enumircle.m_eepTtriction.EdgeSis.key = id._key;
    }
    b2ContactIrable: fion (output, ca
        configurable: true,
      2Color.b2Color.apply(this, arguments);
    function b2Body() {
        b2Body.bocalY - v1.y;
            manifold.m_localPlaneNormal.Normalize();
            manifold.m_localPoint.SetV(v1);
            manifold.m_points[0].m_localPoint.SetV(circle.m_p);
            manifold.m_points[0].m_id.key = 0;
        }
        else if (u2 <= 0) {
            if ((cLocalX - v2.x) * (cLocalX - v2.x) + (cLocalY - v2.y) * (cLocalY - v2.y) > radius * radius) return;
            manifold.m_pointCount = 1;
            manifold.m_type = b2cY = 33.apply   manifold.m_localPoint.y = 0.ase sition.x + (tMat.col1.x * local    this, arguments);
    };
    Bistancfalse;
     {
    ] = 0;
        return tmp;SetIs);itction is(o
        btancFromAon = tm       if ( tmin = t1;
        
        output.fraction = tmialPoint.x = (tX        var cY = xf2.posits1 = ptABB();
        aabb.C[i2];
  * (vIn1.;
                VV * local_v11.y1, crValues = new Vect   saveB[i] = vertices[i].indexB;
  VV case 1:   }
            switch (simplex.m_count)  (cLocalX - faceCenterX) *+) {
                saveA[i] = vertices[i].indexA;
             tionly, scos);
        aabb.CreDef.b2ollisiin);
        aabb.Cr i = 0;on b2D        b2Settings.oint.appd;

    functionold.m_loc  tMat = xf2          nctioolve2();
                    break               case 1:
           (simplex.mpStacxy = this.proxy;
       dist2Vec2();
                      brixtureDef() {
        b2FixtureDe   saveB[i] = vertices[i].indexB;
  M
        if (this.constrx.Solve2();
                    breakMD = {};
if (t;
        var i = 0;ared()mmplexnceSqr2 = p.LengthSquared()ALUE)
            if (distanceSqr2 > dAddSquared() < Number.MIN_VALUE * Number.e = bALUE) y - vIn0.y);
(simplex.m_rtex.index        var c           rtex.indneJointDef.app
           ative()));             if (distanceSqr2 > d          f distanceSqr1;
        var i = 0;ID.app       b2Manifold =      }        b2Manifold =ld.m_locransformB.R, d));
         B.GetSupposformA, proxyA.GetVertex(vernd.yxA));
            vertex.indexB = proxy   vertex.wB = b2Math.MuMV(transformB.R, d));
            vertex.wB = b2Math.MulX(tfoldPoint =    if (distanceSqr2 > dGet i < saveCount; i+texCount = parseInt(ndCirctan[0] = e      .b2Edgease = 
            if (distanceSqr2 > dGetInver {
 eContact.appl 1 < count1) {
  = BindexB = prnstraint() {
     .R, d.GetNe
                 etSupport(bar normal1Y = (true;
              }
          b2   wd
   nt; b2DistanceJointDt fliVec.y);
        tMacate) xtEdgedhis, argumentw.gphysics.ouPhase = '< cot
         resu_gjkMaxoint.appl b2Maector_a2j_Num_gjkMaxIt this.b b2MarBound.x) / 2tance.b2_tID.a b2Maal.x * cv.v.x + norouSolve2();
                    breol.y * local_v11.oargubX,ction_localTangent = argfold.m_points[0teJointDef.apply(thior =fold.m_points[0fined") Box2D.Dynamia1Box2D.Col         duplicate = a1     var ()));
           var 2t.useRadii) {       }
      a = di  }
            if (duplicate) {1oint    -r rA & ou);
        v
            }++simplex.m_count;
        }
        b2Distance.b2_gjkers = b2Ma(    ictiput.distabold.m_points[_gjk output.po(rB && bn =     icti.SetV(normals[normalIn     }
            var vertex = btact = b2PolygonContact;
etSupport(ubjenceSqr2 = p.LengthSquaoutput.point       var d33onstruct distanceSqr1;
        var i = 0;
        var3p;
        var iter = 0;
       t.pointB.y -= rB * norointy;
            }
er < k_maxIte33) {
           pointB.x -= rB case 1, c3ength();
       ctangent = new b2Vpoin       }
        }thistB.x);
       = 0;    p.y = .5 * (out3ut.pointA.y + outelse      }
        }!c1l1Y !cnJoin!.pointA.x + out);
            dnd.y - pY) * qr2 = p.LengthSquaredut.pointB.y = p.y;
         3      output.distancenitions
Box2D.postDefs = [];
(func       distanceSqr2 = p.= p.LengthSquared();
       ance = 0.0;
        V(c3
//package structure
if (t2Vec2();
                         case 1ut.pointA.x + out            distanceSqr2 = p.LengthSquared();
        new b2Simplex();
        Bo             ou        dX = cX - xf1.position.x;
        dY =  var cY 33 saveCounti++) {
  
  0;
    anceInput.b2DistanceInput = functgthSquared() < Number.MIN_VALUE * Number.MIN_VALUE) {
                break;
            } new b2Simplex();
ALUE).pointA = new b2Vec2();
        t vertices[simplex.m_count];
            vertex.indexA = proxyA.GetSupport(b2Math.MulTMV(transformA.R, d.Ge1.z2Math.MulTMz(transformA.R, d.GetNegative()));
            vertex.wA = b2Math.MulX(tran      vertex.wircle = (s2ape instanceof b2Circ    rtex.ind3;
            vertexe = ertices[0]V(transformA.R, d.Ge3r(1, true);3ape insta new b2Vec2();
        thistex.indexA));
            vertex.indexB = proxyB.GetSupport(b2Math.MulTMV(transformB.R, d));
       (transformB.R, d));
            vertex.wB = b2Math.MulX(transformB,e.m_p;
        (transformB.R, d));
     ztractVV(vertex.wB, vertex.wgon.m_vertices;
             (transformB, proxyB.GetV);
        thisexB));
            vertex.w = b2Math.SubtractVV(vertex.wB, vertex.wA);
            ++iter;
           var polygon = (shape instanceof b2PolygonShape ? sh    default:
                this.m_vertices = polygon.m_vertices;
                this.m_count = polygon.m_vers;
            var d);
        thput. = distanceSqr1t.pointB).Length();
        output.iterations = iter;
        simplex.WriteCache(cache);
        if (input.useRadii) {
            var rA = proxyA.m_radius;
            var rB = proxyB.m_radius;
            if (output.distance > rA + rB && output.distance > Number.MIN_VALUE) {
                output.distance -= rA + rB;
                var normal = b2Math.SubtractVV(output.pointB, output.pointA);
                normal.Normalize();
               his.m_vertices[0].pointB.x -= rB t.pointB).L, bZength();
        output.iterations = iter;
        simplex.WriteCache(cache);
        if* freZex.WriteCache(cacZe);
        if (input.useRadii) {
            var    var rB = proxyB.m_radius;
  3t.useRadii) {pe instanceo var rA = proxyA.m_radius;
          A = proxyA.m_ralue = value;
   A = proxyA.m_r      }
        rlativeToles[0] = circle.m_;
   n () {
      alue = value;
   n () {
            }
        rA + rB && al = b2xy.p-.prot& ou3Swee      (index =1if (idistan3= unde3ined) distancif (i      1       Box2D.IN_VALUE) {
                output.distance -= rA + rB;
                var normantDef
        if (index === undy(thi) index = 0;
        b2SebZngs.b2Assert(0 <= index &&VV(output.pointB, output.pointA);mple    if (amicT=== undefined)eList = 0;ntDef   b2Settings.path =t(0 < this.
        this.m_room_venull;
       l = b2MZf (index tion befined) indexMath.SubtracZb2Settings.b2Asse
     = b2Ma_type = b2Manifold.eze();
               his, argllision.s_edgeBO = new VecettinIst2.y uments);
    ength();
       s;
                   normal.y =nePropeisFinite(            if (verteex = saveCount; i++, ifold.m_localPneProper locable = a0;
 bMulX(transformA, proxt;
                  nd.y = aabb.lowerBound.y - exten;
 
       reeNode,
        bnt;
     b.upperBound.x +onSolverManifold.athis, arguments);     if (this.coound.IsValidnts[o2]2Cona2Mat33node;xfA;
        nePropev= aabb.upperBound.y + exteF              is, userData = userData;
        this.InsertLeaf(node);
        return   }
   uteJ}
    bDynamicTree.prototype.DestroyProxy = funBound vertex.indexA, v 1 < count1) {
 uangent.x * v12Ahase = 'Bovle = f());;
   v; i+f());
- lo    if (proxyabb))           if (t1 > tution (proxy, aabb, displTacement) {
        b2Settings.b2Assert(proxy.IsLear index = 0vontains()atiotension + b2Setti2b2DynamicTree.protot }
        this.RemoveLe(BoxconstructoT    b2Settings.b2Ass = B1.lowerBound.T aabments);
     - e+= T * (vIn1.y - vIn0.y);
   ngs.b2_aabbMul       }
  neProper displacement.x : (-displTacement.x));
        var extendY = b2Settingue = tempVal,s.b2_aabbMueBO[0];
            ( - extTe = b2Mani;
     lowerBouner.apply(this,lex.Ge aabb.lowerBo      - extendY;
 b2WeldJointDef( - e= t
        vant.y : (-displacement.y));
 Addabb.upperBound.x + extendX;
   );
        return ettind.y ,displabb.uype.MoveProxy = function (proxy, aabb, diormal;
  dY;
        this.InsertLeaf(proxy);
        return -rue;
    rati   b2DynamicTree.prototype.Rebalance = funtor === b2B
        this.InsertLeaf(proxyc(Box iteratio
              fine = 0;
  Box2D.Collision.b2Collision.c.colc2Distthiscold.m_poill) return;
        f00) >> 16)(var i = 0; i < iterations; i++) {
            var node = this.m_root;
            var bit          while (node.IsLeaf() == false)Mul (proxy) {
        this.RemoveLeaf(proxy);
        this.FreeNode(proxy);
    }
    b}
    ee.proto   b2DynamicTree.prototype.Rebalance = fun verSquared() < NuA, ned") Box2D.Co sofC b2Settit) {
   reely, suxtenaf());, Bettings.b2_aabb.GetUserDat2 = func (displacement.x > 0 Ction (proxy, aabb, displa       return proxy.aabb;
    }
    b2DynamicTree.prototypeBound.proxettings.b2_aabb_root == null) proxy.userData;
    }
    b2DynamicTree.proTtotype.Query = function (callback, a      gs.b2_aabbExtension +erData = function (proxy0) {
     return    tMat = xf2.R;tput.p  while (count > 0) {
           2gs.b2_aabbMult       return proxy.userDat}
    b2DynamicTree.pr                   simple }
    b2DynamicTree.A.x += rA * norm  this.RemoveLeaf(a    output.fracti    Box2D.Collision.b2a       ? a : (-geBO[0];  if (!proceed) rerations) {
   1 < count1) {
  ttings.b2_aabbExtensiubje   bon (proxy) }
 ) return falseal.x = lode.child1;
                  return py.aabb;
    }
 ;
 2DynamicTree.prototype.bsUserData          }

           }
    }
    b2B    }++this.m_path;
 i.b2PolyAndEdgend.y = aabb.lower                else {
             * freex.WriteCache(cac
                    st< bount++]DynamicTree.prototype.Minerations) {
        if (iterationstangent.x * v12sV(v);
  
  ,d.y return;
  gmentyABB      }
    }
    b2   break;
         f Box        var r = b2Math.SubtractVV(p1, p2);
        r.Normalize();
        var v = b2Math.CrossFV(1.0, r);
    >   var abs_v = b2Math.AbsV(v);
ax      var maxFraction = input.maxFraction;
        var seaxentAABB = new b2AABBin(p1        var tX = 0;
        var tY = 0; {
    m_poi     node = (thilow, high2Math.SubtractVV(p1, p2);
        r.Normalize();
   lowut.pointA.y + outack    normal.y = 0;
igh                 0;
 CrossFV(1.0, r);
      tacktVec  :   seount+?> 0) {: (-displacement.y));
 m_poierations) {
    BB.upperBound.y = Mathal.x = l Math.min(stacnew b2AABB()Vr = perBo- extendX;
        noSw
             this.InsertLeaf(proxyt     a1WorldX + v2Y er() {
1WorldX + v2Y  h =roxym);
           gmentAARandndCir       for (i = 0;
               repara( + ctputguments);
       var separaRan
    };
    Bolo    ength();
       lok = new Vector();        var count = 0
        stack[cou  local_v12 = vertiaceA) + v.y * (p1  }
    }
.y =h    lo + cr  };o     Box2D.Collisioode.child1;
        nts)PmentOfTw));
         _aabbExtension;
        node.aabb.lowerBound.x = ax |=
   >> 0.9lisi7Fction ction;
              2 maxFr3ction = callback(subInput, no   func0ction = callback(subInput, noeChainDeftion = callback(subInput, nossData;
ction   }
    }
    b2 }
 ode.child1;
        Is input.p2;
                subInput.maxFraction = input.maxFraction;
   ut = esul0;
     l1Y (x  Math    )dY =      Box2D.Collision.ul();
          ision.b2Collision.b2_nullFeature = 0x000000ff;
    });ettings.b2_ };
  _zxB));ollision.b2M               inv_         segmentAABB.upperBynami_ts);ndexA)2DynamicTree.prabb.TestOve         ,th.max(p1.x, tX); this.lowerBound         segmentAABB.upperBrs be hel= Math.max(p return functionBB.upperBound.x = s.b2_aabbound.y = Math.maf2.position.y + (tMathe h.b2Mat3aveCount = simplex.m_count;
  
//p invius) return;
        var po    thoints.b2JointEs.m_freeList) {
this, arguments);
    };
    B b2Dyntex = Box2D.Collision.b2SimplexVertex,
        btion () {
y(this, argution () {
is.m_freeList) {
 y(this, arguc  t1 = (this.lowerdgeA;
null;
  this.stabbingCoaoint, arguaaneNormal.x = cLo{
 w b2Dyns.m_freeList) {tn new b2Dyt;
            if List = node.parixtureDef() {
        b2FixtureDecxtureD2 instanceof Function) &    
            node.ll;
           ist = node;
    hild2 = t) {
 sertLeaf = functio (leaf) {
 ist = node;
    rn ne return
        if (thism_root ==st = node;
    ototyee.protl.x * cv.v.x + normopulX(transformA, pnode) {
       thors be hels.upperValues[0] ay. http://www.box     ware m  output.fractiware muaction;
    intDef;

  =argume-eaf.aabbolver.action b this.se) {
      var nodeoint.apply(thi.IsLeaf() == false) {
     }     do {
    xyB.m_radius;
  on = tmsLeaf() == false) {
ahing     do {
  .m_root = le b2AABB();
        aabb.Cynamics.Joints.b2RevoluteJ   if (sibling-col2.y * tVec.y);l;
            r.apply(this, arguments               b2DynamicToint.apply(thi1.aabb.lowerBoontactSolhild1.aabb.upperBound.y) /aabb.lowerBound.x + ctotype.b2BoundValunode) {
       Adv   for (var i = 0r valid = dX >= 0. 0.0;
        va      result = resulee.proto< tl1Y Leaf()ee.proto = 0; {
          Tangent = b2Collisio this.m_(1;
ee.prott (c){
             if (absDX < Number     .IsLeaf() == false) {
            do {
                  sibling =  sibling.child1;
                var child2 = sibling.chil     return ne         var norm1 = Math.abs((child1.aabb.lowerBouicTree.prototy
        b2Distanc       vars be hel+] = node.chp[i] = 0;
        return tmp;
ntacts.b2P        var node = this.m_R     var cY = xf2.positilength; ++2DistanceJalse;
      node2.aabb.Combine(lpoou cength();
       pothis, arguments);     .x = output.pointB.xormal.Normalize();             node1.chipoontact) this.b2Nulling.aabb);
arguments   if (absDX < NumberAABB(M(nsertLeaf = fde2.userData = null;
    == "undefined") Box2D = {};
if (ode2;
            ing;
            node2.child2 = l
            siblingode2;
            leaf.paren            }
                break;
   
           ut.pointB.y = p.y
               for (i = 0;
       node1.aabb.Combine(nod
                subInput.;
              V(x      proxy.aabb.lowe
          x.Rde1 = node1.parent;
            }
 lse;
            for (i = 0;
                 i < saveCY;
          t = b2ManVec2();
        s[o2 };
  llision.s_edgeBO = new Vec node
          
        }
    x_, y_aabbExtension;
  _      node.aabb.l_        var count =yif (leaf == this.  thlaneNormal.x = cLochilx_     node2.child siby       }.m_root = node   this.m_radius = polygon.m_radius;
                   var polygon =       this.m_vleaf.parent;
        var noveLeaf = function (leaf) {
        if (leaf == this.m_root) {
            this.m_root = null;
            return;
        }
        var node2 = leaf.parent;
        var nerations) {
   b2Settings.bvar sibliv;
            ver) {
MulX(transformA, pnt;
        vaumentgati.y * local_v11.2DistanceOutput.b2Distance    b2Dvar si.b2Contact    b2ContactPoint nt;
        va
       Sel };
    Box2D.Dyg;
            }

                 else {
     this.Frld1 == leaf) {
     MaktVec.x + tMat.ction (leaf) {
        if (leaf == this.m_root) {
            this.m_root = null;
            intDef = b2PulleyJotion (ld1 == leaf) {
            sibion () {};
    b2DistanceOutput.b2DistanceeAO[0] = e Box2D.C= b2AABB.Combine(node1.e) {
       1.child1 = sibling;
            }+
            else {
  b2Dy           node1.child2 = siblinormal;
1.child1 = sibling;
            }-
            else {
 ee();           node1.child2 = siblin= xfB;
eturn;
                }
                else {
             var sib*dge() {
     se {
 namicTreeBrw Vector();
        this.mCast = function (callback, input        sib           return;
f());
    y - o (proxy.aabng.par         else {
   tains(aabb)
        ++tontactSolfer = new Vector();
        this.mTuserData) {
        var proxy = thisb2_aabbMult(this, null)          else {
   function (proxy) {
  bingCount = this.sproxy.aabb.up        }
        else {extendY;
        n.userData = userData;
        this.InsertLeaf(node);
 this.m_tree.CreateProxy(aabb, ontactSolxyCount;
        thi  }
 t      nor.m_tree.DestroyProxy(proxy); (proxy) {
    namicTreeBroadPhase.prototype.MoveProxy = function (proxy, aabb, displacement) {
   MoveProg.parent = nu  else {
   veProxype.CreateProxy = function (aabb        var maxFifold.m_localPunt;
    nt;
 <tendY       x abs           else {
   se {
 aabby = this.y_treefer = new Vector();
        thisin(p1.x, tX);
 FatAABB(proxyA);
        var >abbB = this.m_tree.GetFatAABB(proxyB);
      ctioturn aabbA.TestOverlap(aabbB);
    }
    b2DyA.x += rA * normal.x;
      if (norm1r aa0)ABB = node1.aabb;
           if (norm1    {
     node1.aabb = b2AABB.Combine(node1.
          };
    Box2D.Dynamics.Joints.b2Mouseollision.b   b2Dyn  }
    Phase.proype.TestOverlapeBroadPhase.prototype.GetProxy            node = (.aabb.TestOverlap(se.m_proxyCount;
    }
    b2DynamicTreeBroadPhase.prototype.Updat= b2ContareDef() {
        b2FixtureDent;
            }m_proxyCount;
    }
    b2DynamicTreeBrparseInt( };
 ntPoint() {
        b2ContactConstraintPo var nextEdge (typeof(Box2D.Conv  };
   xtEdgef = b2MouseJo;
    b2Dynamk(proxy) cTreeBroadPhase.protoyProxy) return true;nePropef = b2MouseJointDef;
se.prototype.GeendY = b2Settings.b2.aabb.TestOverlap(segmentAAendY =    i < )l1Y [__this.m_pairCount]= b2AABB.Combine(nodeoutpn.Math.   }
    }
    b2Dynamic2();
                     var x, y, zaabbExtension;
        node.aabb.lowerBound.x = a     this.m_root = nul        var count =z   var sibling =gon.m           return;
       }
        var cTreeBroadPhase.m_vehis.m_radius = ci.m_pairBuffer[_r node1 = node2.parent;
        var sibliproxyB);
    gon.m_vertices true;
            };
   m_pairCount];
                pair.proxyA = proxy < queryProxy ? proxy : queryProxy;
                pair.proxyB = proxy >= queryProxy ? proxy : queryProxy;++__this.m_pairCount;
                return true;
            };
   e1.child1 = sibling;
            }
            else {
                          vthis.m_radius = ci.m_pairBuffer[_g;
            }
            sibling.parent = node13
            this.Frat33 = BozreeNode(node2);
    nput = functe (node1) {
                var oldAABB = node1.aabb;
                node1.aabb = b2AABB.             _this.m_p
            __this.m_tree.Que{
            this.m_root = sibling;
       ut = fubling.par      tPair.proxyB) {
                 eeNode(node2);
        }
    }
    b2DynamicTreeBroadPhase.b2DynamicTre            b2Dy  return true;
            };
  {
        this.m_tree = new b2DynamicTree();
        this.m_moveBuffer = ne           ee();primaryPair.proxyB);
          s.m_pairBuffer = new Vector();
        this.m_pairCount = 0;
    };
    b2DynamicTreeBroadPhase.prototype.Cre           ototype.Creater.b2Color.apply(this, arguments);
 = Bllerox2D.Cob2Vec3.apply(th       thiction b2   this.m_ion b2Mat33() {
        b2Mat33.b2Mat33.apply(this, arguments);
        if (this.constructor === b2Mat33) this.b2Mat33.apply(this, arguments);
    };
    Box2D.Common.Math.b2Mat33 = b2Mat33;

    function b2Math() {
        b2Math.b2Math.apply(this, arguments);
    };
    Box2D.Common.Math.b2Math = b2Math;

    function b2Sw
        if (this.constructor === b2Color) this.b2Color.apply(this, arguments);
    };
    Box2D.Common.b2Color = b2Color;

    fu
    function b2Body() {
        b2Body.b2Body.apply(this, arguments);
        if (this.constructor === b2Body) this.b2Body.apply(this, arguments);
    };
    Box2D.Dynamics.b2Body = b2Body;

    function b2BodyDef() {
        b2BodyDef.b2BodyDef.apply(this, arguments);
        if (this.constructor === b2BodyDef) this.b2BodyDef.apply(this, arguments);
    };
    Box2D.Dynamics.b2BodyDef = b2BodyDef;

    function b2ContactFilter() {
        b2ContactFilter.b2ContactFilter.apply(this, arguments);
    };
    Box2D.Dynamics.b2ContactFilter = b2ContactFilter;

    function b2ContactImpulse() {
        b2ContactImpulse.b2ContactImpulse.apply(this, arguments);
    };
    Box2D.Dynamics.b2ContactImpulse = b2ContactImpulse;

    function b2ContactListener() {
        b2ContactListener.b2ContactListener.apply(this, arguments);
    };
    Box2D.Dynamics.b2ContactListener = b2ContactListener;

    function b2ContactManager() {
        b2ContactManager.b2ContactManager.apply(this, arguments);
        if (this.constructor === b2ContactManager) this.b2ContactManager.apply(this, arguments);
    };
    Box2D.Dynamics.b2ContactManager = b2ContactManager;

    function b2DebugDraw() {
        b2DebugDraw.b2DebugDraw.apply(this, arguments);
        if (this.constructor === b2DebugDraw) this.b2DebugDraw.apply(this, arguments);
    };
    Box2D.Dynamics.b2DebugDraw = b2DebugDraw;

    function b2DestructionListener() {
        b2DestructionListener.b2DestructionListener.apply(this, arguments);
    };
    Box2D.Dynamics.b2DestructionListener = b2DestructionListener;

    function b2FilterData() {
        or;

    function b2Settings() {
        b2Settings.b2Settings.apply(this, arguments);
    };
    Box2D.Common.b2Settings = b2Settings;

    function b2Mat22() {
        b2Mat22.b2Mat22.apply(this, arguments);
        if (this.constructor === b2Mat22) this.b2Mat22.apply(this, arguments);
    };
    Box2D.Common.Math.b2Mat22 = b2Mat22;

    function b2Mat33()eep() {
        b2Sweep.b2Sweep.apply(this, arguments);
    };
    Box2D.Common.Math.b2Sweep = b2Sweep;

    function b2Transform() {
        b2Transform.b2Transform.apply(this, arguments);
        if (this.constructor === b2Transform) this.b2Transform.apply(this, arguments);
    };
    Box2D.Common.Math.b2Transform = b2Transform;

    function b2Vec2() {
        b2Vec2.b2Vec2.apply(this, arguments);
        if (this.constructor === b2Vec2) this.b2Vec2.apply(this, arguments);
    };
    Box2D.Common.Math.b2Vec2 = b2Vec2;

    function b2Vec3() {
        b2Vec3.b2Vec3.apply(this, arguments);
        if (this.constructor === b2Vec3) this.b2Vec3.apply(this, arguments);
    };
    Box2D.Common.Math.b2Vec3 = b2Vec3;
nction
     tree.Rebalance(iteratie, 'erManifol
     .Common.Math.b2Sweepfined) vY = 0;
        returnp;
    }
    b2Point.proConstrapply(this, atFirstVertex = function (xfthis.p;
 ) {
        return this.p;
 tactListener; b2RayCastInput.b2RayCastInput = funcctListener = b2Conion (xfs.m_tree.Rebalance(iterati= function (xfDynamicTreeBroadPb2Sweep aleyJ() {
        b2Swetex = function (xf   if (axFraction) {
     RegnstrSweep;

    functtex = function (xf= null;2 === undefined) p2 = lowerBo      if (maxFraction === undefined  seaxFraction) {
     s[0].
        if (maxFraction === undefin    thgs.apply(this, arAnd (vY === undefined) vY = 0;
        returut.b2RayCastOutput =or === b2ColoNullint.prototype.GetFirstVertex = funct   b2Segmentor === b2Mat22) 2RayCastOutput = function () {
        this.Vec2();
        this.p1 = new b2Vec2();, arg   this.p2 = new b2Vec2();
    };
    b2unction (lator === b2Mat22) thiion (lambda, normal, segment, maxLambda)ndefined) tor === b2Mat22llisio    thontactListener.b2w b2Vec2();
    };
 X = segment.p2.x - saxFraction) {
     thitree.Rebalance(iterations);
    }
    b2this.constructor ===  truep1) this.p1.SetV(p true,BodyDef.app trues.p1.y;
        var nX = arguments);
    };
Y = (-dX);
        va.apply(this, arg(1);
  nX = dY;
        var nY = (-dX)      if (denY * nY));
        if (denMIN_VALUE;
        var denom 
            vaor === b2ColoGearnX = dY;
        var nY = (-dX)bY * nY);= (bX * nX + bY * nY);MIN_VALUE;
        var denom nom) {
    or === b2ColoJacobia  Box2D.Dy        var denom          bX;
        X = dY;
        var nY = (-dX) <= maxLambda * de {
                var mu2 = (-rX ) + rY * bX;
        actLs.m_tree.Rebalance(itenLen = Math.sqDynamicTreeBroadP    (1.0 + k_slop)) {
                nY /=                 nY /= MIN_VALUE;
        var denom                 manifold.mousnY /= nLen;
                    ue;
         return true;
     MIN_VALUE;
        var denom turn false;
tor === b2Mat2rismatic(1.0 + k_slop)) {
             b) {
        function (aabb) {
        MIN_VALUE;
        var denom (aabb);
    }
 tor === b2Mat2ulley     this.ExtendForward(aabb);
         vaion (aabb) {
        va
    b2Segment.prototype.Exten.p2.y - this.2ContactManageevolutnY /= nLen;
                    perBound.x -  0 ? (aabb.upperBound.x - MIN_VALUE;
        var denom p1.x) / dX : Numnts);
    };eld(1.0 + k_slop)) {
             Bound.y -? (aabb.upperBound.y -MIN_VALUE;
        var denom this.p1.y) /m_type = b2eep(eep.b2S   manifold.m_localPoint.y = 0.5 AABB.Combine = function (aabb1, atacts.b the    this.m_freeList = node;JointDefrcle.Vlue ===sition.x + (tMat.col1.x * local_vfort, calements[o2])) return true;
 x = t
        conne p2, mtact = b2Polygs    2    tmi1
                saveAtangent = new b2VperBound;
        if (inp tmi           i < s2nts);
    };
    ()    2.x) / dX : Number.POSIT
           ;
   reOnts);
 
    tan(      tput..min(dX*= fuY > 0 ? (aabb.upperB b2Settings.bFV(perBound.yVE_INFINITY,
           ist = node;
 is.p2.y) / dormal;
   nce = 2.x) /    if (this this.p1.x = this.p2.x + dX Y : Nu) {
            retutance his.p1.x = this.p2.x + dX .GetUs        this   };
 this.p1.x = tb.upper
    function () {
 s1x) / dX : Number.POSIIVE_INFINITY);
        this.p1.x = this
    .x < pX) return false;;
    = b2Pub2_aabbMult= new b2Vec2();
    };
    b2.p1.y = this.p2      UE) {
     r.MINnts);
 ( Matnce = Box2D.Collision.b2UE) {
     uaredevoluteJbda =
        var count = parseInt(cacheneProper/ dY 
            __his.p2.y) + thiCreateBox2D.Comm  var planee};
    Box2D.        if wf ((.IsLockvar s=es[ver   b2ContactConstraintPox = output.poin(typeof(Box2D.Cfox2D.Commabb.Teb2Vec2;nput();
       var  var loproxy)  this.p2.
    function Cli        if flags ew bx = te_traiveFla= t1.y - t2.y;
  erticpulse() {
         var l b2Von.Math.b2Tr.m_lY = 0;
 .x * tVec.x + tMtAY = 0;
    functlY = 0;
 var pointBX;
        var pY = inputAY = 0     b       var_type =onstar dX = (-this.p2.xion.e_pointA1;2Vec2;       resu++ionFunction.e_resented as bein_type = b2b.p1.x    vn.b2Collision.s_type = b2ctSolver0) vOut[numOut++].Set(   var tet    tClip.id.features
            }
   tMat;
 0;
 |formif ((.e_newb2Vec2;ount && count < 3)his.m_proxyA.Gr localPointA;
        var localPoin       }
       re
    Box2D.Dynamics.Contacts.b2ContactResult = b2ContactResue + 1 : 0);
    d  };ntAX = 0;
  Defnput();
    def.   ren (p       b2PolygoMat ContactResctSolveount && count < 3)e = i1ar localPoin  var* tVec.x + tMat.col2.x * tVec.y2.b2VoycalPointA1;
       ertex(cb.upperBound.y) /        var localPointB;
        var localPointB1;
   var localPointB2;
     n
    ionFunction.e_points;
           pdY;x = output.poin softBody.ap normal1Y);
        vaAX;
!ointAYfold.m_points[0].m_loAX;
  this.m_p      var dot = (normal1XppF)Y -  b2Separat_type = b2Sepa07 Erin Catto http:This       localPointA = this.m_ponFunction.e_faceA;
     this.m_as);
        if (this.corg/docs/2.1a/reference/
 *
 */
 - poinod var s = 0;
   AX;
  );
onFunction.e_faceA(typeof(Box2D.Cmal = o      b2Vis.b2Tranormalize();
     a,
 child1;
           free3 = 0       f (separationB >DynamicTre.unction.e_faceA;
        var ollicapply(tA1.y local_v12.y);
         var ;
 ocalPointA2.Blocal_v12.y);
  GetVertex(c] == cache.AonstalPointA2, localPoned") Box2D.Co = transformA.R;
             var tVe      p(;
        ifrtices1[edge1];
        tMat intBY = 0;
        var normalX = 0;
        var normalY = 0;
        var tMat;
        var tVec;
        var s = 0;
        var      p 0;
        if Bound.x) / 2, (this.lowuseJoint = b2Mous.y;
                var pointAY = 0lPointB =x = output.poin_type = b2Separatx = output.poin-  b2Boune.indexA[0]);
        c = localPointA;
         r localPointA;
        unt)p2.y - And i < saveCount; i+aabb);
    tmin = t1;
        saveA[i] = vertices[i].indexA;
             ct documentaol1.y * tVec.x + tMat.col2.y * tVec.y);
            this.m_axis.x = pointBX - p this.p2.2AABB();
        aabb.C= transfor
            node  proxy.aabb.lowerBoun    b2T transform        var separation = v2X  the erBound.x +  lambda;
    }
    b2    .col2.y * tVec.y);
        tVec = vertices2[index];
               if (s        var v2X = xf2.position.x + (tMat.col1.x * tVec.x + t          if (s <= b2l1.y * tVec.x + tMroxy;++__this.m_p   }
      is.m_type = b2Separatiount;
               if (n (leaf) {
     if (* lambda;
    }
    b2is.m_root = = this.mente tmical_v12 = verticY = 0;
        var tMat;
        var tVec;
        var s = 0;O rem };ionFunction.e_points;
      b2RayC;ftwarf b2Sepa child1;
       f.Synchronntac       if (count == 1(count == 1) {
            this.m    var tMat;
        var tVeFindNewotype, '.y + (tMat.col1.y * tVec.x + tMat.co}
        var center = mplex.m_count;
     l2.y * tVec.y);JointDef;
X = (lse;
   this.p1.xr localPointA;
           }
        var center 

    function b2PulleyJoxct docum        tMat = transformB.Rontacts.b2PolyAndEdgeContact = b2PolyAndEdgeCont tVec.x + t + (tMat.col1.y * tVec.x + tMat.col2.y * tlygonContact.b2PolygonContact.apply(thiis.Normalize();
         tVecm_typthis.m_axis;
            tMat = transformB.R;
            for (i = 0;
          xyB.GetVertex( + (tMat.col1.y * tVec.x + tMat.co i < saveCount; i++) {
                saveA[i] = vertices[i].indexA;
             pointBX = transformB. + (tMatl2.y * t};
   }
    b2B        tMat = transformB.Rif ((() {
   constructor === b2PrismaticJoint) thi   if (.x * tVec.x + tMat.col2.x * tVec.yics.C           pointAY = transformA.position.y + (tMat.cointAY) * normalY;t.col1.y * tVec.x + tMat.co      ion (aabb) hild1 = sibling;
                n2Buoyaformx = thicalPticeep( tMat.col2.x * tVec.y);
            pointBY = trans function (aabempStabs;
            tMat = transformB.Rs < 0.0) {
               amics.Joints.b2MouseJointDef < 0.0) {
  .col1.y * tVec.x + tMat.col2.y * tVecble:0) {
               omeg  this.RemoveLeaf(   lopply(this, argumem_proxcal1Y);
            if ();
            }
        }
        else {
            localPointA1 = this.mCalls;ion (aabb) ache.* tVec.x + tMat.col2.x * tVec.y);
  he.indexB[0]);
         

    function b2PulleyJo(transformA.R, .x * tVec.x + tMat.col2.x * tVec.yDtypeacts.b2PolyAndEdgeContact = b2Perticosition.x   Box2Dnput();
    bd.2Buoyan + (tMat tMa
            vaallowstance =       normalX = tMat.col1         X = 0;          y * dB.y;
     A.y * dA.y;
  on = tm + (tMat.col1.xctVV(dB, dA);
  ble:DampinV(v2mB, localPoint;
    .x * r.x + dA.y * r.yion (aabb) mB, localPointB);
               vafixed      }
         normalX = tMat.col          var           var r =         s = 0.0;            vab    rmal.yntBY = 0;
        var                  var r =* e) / denA.y * dA.y;
  whild1.       normalX = tMat.col1               var r =                     va      ;
            va0.0;
                 t = 0.0;
A.GetVertex(ca + (tMats < 0.0) {
   this.p1.x = tbd.aabb);
   mA.position.x + (tlPointA = new usthis.b2Ve + (tMatUPointA1nput();
     l.x = lth.Max(br localPointA;
        AapplF) + thiransformB.p) + ,stancethis.m_axis.NegativeSelf();
!           }d   b2S    }
        else {
            localPointA1 =         IsA    tB;
  norm
            tVec = l* tV * (l               tMat = transformA.Rlocal this.y + s *ar dX = (-this.p2.x) +       B1.y);

    function b2orque    (( {
 p = Box2D.Co   if (s ? (aB1.y);
         .b2internal }
     pe = b2Sep     this.m_root =localPointA.y = locaT == 1.land;

     == 1b.upperBound.y) / btractV- center.y);
 btractVVexB[1]);
            var pA      localPointB = new b2Vec2();
            localPointB.x = localPointB1.x + s * (localPointB2.x - localPointB1.x);
            localPointB.y = localPointB1.s == 1.0) is.m_a);
            localPointA.y = locasform.b2Trconstructoients);ointA2.y - localPointA1.y);
            localPointB = new b2Vec2();
            localPointB.x = localPointB1.x + s * (localPointB2.x - localPointB1.x);
            localPointB.y = localPointB1._proxyA.GetVertthis.m_type invhis, * tMat.cointB2.y - localPoint_proxyA.GetVert      localPnsformB.position.y   if (s == 0.0 || y;
            .y * tVec.y); };{
                this.m_type =         rationFunction.e_faceB;
         sition.y y + (tMat.col1.y * tVec.x + tMat.pli(QueryCallbackics.backy;
        for (i < 0.0) {
           }
            loc    b2.x + tangent.y * ;
            var b =intA1));
        this.upperBound.IlRadius) ointBX) );
       this.upperBound.IointBox2D.Co (s < 0.0) {
          var in var l.col1.eep(       }nsformB.R,Point = new b2Vec2b2Dilocal_v12 = verticestware    unction.e_point f;fold.m_points[0].m_lotransfor(f       if (this.constrointA = b2SeonFunction.e_faceA;
          re  b2Settings.bex(cache.inderev tVec.x + tnction.e_faceA;
     ar i1 = parseInt(index);
        var i2 = parsm_type = b2Separatis.m_localPoint = localPointA;
              m_type = b2Separesen--ertex(cache.indexA[0 b2Separatxis.Nis.m_localPoint.x = 0.5 * (locat.col1 normalY = tMated as such, and must notMat.col2.y * t      }
        }
          ointB =tMat.
                tMs.m_localPoint = localal1WorldX + tMat.col1.y * normal1WorldY    ed as such, and must noointB1.x + lfineGetter__ instanceof Function
    _typeocalPointA;
            ttMat.cocalPointA;
            tBY) * norm     _type              if (s < 0.0) {
    xf2mentsMat.c              if (s < 0.0) {
 alue ===      b2Lin.GetUstMat.col1.y * s.b2_aabb         tM
           s.b2_aabb* lambda;
 calPoinifold.m_transformB.position.x + (ments);
   * tVec.x + tMat.col2.x * tVec.y);
                pointBY = transformB.positB;
y + (tMat.col1.y * ;
   f (s < 0.0) {
  (on.x + (ttMat.col2.y * tVec     if (s < 0.0) {
                           * normalX + (poi                             this.m_        }
        }
    }
    b2SeparationFu1           tointA2.tput.pointA.y   this.formB) {
        var axisA;
 PointA1.ormA.R;
  xis = b2Math.CrossVF(b2MMntac b2SimplexVertex.b2SimplexVerteX = transformB.p         + dY * tm_localPoint.x = 0.5 * (local child1;
           ssVF(b2Math.SubtractVV(localPo        var nor + tMat.col2.x * tVec.             this.m_localPoint.x = 0.5 * (lo      localPointA = th(transformA.R, this.m_axis);      }
        }
  Mat = transformA.R;
            pointAX = transfoon.y + (tMat.col1
              local_v12 = vertic                  this.m_axis.Negatex.b       tVec = localPointB;
                tMat = transformB.R;
                pointBX = transformB.position.x + (tMat.
      at.col2.y * tVec.y);
                .x + tMat.col        at.col2.y * tVec.y);
                sgn = (h.MulX(transf* normalX + (pointAY - pointBY)                    * normalX + (pointAY - pointt.col1.y * tVec.x + tMat.col2.y 1.x);formB) {
        var axisA        tMat = transformB.Rhis, arguments);

    function b2PulleyJo     tMat =        tMat = transformB.RInVec  = Box2D.Collision.b2DynamimB.position.y     var count2 = 2Math.MulMV(transformA, argum  var planeat[count++] = nolocaePair,
  pointA = b2Math. this.m_pctSoh.MulTMV(transf this.m_p
        if (this.cBY - pointAY) * ny + (tMat.col1.y * tVec.x + tMat.co));
                lver) th    var oldAAlt = result && aabb.y * tVec.x + tMat.col2.y * ointB2ransformB.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
            pointBY ;
                this.m_localPoint = localPointB;
                tVec = this.m_ax* tVec.y);
   tmin;
        return t
        var sPre  tMat = tratmin;
        return tPair,
lver) this.b2ransformB.position.x +Pair,<      }++simplex.m_cousformA.R, normB.GetSupport(bointB = b2Math.MulX(transforxtEdgeetSupportVertex(axisB)f (typb2Contact      tVenom = a * e - b * b;
            s = 0.0;
   tA = this.m_proxyA.GetSupctSolver) thiIdLocal1Y =s.b2Cont maxDot = dot;
  *  maxDot = dot;
  +b2Collision.EdgeSep        }
        * tVec.x + tMat.  axisA = b2Math.MulX(trans   pointB = (typeof(Box2D.Co
          .e_faceB;
    y);
            formB, localPointB);
  roxy.prointDef.apply(     localPointB2 = this.e.indexBamics.Contacint.y = 0.5 * (loclocalPointB);
   = 0x01;
        Box2D.ColindexB[0]);
         t1 = (this.lowerBo              pointBY = trasgn = (pointAX -*=== bfaceB;
        - Box2D.pos    var tX = 0;1.y * tVec.x + tMat.col2.y * tVec.on () {
        th+s.m_v1 = new b2Sn(p1exVertex()2MouseJointDef.applhis.p2.y) + thiocalPointA;
   manifold.m_localPoint.y = 0.5 Pair,
        b2Manifold ulX(transformB, this.m_localPoint);
                axisA = b2Math.MulTMV(transformA.llision.b2SeparationFut.pointB.y = p.y          var pA = b2Math.MulX(transforonst      var pA = b2Math.Mulkine
       }
        else {
            localPointA1 =BY) * normalY(node1.chil2Manifold,
             this.ionFunction.e_pointcalPointB1.x + localPointB2.x);
on.s_ache.indexBY = (tMat.col1.y * tVec.x +    inision.s_localNormal;
         distanc;
       ive());
   local_v12.y);
        vPair,rtexl.GetNegative());
    ifold.m_type = b seperation;
            }
     tMat = xf2.R;   else {
  default:
                b2     tMat = xf2.R;.y) * noroxyA.GetVert.0;
        }
    }
            loca[0]);
            tVec = lointA = b2Math.MulX(transformA, localPoiifold.m_type *y * tVec.y);
              wALocal = pr       v.w = b2Math.Subtractnitions
Box2D.postDefs = [];
(funcupportVertex(axisA);
         pointA = b2Math.2D.Dynamics.Joints.b2Jacob.y) * nor        seperation = (pointA.x - pointB.x) * normal.x + (pointA.y - pointB.y) * nor-.GetSupportVece = n;
                 
         Settings.b2Assert(false);
    IA);
        PointScaindexB[1]);
 pointA.y) * normal.y;
       tMetr   if (absDX < Number.M            return 0.0;
        }
    }
      if (this.m_count > 1)b2Math.MulTMV(tran      axisA = b2Math.MulTMV(tran }
    }
    Box2D.postDefs.push(function () {
        Box2D.Collision.b2SeparationFunoints = 0x01;
        Box2D.Collision.b2SeparationFunction.e_faceA = 0x02;
        Box2D.Collision.b2SeparationFunction.e_faceB = 0x04;
    });
    b2Simplex.b2Simplex = function () {
        this.m_v1 = new b2SimplexVertex();
        this.m_v2 = new b2SimplexVertex();
        this.m_v3 = new b2SimplexVertex();
        this.m_vertices = new Vector(3);        = b2Island;

   
//pre-depointB;
        ndex1 (pointBX - pointAX) * noert(proxy.IsLeaf());
    
//pre-de   if (proxy.aabnt(verticesContains(aabb)nt(vertices[i].indexB)b2Simplex.proto   b2Separatiu this.m_type = b2SeparationFunction.eu       localPointB1 = this.m_proxyB.G.x > 0 ? displacement.x unt; i++) {
          ulleyJoint) this.b2
//pulleyJ.aabb.TestOverlap(segmentAABound.ndexA);
     i          l1.y * tVec.x + tMat.col2.y * tVec.y);= b2Island;

    var 2D.parseUInt(verti = b2Math.SubtracXTnFunction.e_v1.w.GetNegl1.y * tVec.x + tMat.col2.y * tVec.y);ulleyJoint) this.b2 var             var e12 = b2Math.Subtrac tMa(this.m_v2.w,   }
      e.indexA[0]);
            localPointA2 = this.m           cache.indexA[i] v1.w.GetNegative());
        .s_edgeAO[0] = edg              poi2internalon () {
        thv1.w.GetNection.e_faceB;
      var pointVec.x + tMat.col2.ar b = dA.x * dB.x + dA    }
    b2Si           this.m_typVF(e12, 1.0);
                }
            }
    th.CrossVV(e12, this.m_= Box2D.parseUInt(vertices[i].indexA);
            cachev1.w.GetNeindexB[i] = Box2D.parseUInt(vertices[i].indexB);
        }
    }
    b2Simplex.prototype.GetSearchDirection = function () {nt) {
      is.m_type = b2SeparationFunction.e}
    b2Simp     case 1:
                return this(false);
                return new b2Vec2();
        }
    }
    b2Simplex.prototype.GetClosestPoint = function () {
        switch (this.m_count) {
            case 0:
                b2Settings.b2Assert(false);
;
       oxyA.GetVertex(cache.indexA[1]);
         ath.Clamp((b - normalY;
            if (s < 0.se);
              1:
          (separation > 0.0            pB= new Vector();            pB.) {
        this.m             pA.1:
                pA.SetV(this.m_v1.wA);

         se);
                break;
            case r f = dB.x * r.x + dB = this.m_proxyB.GetVertex(cache.ise);
              y * r.y;
    ntB;
            tM this.m_v1.wB.x - this.p2.x) / this.m_v1.wB.) {
        this.m this.m_v1.wB.y +is.m_v2.wA.y;
                pB.x = this.m_v1. tMat.col2.x + dY=== "undefined") 2 = t);
   center.y);
 BuoyanexB[1]);
            var pA = === "undefined") Box2                pointB = b2Math.Mulr a = dA2Fixture.b tVec = localPointA;
            t          var pA = b2Math.MulX(transformA, localPointA); this.m_proxyA.GetVertex(ut.pointB.y = p.y;
      MV(transformA.R, b2MVertex(0);
            v1.x);
            localPointBointB1.y + s      node2 = node1;
    + tMat.co                O remove t, ca;
            this ce    urn tPointntact) this.b2NullintA2.x);.X = For = b2Sing;
//package structure
if (tMat = transformB.R;tMat.col2.x + dY * tMat.col2.y);
        var dist = 0;
      * tVec.x + tMat.coB     s =ransformB.p = 0;
        von.s_ = 0;
        var nb2Math.Clamp( poin, 1.0);
            }
              wALocal = proxyA.GetVertex(0 0;
  = ~.CrossVV(b2Math.SubtractVV(this.m_v2.2Math.SubtractVV(this.m_Isw, this.m_v2.w).Lenk) {
        var __this =h.Clamp((b * f - c * e) / denom, 0.0, 1.0);
            }
2Math.SubtractVV(this.m_v1.
    ingA           node = (gth();
            case 3:
                return b2Math.CrossVV( b2Math.SubtractVV(dB, dAs.m_v2.w, this.m_v1.w), b2Math.SubtractVV(this.m_v3.w, th b2Math.SubtractVV(dB, dA
        }
    }
    b2Simplex.p     default:
                
      1.w;
        var w2 = this.m_v2.w;
        var e12 = b2Math.SubtractVV(w2, w1);
                t   Box2D.Col     imwitch (this.m_coun(w1.x * e12.x + w1.y * e12.y));
        if (d12_2 <= 0.0)
            this.m_v2.a = 1.0;
            this.m_coueak;
            default:
                b2Settings.b2Assert(false);
                ex.prototype.GetMetric = function ()  () {
        switch (this.m_coun     default:
                b2    }
        varalse);
                return 0.0;
                  if (t < 0.0) {
             2Math.SubtractVV(this.m_v1.F         var deransformB.pos < minDot) {
 GetVert < minDot) {
        return b2Math.CrossVV(if (denom != 0.0) {
       s.m_v2.w, this.m_v1.w), b2Math.SubtractVV(this.m_v3.w, thw2e12;
        var d12_2 = (-w1e12);
ransformA.position.y + (tMat.col1.y * tVec.x + tMatIsar w1e12 = b2Math.Dot(w1, alse);
                return 0.0;
                 s = 0.0;
            if (denom != 0.0) {
    * tVec.x + tMat.col2.y * tVormals.m_v2.w).Length();
            case ;
  1.x + sormaloxyAefined") Box2D.Common = {};
if (typeof(Box2D.C
        var s = 0;X = transformB.posit;
        var e12 = b2Math.SubtractVV(w2, w1);ormalX = 
        var t2 Y = 0;
        var tMat;
        var tVec;
        var s = 0;
              this.m_localPoint.x = 0.5 * (loc(localPointB1.x + localPointB2.x);
is.m_a sgn = 0;
        if (count == 1) {
       2LineJointDef;

    function b2MouseJoint() 
        if (d12_2 <= 0.0)23_2 = n123 * b2Math.CrossVV(w3, w1);
        var d123_3 = n123 * b2Math.CrossVV(w1, w2);
        if (d12_2 <= 0.0 && d13_2 <= 0.0) {
            this.m_v1.a = 1.0;
                   tVec = this.m_localPoint;Y * dY;
        var ra         case 0:
      7 Erin Catto h     vaons:
 * 1. The origin 0 && dointc var normal1X = (tMa     b2Setti= b2RayCastInput) this.b2R
            tVec = this.m_axis;e0ntA2.x);documentation for Box2dFlash, s;
            thi + tMat.col2.x * tunction () {
        var w1 = thi23 = b2Math.Dot(w3  var w2 = this.m_v2.w;
        var w3 = thisormalX = 0;     var r = 23_2 = n123 * b2th.Dot(w3, e13);
        r w1 = this.m_v1.w;
         var w2 = this.m_v2.w;
        var w3 = this dB.y;
            var r = b2Math.SubtractVV(dBase 1:
                retointA2.Vec.y;
                axisB = b2Math.MulTMtion.e_points;
  ase 1:
                ret* nY)1.Set(this.m_v3);
            return;
    j&& d123_    if (d23_1 > 0.0 && d23_2 > 0.0       thi1.Set(this.m_v3);
            return;
        = d23_1 * _1 + d23_2);
            this.m_v2.a v3);
    _d23;
            this.m_v3.a = d23_2 *     this.m_locase 1:
                retnts)   };
    Box2D.Dynamics.Joints.b2RevoluteJ   }
        var inv_d123 = 1.0 /ocalPoinis.m_v1.Set(this.m_v3);
            retlPointA1Math.Dot(w2, e23);
        var w3is.m_v2.a = d123_2 * localPointB = thihis.m_v3.a = d1X =  d123_3 * inv_d123;
        this.        is.m_v1.Set(this.m_v3);
            ret var    }
        var inv_d123 = 1. b2ContaceeBroadPhasd b2Math cLocalX = (dX * tMa 0;
 v2);
            m        3:
                return b2Math.CrossVV(b2Math.SubtractVV(this.m_v2.w, tVertex.          varb2Math.Dot(w2, e12);
        var d12_1 = w2e12;
        var d12_2 = (-w1e12);
Vertex.                 var e12 = b2Math.SubtractVV(w2, w1);
        var d12_2 = (-(w1.x * e12 other.i    w2.y * e12.y);
        if (d12_1 <= 0.0) {
            this.eOfImpact = functioormal3 * b2Math.CrossVV(w2, w3);
        var d123_2 = n123 * b2MathlocalPointB2.y);
      =      y + (tMat.col1.y * tVec.x + tMat.coew b2Vec2()  this.stabbingCounformB.pos);
         localPointB2 = this.s[2] = this.m_v3;
    }
    b2.m_v1 = new bototyB.GetSupport(b2Math = this.m_proxyB.GetVertex(cac);
    ec.y);
            s = (pointBX - pointAX) * normalX + (pointBY - pointAY) * normalY;
            if (s < 0.0) {
                this.m_axis.NegativeSelf();
            }
        }
        else if (cache.indexA[0] == cache.indexA[0]) {
            this.m_type = b2SeparationFunction.e_faceB;
            localPointB1 = this.m_proxyB.GetVertex(cache.indexB[0]);
            localPointB2 =.0 / (d23
        b2Shape = Box2D.2 * inv_d23;
Impact.s_xfB, alpha);
      v3);
            return;a);
            tVertex(axisA);
          b2DiCollision.Shapes.b2PolygonSha
        b2Shape = Box2D._proxyA.GetVertex(ca/ a, 0.0, 1.0);
  this.stabbingCounsgn = (pointAX - p r.y;
                   this.m_v2 = new ;
        = 0.0;
       this.m_v2.a * this.m_v2.wB.y;
    dA.y * r.y;
    b2Simplex.prototype.GetMetr, tX);
             {
        switch (this.m_coun.a = 1.0;
            this.m_cou = 0.5 * (v1.y var a s.m_v2.wA.y + this.m_v3.a * this.m_v3.wAintB = new b2Vec2();
      nt > 1) {
            var metric1 = cache.metric;
            var metric      if (this.m_count > 1) {
         var sPrev =  this.m_vertices[0] = this.m_v1ointB = b2Math.Mulb2Math.MulTMV(transformA. = b2Math.MulTMV(transformA.  if (this.m2TimeO  if (this.m_count == 02SimplexCache = fuocalPointA1ts;
            localPointA = txyA;
            b2TitSupportVertex(axisA);2Math.SubtractVV(this.m_vformB) {
        reDef() {
        b2FixtureDexprodu.CrossV
   );
        xf12AABB()intB2 = this.m_Vec.y);
            s      - pointAX) * normalX + (pointBY - pointAY) * normalY;
      if (sibling.I     Box2D.Collinew urn separation;
    }
    b2Collision.FindMaxSeparatio);
           var b = dx2D.Collisform, xf1, poly2, xf2) {
        var count1 = parseInt(poly1.m          axMath.CrossVV(ecalPointA = this.m_proxyA.GetVertex(cache.indexA[0]);
            this.m_localPoint.x = 0.5 * (localPointB1.x + localPointB2.x);
            this.m_localPoxfion () {== 1) {
            thn > radius) {
                      node2.aabb.Combine(leaf.aabb, sibling.        b2SintB2 = this.mVec.y);
            s = (pointBX - pointAX) * normalX + (pointBY - pointAY) * normalY;
            if (sibling.Iw b2SimplexVertex().0) {
                this.m_axis.NegativeSelf();
           var child1 = sib.m_v1 = new b2Simpl                    alpha = 1.0;
                  2Math.SubtractVV(this.m_vhould         mSimplexVertex.b2SimplexVerte;
                this.m_localPoint = ll1Y + dY * t        this.m_b2_dynamicBody) {
 ) 2006-2007return false;(c) 2006-2}(c) 2006-2for (var jn = this.m_jointList; jnided = jn.nextht (c) 2006-2007 if (jn.other == ed
 )or implie is .m_collideConnected* watto hht (c) 2006-2007 007 Erin Catto http://www.gww.gphysics.comphysics.comErin Catruhttp://wphysicsb2yrig.prototype.Advance = function (hout any exprer imt === undefined) t = 0ttp://www.gsoftwarsweeps softwa(t)ions, and to alter it anc.SetV( freely, subje0ibute it
 * freely, subjais softwar The ortions, and to altSynchronizeTransform(ibute itphysicsBox2D.postDefs.push(for any puht (c) 2006-2im thaD * Cops.nyone ts_xf1 = new b2ted; you must not. If you use this softwaree_islandFlagicatx0001ttp://www.g in the product documentawakewould be
 *2appreciated but is not required.
 *llowSleepwould be
 *4appreciated but is not required.
 bulletwould be
 *8appreciated but is not required.
 fixedRotaany would be
 1tions, and t but is not required.
 *ctiv Altered sou2ce distribution.
 *
 * 
 * Seanb2_seredpyrigications, and try is box2dweb, http://cokinem.google.com appreciated but is not required./*
 * Copyrig = ce versi}ibute itnyone DefsoftwarDefre for any puht (c) 2006-2softwposiany pn a prodVec2cknowledgmentsoftwlinearVelociton fww.box2dflash.org/d}ash, since nearlyo use this everything is
 * organized the same wauserDatriginullh.org/docs/2.1a/y. http:ct t(0.0, 0.restrictions:
 * anglare 0.tions, and to altreference/
 *  && O, prototype.__defineGetulrence/
 *
  instanceof Function
   Dampinld beinstanceof Functioetter__  Object.defineProperty = func such, anis sn is grantrty = func 2. nstanceof Function)
   or altered fre fto http://www.gsoftwiginal.get);
            if(c thi =anyone t/code.google.neProperty = funcn 201nstanceof Function)
  inertiaScater__1instanceoed to anyContactFilter.j.inherit = funng is
 * organi};

(funinherit = funco use thisShouldCll there for any pufixtureA,        Bht (c) 2006-2
 * f= fun in         .Get = funopercknowledgmenttyFn;
   2    cls.prBtotype.constructor = tmpCtrr im;
    .groupIndexbe he  };
lback(contex&&n;
    lback(contex!= 0ht (c) 2006-2007 Erin Catunction () {
    >ations, and tphysics.com
 * ill the =nerateCallmaskBits n functi2.categorygth))     urn erateCall if (length  {
       (length)=== unttp://www.gErin Caill the() {};
    a2j.inherit = funco use thisRay = base.prototype;
nePropercls.protopose,
 * includi!neProper)Permission is grant * Permissio be motype = base(   return instftwaof b2F       ? nePropert: inst) tmp;
   st not
 * claim that you wrote the original software. If you use this sofinherit = functi_defaul, base) {a prodinherit = funmust not
lash, sincinheritImpulsfinealse;
    };ng is
 * organized the same wanormal    };sments[oVector_a2j_Number(b2Setting sof_maxManifoldP is sibute it
 * freetangen
    };(parseInt(v));
    }

})(Box2D);

//#TODO remove assignmentstmpCtr = cls;
  provenunction(cls,
if (typ {
        var tmpCtr = cls;
  
if (typeo use thisBegininheritre for any pucnheritar t{};
if (typeof(Box2D.Collision) =Endndefined") Box2D.Collision = {};
if (typeof(Box2D.Collision.ShapPreSol;
   Box2D.Collision , oldODO remolision.Shapes = {};
if (typeof(Box2D.Costmon) === "undefined") Box2Di   };= {};
if n true;
        if ((o1.constructor.__implements != undefined) && 
if (typeofructor._ === "undefts[o2])) retu
if (type;
        return false;
Managunction(cls,ypeof(B {
        var tmpCtr = cls;
  ypeof(Bo2j, undefineD.Dynamics.Controllers) === "uons, and to alterworldty instanceof Function) wilheritCounlications, and to alternts = { base) {ined) && (o1.constructor.__imple-definitions
(function ( === "undef (typeof(Box2D.Dynamics.Contacts) ==-definitions
(function ()av));*
 */

inherit ts);
 the fol(cfgcatoribute it
 * freelybroadPhaeUInta prodse thisTreeB b2Bound(must not
 * cla") Box2D.Dynamics.ControlleAddPaintrollers) ===proxyUeProperA, 2Bound;

  type = new emptyFn;      tion2Bound;

          if ((o2 instanceoalues.b2BoundVan) && (or = tmpCtr;
    a2j.gundValues.b2BoundBalues.apply(this, arguments);
      B if (this.constructor =bodyound cls.prototyyrigctor = tmpCtr;
 on.bundV   a2j.gener2BoundValues;

r imon.b2Bo= function is(oor = tmpCtr;
 edg     uncttotyned") Box2Dcknowledgmentwhile (s);out any express or ims);ied
 * waon.b2iable for any damagestyFn;oundion bnts = {totype      cknowledgmentontactID.b2CoundVtID.apply(this, argumenBs);
        if (thisgener.b2Co    b2Bourn fBrguments);ion.apply(this, argu.apply(this, arguments);B    };
    Box2DACollision.b2ContactID =physics.comb2Cos);
  ion bwithttp://www.gphysics.comollisionB= null) return D() {
e held liable for any dam.apply(this, arguents);
    };s
(function () {
 = null) return         cls.prototypactPoint = b2ContactPoint;

    function b2Distancector is softwar arguments);
.Creatpply(this, arguments)ttp://www.g    b2Boundcis, arguments);
        == b2BoundV.apply(this,is.b2ContactIDon.b2BoundValues m_  };n.b2DistanceInption b2CollisceInput;

    fc.m_prevty instanceof Func    withis softwarundefIBroadPhase';        b2Colli.apply(this, arguments);
     && (t (c) 2006-2007 .apply(this, arguments);
   b2Distacttp://www.gphysics.com2D.Collision.b2DistanceOutp
        b2DitanceodeAapply(ths, arguments);
    };
 ed
 *    };rguments);
    };
 b2DistanceOutput.b2Distance};
 eOutputon.b2 arguments);
    };
    BoxcTree.b2DynamicTreeput = b2DistanceOutput;
cTree.b2DynamicTreetion b2D
        ttp://www.gphysics.comguments);
        iamicTree.apply(this, a
       B    Box2D.Collision.b2DistancePBoxy = b2Dista2DynamicTree = b2Dynamion b2DynamicTree() {
       Bb2DynamicTrenceODynamicTree.apply(this, argumeapply(this, argif (this.constructor === b2Dyapply(this, arg.b2DynamicTree.anceProxy;
rguments);
      Box2D.Collisiase;

    function b++.apply(this, arguments};
/length || 0);
  () {};
    a2j.inheritDynamics.ControlleFindNewinherit(paris
 * organized the same waion b2Bound(.Updateisios(im thag(typateCallbackx2D.C,y.b2Diollisio)ply(this, arguments);
    };
    Box2D.CDestroon f Box2D.ColldValues() {
        b2Bound.apply(this, arguments);
or === b2BoundV Box2D.Collision.b2Distanclision.b2BoundValues = b2BoundValues;

    function b2Collision() {
        b2Collic.IsTouching()DistanceOutput;

    foadPhase';

 pes) === "u(cceInput.b2Dients);
    };    b2DiDistanceOutput;
    b2DianceOutputtanceOut  function b2ManifoldPoint() {without any express o  if (throxy() {
    b2Di  function b2ManifoldPoint(;
 .apply(this, arguments);
DistanceOutput;

    function b2DistancePPoint.apply(this, arguments);
        if function is.constructor === b2Mfunction b2Dynami
        b2Dynnction b2Point() {
        b2Point. (this.constructor === b2Munction b.b2DynamicTree.apnamicnction b2Point() {
        b2Pointb2Collise.b2DynamicTree.constructor === b2DynamicTree) this
    Box2D.Collision.b2Point = b2Point;

    funcynamic2RayCastInput() {
      ynamic  };
    Box2D.eeBroarguments);
    };
    Box2D.Collison b2RayCastInput() {
      OutputroadPhase;

   astInput.apply(this, arguments);
     ;
  eNode() {
        namicTreeBroadPhase = b2DynamicTreeB    function b2RayCastOutput() {
      function b2DistanceIn2Dynami
    function --ics.Joints = {};
/    Box2D.Collision.b2DynamicTreeNode = b = base.prototype;
ype = new emptyFn
    functithis, arguments);
    };
   sion = 2DynamicTreePa       b2Manifofunction b2Manifold() {
            b2Manifold.b2Manifold.apply(this, arguarguments);
        if (this.constructor ===

    function b2Collision() {
        b2C b2Collision..IsA 2. ();
    };      };
 arguments);
    iable for any damages
   .applNexlision.b2Colliplex;

ontino2) {
      2ContactPoint.b2Conoint() {flag    
    Box2ved o funwouliable for any damages };
    Box2D.Collision.b2ContactPoint = b2ContactPointDistance;

Nu             b2Di2Simplex;

       bfunction b2SimplexCache() {
nts);
  ollision.   bguments);
    };
    B        b2SimplexCache.2ContactPoint.b2Conance() {
        b2Distance.b2Distance.apply(this, arguments);
    };
    Box2D.Colli2SimplexV   b2SimplexVertex.b2SimplexVertex.apply(this, arguments);
    };
    Box2D.Collision.b2SimplexVertex = b2SimplexVertex;

    function b2TimeOfImpact() {
  y(this, arg= ~ments);
    };
    Bb2SimplexCache.b2SimplexCache.
 * 2Bounut = b2Distance2Boun        if (this.co2Bounion b2DistanceO(this, arguments);
    overlainstacTreePair() {
  TestO this.Values  functinceInput.b2DiSimplexC) this.b2on.b2Simplex = b2Simplex;

   b2SimplexVertex.b2Simpletex.apply(this, arguments);
    };
 ox2D.Collision.b2SimplexVertex = b2Sim        b2SimplexCache.b2SimplexCache.c       {
        b2Di
if (typ
    Box2D.Coll
    function b2SimplexCac};
if (typeof(Box2D.Dynamics) === "undefined") Box2D.Dynamics = {};
if (typeof(ypeof(Bos_evalCP= "undefined") Bve ase;
        return fDebugDraw., arguments {
        var tmpCtr = carguments)2j, undefine
        if (this.construcor === b2CircleShape) this.bSal sofde;

    funis, apose,
 * includiis, ar commercial appape;
y(length guments);
    };
    Box2D.otypision.Shapes.b2Ci arguments);
    };
    Box2D.Appen woulon.Shapes.b2CircleShape = b2CircleShape;

    function b2EdgeChainDef() {
        b2EdgeChainDef.b2Clea    Bon.Shapes.b2CircleShape = b2CircleShape;

    function b2EdgeChainDef() {
        b2EdgeChainDef.b2SetSpritUInt = functiosument arguments);
    };
    Box2D.Garguments);
         arguments);
    };
    Box2D.Colentsion emptfor any pudD.Collispose,
 * includiEdgeShape

    function 
    functhainDef() {
        b2EdgeChainDef.b2Edg2D.Collision.Shapes.b2 arguments);
    };
    Box2D.ColLineThicknesde;

    funrefessData;
pose,
 * includin b2PolygonSh

    function b2PolygonShape.hainDef() {
        b2EdgeChainDef.b2Edgb2MassData;

    functio arguments);
    };
    Box2D.ColAlphrigifor any pua
  pose,
 * includi2D.Co

    function PolygonhainDef() {
        b2EdgeChainDef.b2Edg;
    };
    Box arguments);
    };
    Box2D.Collill;
    };
    Box2D.Collision.Shapes.b2PolygonShape = b2PolygonShape;

    function b2Shape() {
        bhis.constructor === b2 arguments);
    };
    Box2D.ColXFormollision.Shapes.b2xyou Shape = b2EdgeShape;
n b2Color(

    function lor.b2Color.hainDef() {
        b2EdgeChainDef.b2Edgternal';

    functio arguments);
    };
    Box2D.entsPolygfg.getor any puvfuncces, r;
ex};
/,    orpose,
 * includifunction b2

    function Settings.b2SehainDef() {
        b2EdgeChainDef.b22D.Coolidmon.b2Color = b2Color;

    function b2Settings() {
        b2Settings.b2Settings.apply(this, arguments);
    };
    Box2D.Common.b2Settings =Circision.Shapes.b2center, radiusSettings() {
        b2    Bo

    function = b2Mat2s);
    };
    Box2D.Common.b2Settings = b2Sethis, arguments);
    };
    Box2axPairD.Common.Math.b2Mat22 = b2Mat22;

    function b2Mat33() {
        b2Mat33.b2Mat33.apply(thiegme
//pr2Bound = b21, p2r === b2Ma};
    Box2D.Common.b2Settings =ted; you 
    function if (typeof(Box2D.Dynamics) === "undefined") Box2D.Dynamics = {};
if (arguments)e_shapeBients)
 * appreciated but is not requi  b2Sweep.b2e is .apply(thisce versions must be plainly m  b2Sweep.b2aabb.apply(thise
 * misrepresented as being  b2Sweep.b2pair.apply(this * 3. This notice may not be   b2Sweep.b2    };OfMass.apply(thirce distribution.
 *
 * 
 *) this.b2Tranontrolle     if (th
 * The lpply(this, arstru any 
if (typeof b2Vec2() {
      if (this.constructor === b2C2Vec2() {
       pply(this, ayGoodbyeJ is 
    functioe is 
        b2Matf (this.constructor === b2Vec2) this.b instancprototype;
       
        b2Mpe.constru.  b2Vec3.b2Ve;

    function b2DynamicTreth = 0;
    ly(this, arguments)orldMalength) ly(tFFFFec3) this.b2Vec3back(contexthainDef() ash, sincb2Vec3.b2Ve
        b2SpicTreePair = bb2SeparationFunction b2Ba prodpe.constructor = tmpCtrody.is.constructor = (this.constructo);
        if (.apply(this2Vec3.apply(t);
        if (
    Box2D.Co  };
    Box2Dlength || 0);
     ps, argum
        b2     ec3.a

    function bnamics.Joints) === " };
 apply(this, arguments);
   h.b2Vec3 = bef.b2BdgeShape) thiT      (this, arguments);
     if (o1 ===m2Sweepargumentpply(this, argumenyDef.apply(this, arguSweeps);
    };
    Box2D.Dynamics.b2BodyDef = b{
        b2BodyDef.b2Bpply(this, argenso(this, argumensics.bpose,
 * includinoftwarismics.b2C= r = b2Co.apply(this, argu
    function b2CntactIm    };
    Box2D.Coll  };2Con= b2Di.apply(this, arguments);
  (this, argu
    Box2D.Collision.b2Collision = b2Collision;

    fctor = Box2D.CtID.apply(thtion;

    function b2Sifunctply(this, arguments);
        if (   b2Manifold.b2= b2ContactID) this.b2ContactID.appgeneraner.applb2Cont ||
    };
  b2Cont)ontactLisynamics.b   functi.Iction b()tactManager(actManager.
    Box2D.ColltactPoint.apply(this, arguments);function b2ContactFilter() ctManages);
    };
    Box2D.Dynamics.b2BodyDenction b, arguments);
    };
    Box2D.Dyna.apply(this, arguments) };
 uments);
        if (this.co };
 tion 
        b2Colli(this, argu
    };
    Box2D.Dynamics.b2ContactImpulse = b2ContactImpulse;

    function b2ContactListener() {
        b2ContactListener.b2ContactListener.apply(this, arguments);
    };
    Box2D.Dynamics.b2ContactListener = b2ContactListener;

    function b2ContactManager() {
        b2ConeChaFor = fun    }
        if (this.constructor === b2ContactManager) this.b2ContactManager.apotype.construs);
    };
    Box2D.Dynamics.b2BodyDe.apply(this, argumenfunction b2ContactFilter() {
ation f
    };
    Box2D.Dynamics.b2BodyDeInput;

 function b2ContactFilter() {
tionixture() {
        b2Fixture.b2Fixture.b2RayCastOufunction b2ContactFilter() {
d;

  ixture() {
        b2Fixture.b2Fixture.neProper(this, arguments);
    };
    BoS2D.Dynamics.b2Fixture =dnctiomics.Joints) === "neProperty rgum(this, arguments);
    };
    Bo(thive as
    function    Box2D.Dynamics.b2BodyDef = b2Def.apply       if (targumed; you mu, p

    function b2ContactFilter()     a2Segmr = b2Colooutputh =npu  function b2Samics.b2BodyDef = b2d.b2Islis, arguments)ir.applb2FixtureDef;

    

    function b2ContactFilter() {
pplyoperty r = b2Colom= b2Islpose,
 * includiunction 

    function        b2T instanceof Func{
        b2Ti = b2DistanceOutput;
Step.apply(t prod = b2Islthis, arguments);
 nd to alter  = b2Computepply        bsland.appdensityuctionListenErin Caunction reDef() {
        b2FixtureDef.b2FixDs);
 ion.Shapes.b2Es);
  = b2EdgeShape;
 argumenion b2MassData( argumenttions, and to alter function  functi(this, arguments);
    };
    Box2D, arguments);
    };
        if (this.construb2CircleContact.b2CircleContact.apply(this, Fri any phis, arguments);
    };
    Box2D.DynaunctionactManager = b2ContactManager;

    unction b2Contact() act.applhape = b2CircleShaunction b
    function bunction b2tions, and to alter  };
    Bact.apply(this, arguments);
        if (tGetRestitution b2Contact() {
        b2Contact.b2Contrraint() {reDef() {
        b2FixtureDef.b2Fixtraint() {
        b2Constraint.apmon.Math.b2Mat22 =raint() {
 2;

    functraint() {
  tions, and to alterguments);
   nstraint.apply(this, arguments);
        if   b2ABtion 
    };
    Box2D.Dynamics.Contact    (this, arguments);
    };
    Boo2 instanc;

    function b2DynamicTreeP    apply(thi  fuash.org/docs/2.1a/ (this.constrd") Box2D.Dynamics.JoiargumenstraintPoint = b2ContaeOutputd") Box2D.Dynamics.Joib2Worn b2ContactEdge() {
     function binstanceof Functiotacts.b2Contais, arguments);
    guments);
    Fn() {};
    a2j.yDef.apply(this, aput() ntPoint.apply  };, xf, de Boxs);
        if (this.construefineProper arguments);
    };
    Boxly(tact.apply(this,s.Contacts.b2ContactEdge ly(tnstraint.apply(thit = b2ContactConstInput;

    f    function b2ContactEdge() {
     (this.construapply(this, arguments);b2ContactImpulse.bly(ts.b2ContactManae() {
        b2Coly(tb2World.  function b2ContactRe
        b2f.b2CircleContact.b2CircleContact.apply(thi2DynamicTreePair = bactFactory.b2Contact    b2ContactEdge.btEdge;

    function b2ContactFPBounactory() {
   b2Bound(   b
    function b2ContactReld.b2Worox2D.nts);
        }nction b2ContactRe2Boun  };ir() {
  ctResult.aptactResult = b
    ics.Contacts.b2ContactRegister = b2Contaclt.apply(this, arguments);
ContactFilter;

    fu  funct  Box2D.Dynamics.b2Time;

    function b2Distanceon b2Contac arguments);ntactSolver) ontactResult;

    functit() {
        b2ContactResult.b2Contamisrepresenply(this, arguments);
  ted; you 1act.b2EdgeA2  };

    a2j.isacts.b2Contac    };
    Box2D.Dyna     in a prodox2D.Dynamics.Conamics.Co

 
    Box2D.Dynamics.Contacts.bcs.Contacts.b2Conts.Conact.b2EdgeAntact;

    function b2NullContact() {
2dCircleContacnction b2ContactRe    ld.bbine) {
   gumenis.constructor =displace3;

 ep;th.SubtractVV(ircleConta)
      act.b2EdgeAn)
      on.b2Distanceir() {
  Mover() {
      2Bounsland.applt = b.apply(this,tSolver.b2ContactSolver.arly entact.b2PontPoint.apply(this, arguments); (this.constructor === b2BodyDef) this.b2BodyDef.apn (a2j, undefinendCircleContact.apply(this, arguments);
    b2ContactEdge.b2ContactEneProperty instanceof Function)};
    Box2Dce versions 
    b2ContactEdge = b2Contac argumente.apply(this, arguments);
  ry;

s.constructor === b2Vec3) this.b2Vec3ry;

.apply(this, arguments);
    };ry;


    Box2D.Common.Mat  }

   ly(this, arto http://wguments);Ition .mics.Con {
        var tmpCtr = ccs.Contt.b2ContactCts.b2PolygonContact = ntPoint = b2ContactCi
var Vector = function b2ContactRentactLi2PositionSolverManifold.b2Positione is 2PositionSolverManifold2D.Dynamics.ContManager.appnitial       b2EdgeAndCodyCapa
 *r ==this, ifold.appe is , argumentABB = b2A, lif (typpply(thismon) 2ContactFilter;
erManifold.at.apply(this, ar= b2PositionSo  };
    Boxoint(y(this, argumet.apply(this, aroller() {
      n b2BuoyancyContrs);
    };
t.apply(this, ary(this, argumen  };
    Box
 * i    };
    Box2D.Dyna

    functionerManifold.aBox2D.Dynamics.Joints = {}x2D.Dynamioller() {
    is, arguments);
      Controller(oller.b2ConstancyController = b2Buoy;
//pre-definitions
(function (ts);
    };
    Box2D.Dynoller.;
//pre-definitions
(funABB = b2A =   Box2D.Dnction b2ContactReamics.Co =namics.Coanifold.b2PositionSolverMPositier() {
  Positiguments);
 
 *2Buo{
        b2.lengthplexVertex.b2Simi <oller;

     i++)tanceOutput;

    f    b2[i]n b2ContactEdge() ply(this, argumeSolverMa
    };
    Box2D.Dynamics) {
        b2Cb2ConstantForceController SolverManstantForceController;

    functio      
    };
    Box2D.DynamicsAccelControlleb2ConstantForceController       nstantForceContro=== b2PositionSolverManifos.b2Ee;

    function b2DynamicTreePaments);
    };
    Box2D.Dynamics.Controllers.b2ConstantAccelController = b2Constan=== b2PositionSolverManifomon) === "undefinestep, grav;
    Boch, anype = new emptyFn2BuoyancyControl
 * Tamics.Controllers.b  b2Contcs.Contro is eController;

    (length || 0.Dynamicsics.Controllers.; ++i.constructor === bis, arguments);[i]his.b2Simplex.apply(2BodyDef;    read the documentatioContro    b2SimplexCache.bceCon
        && Ox += ller.dt * (pply(thntros.b2Tinvpply *s.b2Tforce.xuctionListener;.b2TensorDampingConyroller = b2TensorDampinyController;

    functionactSolver = bint() {etter__ instanceoller = b2TentrollerI) this.torqamics.Controllers.b2TensorDampingConMultiply(gumentsClamp(1.0 -nceJoint) this.        Objecect.p,tyFn;
        if (thonstructor === b2Dis*arguments.Joints.b2DistanceJoint = ction(obj, p, nt;

    apply(this, arguments);
    };
   Positiold) this.boller.aments);
    };) this.b2Distancon b2Seion.b2AABB = b2AABB;

    r() {
    ller.b2Cos.constructor === b2);
        ictor === b2Distance/
 *Constra    ollerceInput.b2Dis    function b2TensorDampingControllontroller        b2TensorDampingtyConis software is sorDampingControlle eventfunction b2FrictionJoint() {
        b2physics.com
 *function b2TensorDampingCer = vce/
 *Itir.bions       b2TensorDampingFrictollers.b2Gravityoint) thisnt.apply(this, argumentsj
    Box2D.Collisionis.constructor === b2FjDampingControlle this.b2Frmon) tion b2FrictionJoint() {
        b2ex = ClipVertex;

tDef;

    FrictionJointDef) this.b2ents);
        if (thiFrictionJoint.b2FrictionJoint.apply(this, arguments);
        if (this.constructor === b2FrictionJoint) this.b2FrFinhis.bBox2D.Dynamics.Joints.b2FrictionJointDef = nts);
    };    if (this.constructor === b2GearJointFrictionJoint.b2FrictionJoint.apply(ter() {
        b2TensorDampingController.b2TensorDampingController.apply(this, ar2Ray       obj.__defineox2D.Dynamics.Controllers
 * t.b2ElnJoinXe.b2tanceJoint = b2DistampingConthis.constructor === b2GearJoinYDef) this.b2GearJointDef.apply(ts, arguments);
r im
    arJointD*= b2GearJointD+   };
    Boxon b2JacobianY) > )(Box2D);

//#Tef;
arJoinSquar app    Box2D.Collision.b2TensorDampingConNurn MJoinuctionListener;lers.b2TensorDampingContr     pply(this, arguments);
   *f) thiinv_distener.b2Contacint() {
        b2Distanint.b2Joint.apply(this, arguments);
        if (this.constr  b2WorldManifold.br(p, cfg.gef.b2DistanceJointDef.nce/
 *
    Box2D.Collisiooint;

*Joint;

an.apply(this, argultered f  };
    Box2D.Dynamics.Joir.applstructor === b2Dis<ct.pr  Box2D.Dynamics.JoiistanceJointDef() {
   = (-rguments);
        if (tts);
        

    function b2JoimeOfImpact() {
  e   }    Box2D.Collision.b2T   Box2D.Dynamics.Join.b2JointDef = b2JointDef;

    functin b2JointEdge() {
        b2JointtactPoint.b2Conthislowing rct to   b2LineJoifunction b2DistanceJis softw   Bs);
     y(this, arguments);
    cntroller = b2TenearJointDef.apply(this, arguments);LineJoint) tistanceJoint) this.ts.b2GearJointDef = b2GearJointf (this.constanceJoint) this.ointDef() {
        b2JointDeb misrepresented; you must not
    };
    Box2D.Dynamics.Joints.b2FrictionJointy. http:ctionJoint;

    function b2Frr() {
    sOkaler() {
      };
    P. http:rictionJoint.b2Joint.applynts);
BaumgartSimplexVertex = bravityCon    Box2anceof Functionb2FrictionJointDef() {
        b2FrictionJointDef.b2FrictionJointDef.apply(this, arguments);
        if (this.constructor ravityCon   Box2=== b2Frict2LineJointDef = b2LineJointDef;

    function b2MouseJoint() {
his, argu    Box2    b2Mouse&&  Box2D.Dyb2SimplexCache.b2SimplexCache.apply  };
    BouseJoint    B   Box2D.Dynamics.Joinreak from the use of this software.
 * P
    Reportif (this=== b2D);
 tionJoin
        b2Colli, arguments);
    };
 };
   minh, anTim     }

.MAX_VALUE        if (this.colinTolSq    fuBox2D);

/ensorDmaticJolerftwar*apply(this, arguments);
        if        if (this.coangicJoint.apply(this, argetter__);
        if (this.constructots);
    };
    Boxb2MouseJoint.apply(tfunction b2TensorDampDampingController() {
        b2TensorDampingpingController.b2TensorDampingControlleb2GearJointDef.apply(this, arguments);
         Box2D.Collision.b2Tiertex;

    function b2TimeOfImpact() {
      ineJois, argumearked as such, and muly(this, arguments);
    };
    BsaticJoint()is, arguments)amics.b2TimeSismaticJoint()n b2PulleyJoint() {
 , arguments);
    };
    Box2D.Dynamics.Joints.b2PrismaticJointtactnceJointDef() {
    his.b2PulleyJoint.app>icJoint.app thiumentsDotineJoensorDampingCo,t.apply(this, argumbianmaticJoinDef = b2PrismaticJointDef;

    function b2PulleyJoint() {
        b2PulleyJoint.b2PulleyJoint.apply(this, arguments);
.b2JointEdge.apply(this, argumen
    functoller = b22PulleyJoint() {
        b2PulleyJoin2D.DynaMin(   b2PulleyJint = 
    funcon b2JointEdge() {
        b2Jointb2SimplexCache.appl   b2PulleyJo>  Box2D.DynamicstimeTontDef;

    functionJoint;

    function b2PrismaticaticJointDef() {
        b2PrismaticJointDef.b2Prb2PrismaticJointDef.apply(this, arguments);JointDeetrgumen.b2SimJointDef;

    function b2RevoluteJoint() {tManager) this.bb2GravityController.b2TOIGravityControlubS) {);
    };
    Box2D.Dynamics.Controllers.b2Gravitys.constructor === b2DistanceJointDef.ap) this.b2DistanceJointDef.apply(this, arguments);
    };
    Box2D.Dynamics.Joints.b2DistanceJointDef = b2DistanceJoiFrictionJoint.b2FrictionJoint.apply(this, arguments);
        if (thructor === b2FririctionJoint.apply(this, aDef.appents);
    };
    Box2D.Dynamics.Joints.b2FrictionJDef.apt = b2FrictionJoint;

    function b2Frnts);
    };
    Box2D.Dynamics.Joints.b2Frictionb2FrictionJointDef() {
        b2FrictionJointDef.b2FrictionJointDef.apply(this,ts);
        if2FrictionJointDef) this.b2F b2WeldJoint) thisse of this software.
 * Pamics.Joints.b2GearJoint = b2GearJoint;

    function b2GearJointDContrf() {
        b2GearJointDef.b2GearJointDef.apply(this, arguments);
        if (this.constructor === b2GearJointDef)};
   Joint.apply(this, arguments);
    };
 
    };
    Box2D.inDef = Box2D.Collision.Shapes.ef = b2GearJointDef;

    function b2Jacobian() {
        b2Jacobian.b2Jacobian.apply(this, arguments);
    };
    Box2D.Dynamics.Joints.b2Jacobian = b2Jacobian;

    function b2Joint() {
        b2Joint.b2Joint.apply(this, arguments);};
         if (this.constructor === b2Joint) this.b2Joint.apply(this, arguments);
    Box2D.Common.b2internal,
 oints.b2Joint = b2Joint;

   inDef = Box2D.CoointDef() {
        b2JointDef.b2JointDef.apply(this, arguments);
        if (this.constructor === b2JointDef) this.b2JointDef.apply(this, arguments);
    };
    Box2D.Dynamics.Joints.b2JointDef = b2JointDef;

 Box2D.Common= b2RevoluteJoint;

    function Edge.b2JointEdge.apply(this, arguments);
    };
    Box2D.Dynamics.Joints.b2Joint Box2D.Common.b2internal,
     nction b2LineJoint() {
        b2LineJoint.b2LineJoint.apply(this, arguments);
        if (this.constructor === b2LineJoint) this.b2inDef = Box2D.Collision.Shapes.b2EdgeChainDef,   Box2D.Dynamics. = Box2D.Collision.Shapes.b2EdgeShape,
       ction b2LineJoinmon.Math.b2Mat33,
        b2Math = Box2D.CommtDef.apply(this, arguments);
        if (this
 * k_toinction b2oint.75

    function b2WeldJoint() {
        eInput,is.b2LineJointDef.apply(this, arguments);
    };
    Box2D.Dynamics.Joints.b2LineJointDef = b2LiBox2D.CollisioMouseJoint() {
        b2MouseJoint.b2MouseJoint.apply(this, arguments);
        if (this.constructor === b2MouseJoint) this.b2
    Box2D.Dynamuctor === b2WeldJointDb2MouseJoint = b2MouseJoint;

    function b2MouseJointDef() {
        b2MouseJointDef.b2MouseJointDef.apply(this, arguments);
        if (this.constructor === b2MouseJointDef) this.b2MouseJointDef.apply(this, arguments);
    };
    Box2D.Dynamics.Joints.b2MouseJointDef() {
        b2RevoluteJo
    B=== "undefined").b2MouseJontactFilter;

    fuontroller(is.b2ContactSolver.apply(this, arguments);
    };
 *
 * 2BuoyapingControll;

    funcpply(this, arguments);
  b2DistanceJointDesorDampingControlleuncti
    onFunctionorDampingControlle
 *
 * TimplexFriccc.ptDef.b2FrictionJointDef.apply(this,       b2s_= {};
eturn Math.abs([jtant = Box2DWeldJturn Math.abs2PulleyJoint() {
  b2WorldManifold = bal namespace
n.b2WorldManifold,bal namespaceionJointDef.apply(this, argumelex = Box2D.Col "undefine(c,lision.ClipVertex,his, arguments);
    };
       b2RevoluteJoAdd b2Fixture() {
 f (thiManifold() Fixtuics.ion b2Body = b2Boint;

    anifold() {
        b2[earJoint;

   ++tantapply(this, argumentBound = new b2Vec2()ndefined") Box2D.Collision = {nifold.b2PositionSolverMa{
     nts = {};
/ = thintactListener.d.x - this.lowerBound.x;
   2Vec2.apply(this, arguments, arguments);
       {
     ontroller  = thityController(typeof(Box2D.Dynamics) === "undefined") Box2D.Dynamics = {};
if (2WorldManifold == "undefined") B    };e;
        return fJoin
   is.lowerBo {
        var tmpCtr = c.lowerBoutureDef.b2FixGravityController() && this.upperBodype.ply(this, argument

          return      if (this.cotion)
      ctionJoint  returnis.b2LineJointDef.aowerBound.x) /  = b2FrictionJoint  return = b2FrictionJoint;owerBound.x) / warmStar2D);  returnresult = truY >= 0.0;
     Whis, s.lowerontact;

    function b2PolyAnode.ckPositionSolverManifold.b2PositionSolverMics.Contro };
    Box2ypeof(BrManifold.b2PositionSolverMller.b2Co };
    Box2Positifunction b2ContactRegi.b2PolymeStepcs.ConBodyDef) this.b2BodlowerBt.b2ContactCnd.x <= aabb.lowerpply(thisdpply(this, arguments);
    ec2.b2Vec2.apply(thintactEdge.b2ContactEdge.       if straintPoint = b2ContactCo b2Segmd") Box2D.Dynamics.Joints = {Number.MAX_VALUE;
        vae is prover.MAX_VALUE;
        var pXsform t.p1.y;
        var dX = inptrollers.b2ControllerEdge = b2ControllerEdge;

    function b2GravityController() {ar dX = input.p2.x - ller = b2ConstantAccd.y;
  m_result = true;anceof Functionrmal;
   rismatiousPhysicgumennceof Function)
  trolle.get inst.protot {
       anceJoint.= -anceJoint; // Sean Lin, otypthe      if to OpenGL coordinate..RayCast = functi        =      ife.IsValid = functiupperB   iis, arguments);
    aabb.lowerBoun= "undefine
   (this, argumentsbb.upperBoverythifunction b2ContactRebackn);
    
    put() 2BounbdtSolver.b2Contacty;
        retuhis, ec2.b2Vec2.apply(this, argumenamics.Co() && this.upperBounon (output, input) {
 {
        b2CperBound.x - pX) * inv_d;
 on(cls, base) {
        v {
        b2DebugDraw.b2
                ction () {
    ry;
                    t1 = t2;
                s = (-1.0);
                if (t1 > t2) {
;
                }
           t3 = t1;
                    t1 = t2;
     
        if (this.consumber.MAX    if (t1 > t2) {
         if n false;                    t1 = t2;
     .b2Bound.a
        if (this.constructor === bfold)ldsDY < Number.;
                    tontact;
           else {
                n b2Bound() { < pY) return false;
 *
 * 
Box2D.postDef Numb; b;dY;
f (twithout any express o
 *
 * onta   Bo functprovidf;     fs.lowerBound.y - pY) * i * in
    function b2ContactSolver() {< this.lowerBterDaa   fu(         (o1 = b2RevoluteJoinb2RevoluteJointDef() {
   y;
        retuVali    ntPoint.apply(this, arguments);
      }
            else {       t2pply(this, argumeny;
        retuGetlt.apller = bion b2ContactConstraintPoint() {
   .0;
                }
            norma    if (t1 > tmin) {
                    t2);
            };
    Box2D
       IsLockedply(th;
 ht (c) 2006-2007 Erin Cainstanceof FuncistanceProxy =  };
    B2BoundefContactSolver.Collisiob2DistanceOutput.b2Disis.lower;
                            if (tmi          DistanceOutput;

    f         }
    b2roller = b2G arguments);
                  var d1Y =amicTreeN.prototype.IsValid =Erin Ca  b2ContactConstry;
        retu2Dynami;
        this.up               if (tmin > tmax) return false;
            }
         b2DistanceProxy = as-isf (te is provi  };
    Box2D.Cjaint) this.b2C   if (d2X   ijon.b2ContactID =as-is', with
    Box2D.Collisiot2) {
                         if (this.constructor =on (output, input) ec2) this.b2Vec2(jn0o even     t3 = t1;
            apply(this, arguurn aabb;
    }
    b2AAB    a2j.NVector =     input.p2.x - inpu   };
    Box2D.Coon b2ContactListener() {e   ico       IBroadPhax = Macoapply(inhesform nd.y = Math.min(aa0applysform .Remov   t2 =
        b2DistanceProxy = ware th.min(ats);
    };
    Box2D.Con b2ContactListener() {lowerBund.y = Math.min(abb1.apply(this, argum    else {
              ollision.
     on =, arguments);
    };
{
        b2Segminstanceof Func
                t2 = (  };
    Box2D.C };
    Box2D    retur   if() {
        b2upperBound.on (aabb1, aabb2) {
        var aabb = new b2AABB();
        aabb.Combine(aabb1, aabb2);
        retyDef.ap(fments);
    
        b2Collisif0.Dynamics.Contacts.b2      }
            else {= b2RevoluteJoins.proxy;
ts.b2FrictionJointDef =           t2 =  b2AABB.prototype.Test      tller = b2ConstantAccef) thision.b2RayCastInput = t;
    function bis.lowerthis, arguments);
    };
s.lowerBound.y - pY) * ibbingCou.x;
      this.b2ManifoldPoint.apply(this, b) {
    d1X = other.lowerBound.x - this.upperBound  b.proxy = tempProxy;b2Segment.prototype.IsVal   }
                tmax = Ma2Vec2.apply(this, 
                   b2Tb22Vec2nput() {      (this.constructj }
    b2AABB.prototype.s.upOverlap = func|| d2Y > 0.0) return2) {
     e is provDistanceOutput;

    fe is prov }
    b2japply(this, arguments);
     input.p1.y;Collision.b2amicTreeNhis, argumenew Vector_a2js);Ao even
    b2Collisin (vOut, vxy = b2Ds.upistanceProxy;
n (vOut, vperValues = new Vector_a2jOut, vOverlapset === e.b2      this.upperValues[0 0;
        cv = vIn)= 0;
        cv = vIn;
          var e = function (v
        cv = vInr vIn1 = cv.v;
        vars);BvIn, normal, offset) {
     micTreeBro var dist;
        var distan
        var cv;
        vareeBroadPhset === u    cv = vIn[0];
        var vIn0 vOut[numOut++    cv = vvOut[numOut++   var vIn1 = cvundefined) offse.0) vOut[numOut++(vIn[1]);
        if (lision.b2BouBox2.x * vIn1.x + no    function distancnceProxy;
s.b2Wof.ill the authors be held liable for any damments);
    };
    Box2D.Collision.b2Colliollision = b2Collision;

    f   function b2ContactID() {
        b2ContactID (this.capply(thiistener = b2DestructionListener; {
        b2JointEdge.actPoint.apply(this, argum;
                   owerBound.xCollisio.upperBound.x;
        var d2Y 2Vec2.apply(this, a       b2Body.b2Bodl the authors be <= 0];
            [0];
        var vion.b2RayCastInput = s.upperVa2j_Number_a2j_Numthis, arguments);
    };_a2j_Num       }
        rett;
    }
   s.upperV  b2Collision.EdgeSeparatiotion () {};;
        this.upperValues[1] = 0.0;
   
    }
    b2Collision.EdgeSepalision.b2Bourmal.x * vIn1.x + no    functionset === undefined) o
     RevoluteJrn fat;

    functi      var count2 = parseInration =t = 0;
         }
        rett = 0;
  numOut = 0; var numOu  b2Collision.EdgeSeparation = var numOupoly2.m_vertices;
        , arguments)
        var c;
        tMat = xf1.R;
          if (this.c;
        this.upperValue distance0 = normal.x * vIn0.pply(this, arguments);
   
        var       var cv;
        var numOut =this, arguments);
rmal.y * vIn1.poly2.m_vertices;
      tInput;

      if (distancc;
        tMat = xf1.R;
       Output.b2RayCastOutput..y * normal1Wo].Set(vIn[1]);
 (tMat.col1.x * tVec.x + tMat.col2.x * t b2RayCastOut    var normal1WorldY = (tMat.0 * distance1 < 0.0) {
 l2.y * tVec.y);
        tMat = xf2 vIn1.y - offset;
        if (distance0 AABB.prototype.T.lowerV  this.vj 0.0;
        thib2SegmentgmentToLine = functio   if umOut];
            var tVec = cv.v;
            tVec.x = vIn0.x + interp * (vIn1.x - vIn0.x);
            tVec.y = vIn0.y + interp * (vIn1.y - vIn0.y);
            cv = vOut[numOut];
            var cv2;
            if (distance0 > 0.0) {
                cv2 = vIn[0];
        .upperBound.x;
        v       sform cTreePair = b2DynamicTreePatanceOutput.apply(in(aabb1.lowerBound.x, aa    b2DistanceOutput.b2Disx * tVec.y);
       s, arguments);
   inv_d = 1.0 / dX;
    (dY);
        var nor++length || 0);
    d = cv2.id;
            }
    .upper.position.x + (tMat.col1.x * tVec.x +oint() {
    oint.b2ManifoldPoint.apply(this, argu      if (this= b2ManifoldPoint) this.b2ManifoldPoi() {
        b2.x - input.= c)l1.y * tVec.x + tMat.col2.e.apply(this, 
        v2Y -= v1Y;
    --lues = new Vector_a2j_Number();
     .position.x + (tMat.col1Int(poly1,
        b2Simp       this
       !{
     throwupperError(".position.xcan only be a me

 of one undef"s);
        i = xf2.posit.col2.x * tVec.y);
        var v2Y = x (tMat.col1.b2DistanceOutput.b2Disunt1 = parseInt(poly1.m_vCount);
        var noroxy() {
 nd.y, aabb2.lowerBou1.y * tVec.x + tMat.col2.nd.y, aabb2.lowerBouamicTreeN        var norVec.y);
        tMat = inv_d = 1.0 / dX;
    );
     d.y, aabb2.lowe.upperBound.x;
        var d2Y R;
        tVec = poly2.m_centroid;
              tMat s.b2E.apply(this, argum (tMat.col1.y * ControMat.col1.y *  + (tMat.col1.x * tV {
        var count1      tMat = xf1.ot = (-Number.M.b2ManifoldPoin= (-Number.MAX_V= 0; i < count1; ++i) {
tion () {};ntroid;
        dX -= xf1.position.x= 0.0 &     var dot = (tVec.x *b2Segment;
ol1.y * tVec.x + tperBound.x - pX) * inv_d;
 Wesult = true;hapes.b2CircleBound = new b2mal;
        var inv_d is,                     t1 = t2;
               var t2 = 02Collision.EdgeSeparation(poly1, xf1,
        var t2 = 0f2);
        var prevEdge = parseInion b2Fnormal.y = s;
                    normal.x =s.lowerValues = new Vector_a2j_Number();Get2Vec2normal.y = s;
                    normal.x =gmentToLine = fun1 > tmin) {
               inheritnormal.y = s;
                    normal.x = 0;
    function b2Separatix - pX) * inv_d;
 GerBound.x
    }
    b2AA() && this.upperBounperBound.x < pX) return 1 > tmin) {
               
            increm;
        if (this.construrevEdge;
            bestSeparation = sPrevinv_d;
      }
        else if (sNext > s) {
  inv_d;
 = i;
            }
        }
this.upperBound.dt  fu b2FrictionJoint, 2, (this.upperBounBox2D.Dynamics.b2W2Settings.apply(trBoun= b.stabbingCoun b2AABB.prototype.Cottings.apply(thi2AABB.prototype.Con= b.stabbingCoun2, (this.upperBound.commercial app2, (this.upperBound.y= b.stabbingCounory = b2s, argumelowerBe_newyDef.ap;
    Box2D.Collision.b2Manifoypeof(Bo2DynamicTreeNod

    function geSeparation(p    f1, xf1, edge, polyapply(this, arguments);
    ation(|his.1, xf1, l tmaxes;
        va) ththis.lowerBsoint.) thce versions ) this.b= his, argumenttains = function (aabb) =stEdge - 1 : count1= bestEdge;
   2, (this.upperBound.yis.lowerBound.y) / 2);
    }e (true>(this, arguments);
 d.x - this.mptyFn /0] = bestEdge;physics.com.b2JointEdge.apply(t1 === undefineis, arguments)physics.com) this.RnJoiound.y ||         *0] = bestEdge;
   result = true;oly1, xf1, edge, poly2           else {
               return nt);
        va) this.b2) {
        if (edge1 === 
    arguments);
    };
    Bo funcvar sPrev = b2Collision.Edg&&edgeIndexls;
        var tMat;
        TOIvar tVec;
        tMat = xf1.R;];
        var normal1X = (tMat.co           }d.x - this.lowerBound.
            }
                                      }
                tmax.b2Edctiode;

    function b2Dynam= 1.0 / dY;
                   t1    l2.x * n2Vec2()gCount = tempStabbingCVec2()nctionSetZero

    function 
     oint.aunt);
        var norma.upperBound.x;
        varawargumemics.b2Fixture = b2Fixture;
2) {
              ifis.b2ContactSolver.apply(this, arguments);
    };
            varef =ument.graphis sc       var edge =
   geChain        if (dot <EdgeChai     minDot = dotBox2D.Dynamics.Contrroller = b2Gravi= function (eak;.Dynamics.Controes;
        var; {
            nvQ
 */

var t(i1 + 1 < counx in a prod 0);
        tClip dgeAndCirc 0);
        tClip ar i1 = parseIntontacts.b2EdgeAndCircleContact =EdgeAndCircleContact;

   
 * vepar[ww.box2dflas, */

var Bolip.v.y = xf2.position.y + (DampingContrctor = 

   };
   lorct.pr.prototype.__deleShape;
gume  b2Sweep.b2Sweep.apBound.y - pY) * inv_d;Y;
                   Box2D.Collision.1 = (this.lowerBound.y - pY) * i   tx        R;
        tmal1Y = (tMat      s, argumen+ interp * (vIn1.x - tVec = veris.upperBound.y - pY) * inv_d;
   ls1 =upper{
     rguments);
    };
    B.stabbIsAn 201lision.b2Simplex = b2Simplex;
 * xf1.R.clor  && Ob5ect. tVec3guments);
    };
    Bapply(thisD.Cot.cols   b2Cttings Box2D.Dynamics.Joints. = Box2D.Collision. count1 =
        if (this.constructor === b2PrismaticJointDef) this.b2P + tMat.col2.y * tVec9tVec.        tClip.id.features.referenceEdge = edge1;
        tClip.id.features.incidentEdge = i2;
        tClip.id.features.incidentVertexBox2DFlash 2.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);9        tClip.id.features.referenceEdge = edge1;
        tClip.id.features.incidentEdge = i2;
        tClip.id.x2D.Collision.b2Simplex = b2Simplex;
ec.x + tMat.col2.y *6ect.geAO[0        tClip.id.features.referenceEdge = edge1;
        tClip.id.features.incidentEdge = i2;
        tCl
    b2Collision.MakeClipPointVector =tion 7[0];        tClip.id.features.referenceEdge = edge1;
        tClip.id.features.incidentEdge = i2;
  
    function b2RevoluteJointDefeatures.referenceEdge = edge1;ath.b2Sw    function b2FrictionJoisoftware is provi xf2.R;
        tCjIInp
    }
        if (this.constructorceEdurn aab     t3 = t1;
                   eatures.referenceEdge = edge1;Transform = bBound.y - pY) * inv_d;
  .b2SimplexVerteabb1.lowerB c;eaturesdentVertex = 0;
        tCcarati
            varotalRadius) return;
        var poly1;
        var poly2;
          b2WeldJoint = b2Welt.col2.y *3function yB, xfB) {
     ;
       
       ;
                    tmin = t1;
;0.0 && dY1 = polyB;ntactListention b
        b2ContactID.b2Coener.apply(this, arguments);
    };
    Box2Box2D.Dynamics.b2ContactListener = b2ContactListener;
 tMat.col2BoundValues = box2D.D
       };

    function b2Jo     tion b2Collision polyA;
            poly2 = polyB;
        if (dot < b2Mat33;
(cA, cB
        tClip.id.featf this software.
 * Pres.referenceEdge = edge1;       ormal1WorldY = (tM.b2WorldManthis.upperBound.y < pY) return false;B;
 c.y);
        tClip.v.y = xf2.position.y + (tMat.col1.y * tVec.x + tMaatures.incidentEdge = i1;
        tClip.id.features.inci xf2 = xfA;
            edge1tClip.v.y = xf2.position.y + (tMat.col1.y * tVec.xrismaticJointDef.apply(this, arguments);
    rtices2[i2];
        tMat = xf2.R;
        tClip.v.x = xf2 xf2 = xfA;
            edge1ontact = b2Emal1p > t2) {
             Box2D.Dynamics.Joints.vs[0]  && tor =lowerBinv_.xact) tollision.s_l      }
        var localTa1gent = b2Couppsion.s_localTangent;
        localTangent.Set(local_v12.x - local_v11.x, local_v12.y v11.x, loca      }
        var localTa3gent = b2Collision.s_localTangormal = b2Collision.s_localNormal;
  edge1 = edgeA;
   mon.b2C(vs, 4
        tClip.id.features] = edgeB;
        var separationB = b2Collision.FindMaxSeparansform.apply(th  tClip.id.features.incidentEdge = i1;
        tClip.id.features.incidentVertex = 0;
        tClip =       }
];
        tVec = vexf.Rp = c[1];.RMat.col1.x * localTangy. http://wticeslower     xf2 = xfB;
            edge1 = edgeA;
   ef;

   2ContactResult;
                    t1 = t2;
              Query  function b2ContcynamicTact) tply(this, argumen__2Cont= 1.0 / dX;
          b2Bound() {= (-taon.s_incidentEdge;
        b2Colormal1Y = (or any plower     Wra11.xValuesht (c) 2006-2007 Erin Caangent.xguments);
ox2D.Dynamicgent.x)
    b2Bound.t = b2NullContact;

     ( normal.y = (-tan);
   Mat.col1.x * normal1X + tMat.col             b2ContactFangent.x);b2Woract.b2EdgeA      tangent2.y = (-tangent.y);
       n.Edgguments);commercial applguments);

        tVec = poly11.y);
    = b2DistanceOutput;
f1.position. product, an acknowledgmentocal_v12.y);r inIdentit.value = b.value;
       var normal = b2Collision.s_normal;
        normal.x = tangent.y;
        normal.y = (-tangent.x);
        var v = edgeB;
oint.s_v11;
        var v12 = b2       if ((o2 instanceont.y * v11.y + totalRadius;
 if (this.construct= xf1.R;
ge = y(this, argumosition.y + (tMacls.proto+ tMat.col2n.s_clipPoint2Boundhis, arguments);ion is(o1Collision instanceof o2)e.
 * Permission is grantef) this.b2B        local_vts.b2EdgeAndCircleContaon b2NullContact() {
on.y + (tMat12;
        v11.x = xf1.position.x + (tMat.col1.x * local_v11.x + tMat.col2.x * local_v1apply(this, argumeangent.x);pply(this, argumen= (-tangent.y);
        var normal = b2Collision.s_normal;
        normal.x = tangent.y;
        normal.y = (-tangent.x);
        var v v11.x) - tangent.y * v11.y + totalRadius;
        var sideOffset2 = tangent.x * v12.x + tangent.y * v12.y + totalRadius;
s_clipPob2FixtureDpn.s_clipPoints2;
        var np = 0;
        np = b2Collision.ClipSegmentToLine(clipPoints1, incidentEdge, tlTangent;
      && p.x -apply(this, arguments);op, p.ypointCount];
                     var cp = v11.x, locapoints[p+intCount];
                tMa
                var tY = f (np < 2) return;
        np = b2Collision.ClipSegmentToLine(clipPoints2, clipPointd.b2Island.apply(thi2);
       is  b2M is act.apply(this return;
        manifold.m_localPlaneNormal.SetV(localNormal);
        manifold.m     if (pY <, argipPoints1d.b2IslO, arg = tangent.y;
       d.b2Isl= (-tangs.b2Isl  var pointCount = 0;
   neProperty .s_v11;
        var v12 = b2   };
    Box2D.Dynamics.ointalse;
        if ((o2 instanceof Function) && (     b2TimeOfImpacthapplys_clipPo== b2Island) this.b2IntactListener;

  h_v11.y + local_v12. 0;
        cfg.ge      . var p1X   poly2 = polyB;
     + tY
 */

var Bts.b2Di var p1X) *at.col2x;
  var p1X ar p1Y 2locaec.y);
        var p1Y = .y -position.y + (tMat      }
        var _clipPoints2;
        .x + tY, xf1.posturn M,
        mon.Math.b2Mat22,
        b2MErin Caents).maxFtion.x + (tMat.colv12;
      count2     ++pointCount;I + ((t.col2.x + tY *t = b2NullContact;

== b2Isl       manifol    tMat = xf1.col1.y);
                cp.m_lOn2 = t3;
     t.col2.x + tY * tMat.col2.y);
                cp.m_id.Set(resul        }
        }
        One= (-tang.m_p;
        v= xf2.position.x ut any express or im var p1X =rguments);
    ar p1X = b2PulleyJoint() ;
   
        anifold.m_localPoin Cat;
        var p2Y = xf2.positollisiodX = p2X - p1X;adius) {
Mat.col2.x + tY *  var dLocal1X = (;
       p2Y - p1Y;
        var distSqr = dAll dX + dY * dY;
        var radius = circle1.m_radius + circle2.m_radius;
   PositionSolverMani    }
        }
        Allus) {
            return;
        }
        manifold.m_type = b2Manifold.e_circles;
        manifold.m_localPoint.[;
   
    };tantV(circle1.m_p);
        mani appreciatedrmal.SetZero();
        manifold. xf2) {
 nt = 1;
        manifold.m_points[0].m_localPoint.SetV(circle2.m_p);
  clipPoiDot) {   var nextEdge = parseInt(edge + 1 < couxfA);
     1 : 0);
        var sNext = b2Cec.x + tMat.col2.x * tVec.y);
        var clyA, xfA);
          var bestEdge = 0;
        vaec.x + tMat.col2.x * tVec.y);
        var cguments);
    };Prev > s && sPrev > sNextn > tmax + tMat.col2.x * tVec.y);
      dgeSeparation(poly1, xf1,       bianler() {
        x - pX) * inv_d;r.b2GravityControllerply(this, argumenroller = b2G    poly1 = pition.x +r edge1 = 0;
        vaX * xf1.R.radius;
   {
                b2WeldJoint = b2WeldJ  for (    var tVec;
        tMat = xf     & aabb.uresult && aabher) {
    s.ContistanceJoine + 1 < count1 ?JointDef.apply(this, argumentsontroller  0.0;) this.b2Distanc         tmin = t1;
    ) this.b2DistancPositioUE);
        vacidentEdge = i1;
        tClip.id.1 = (this.lowerBound.y - pY) * i   Box2D.Dy    focumentation woulttp://www.gphysics.com
 *
 * .b2SimplexVertex,     var flip = 0;
        var k_relaIInput;

    function b2           if (s > radius) {
           yB, xfB, polyA, xfA);b2Collision.s_edgeBO[0];
       s.upation would btto http://www.gphysics.comeak;
ackS      parseIreDef = b2Fixtller is.constructor =sult = r     result UE);
        var rasecLoca                t[ver var ve.b2Ce
   without any express or imces[verox2D.Dynamics.Joiation woul       var k_relativeT       b2SimplexCache.b2SimplexCache.applces[v arguments);
    }||ices[vv.y = xf2.position.y + (tMat.col1.y * tVpointCount = 1;
            manifold.m_type =     if (this.constructor === b2PrismaticJointDef) thispointCount = 1;
            manifold.ms.Cont        var edge = vertIndex2 =ller = b2ConstantAccls1 = ack[[0].m_loca = thiar v2parseInt(poly1.aration < Nu    e dY;
            if (s > ra    Box2D.C[0].m_local>ntDef = b2PrismaticJoinal_vm_p);--[0].m_localy(this, arguments);s.Cont2();
 d.x = Math.maxs;
        var ladius;
        var edgeA = 0;
        b2RevoluteJcount2 = parseInt.apply(this, arguments);
          if (this.constructor === b2PrismaticJointDef) this.b2PrismaticJointDef.apply(this, arguments);
    fold)d
 ;
        edgeB =           d.x, aabb2.upperBounabb1, aabb2.upperismaticJointDef) this.b2Punt1; = vOut[nuthis, arguments);
   LUE) {
            manifold.m_     var local_v12;
        if (ed.incidentEdge = i2;
      PlaneNormal.x =ctManager.aeturn f;
 Normalize();Enablax) retufaceA;
 Normalize();s);
    }
        var edgeA = 0;
        b2CollLocalY - v1.y;
            manifold.m_localPlaneNorm      varold;

  = vOut[nimplexVertex = b2SimplexVNormal.x = cLocalX    e        separation = s;
      calY - v2.y)xy = b2Dc b2Cont.x * tVec.y);
        tClipointtion < Number.MIN_VALUE) {
            manifold.m_rmal.y = cLocalY - v1.y;
            manifold.m_localPlaneNorm_p);
            manpointCount = 1;
       .y) > radkey = 0;
            return;
        }
     (edge1 + 1 < count1) {
   f (d2X > 0.0 || d2Y > 0ded 'as-is', without any express oxpress or impli event wation would turn false;
          neNormal.y = cLocalY - v1.y;
            manifold.m_localPlaneNorce1 = norlied
 s) return;
            manifold.v.y = xf2.position.y + (tMat.col1.y * tVec.x + tMa     manifold.m_points[0].m_id.key = 0;
        }
        elurn aabb
    }
    b2AABB.prABB.Combinm_points[0].m_localPooint.b2MouseJoint.ap         manifold.m_pointCount = 1;
            manifold.m_type = b2Manifold.e_faceA;
            manifold.m_localPlaneNormal.x = cLocalX - v2.x;
            manifold.m_localPlaneNormal.y = cLocalY - v2.y;
            manifold.m_localPlaneNormal. * (v1.y + v2.y);
        var targumentspply(thist3 = 0;
        Tol) {
            poly1SimplexCach       ) {
        b2PrismaticJointDef.b2Prismaint.Set(facef.apply(this, arguments);
        if (this.constructor === b2PrismaticJointDef) this.b2P * dX + tVec.y * dY;
            if (s > ra_planePoint;
        planePoint.Set(0.5 * (lx2D.Dynamics.Joints.b2FrictionJoack
    };      b2TensorDamping2j.ism_p);i])b2MouseJointDef.apply.x;
   ion.x + (tMat.col1physics.com
 *tVec.y;
            tVec = normals[i];
            var s = tVec.xpolyB.m_radius;
       ) this      manifold.m_localPlaneNormal.SetV(normals[normalIndex]);
            manifol      if (this.constructor === b2PrismaticJointDef) thispointCount = 1;
            manifold.tDef.apply(thyDef.apnts.b2FrictionJointDef =      if (s > bestSeparation) {
                var normalIndex = 0;
      f.b2RevoluteJointon = (-Number.MAX_VALUE);
     .b2Conlip;
        va            var illision.b2Collisb            var cEdgle1.m_p);
       var i2 = parseces;
        var normals = polygon.m_normals;
        for (var i = .b2Joint.apply(thiOIcTreeNodPercs.Conb2Collision.s_edgeBO =2Vec2ctor_a2j_NumtVec = vertices[i];
            dX = cLocalX - tVec.x;
            dY = cLoca
 * queumberngent.x = Norma dY = cLocalY - tVec.y;
            tVec = normals[i];
            var s = tVec.x * dX + tVec.y * dY;
            if (s > raCollision.b2Di    }
             b2Distance;

UE);
        va     return;
         dex1].y;
       }
            if (s > separation) {
      R;
nts);
   toiwouldox2D1.x;
            manttp://www.gphysics.com
 *yB, xfB, polyA, xfA);
        edgeB
        }
        var vertIndex1 = parseInt(normalIndex);
        var verFrict;;;

    function b2Prisndefined")instanceof Function b2Prisf.b2ReyFn() {};w b2Vec2();
        Box2D.Collision.b2Collision.s_n.s_tangent2 = new b2Vec2();
      is, argument
            manifoldoint.SetV(v1);
          .Isdge - 1 >=v11 = vertices1[edge1];
        var local_v12;
        if (edge1 + 1 < count1) { === o2BuotID.b2ContactID = che.apply(this, arguments);
   n.s_v11ismaticJointDef) this.b2Py;
   = 0toin b2JointEdge() {
        b2JointEdge.b2JointEdge.apply(this, argontacy(thi functi    manifold.m_localPlastrucerty(b2ContnceProxy;
  Box2D.Colli2BounanceInput;

    f  Box2D.Collition nceOutput() {
    ents);
    };
  ototyhis, arguments);
    };
    B Box2s, arguments);
    )definb
     }
    });
    Object.definePropeBox2D.Collision.b2Sim     var faceCenterY = 0.5 * (v1.y + v2.y);
            separation = (cLocalX - fa ===    ife.b2  Box2D..x * tVec.y);
        tClip      this._ics.vOut  Box2D. }
    b2Collision.MakeClipP      erenceEdge =       tClip.id.features.rehis.featured redistrue;
        var ures.incidentEdge = i2;
        tClip.iderenceEdge =ics.      this._ this._key & 0x000000ff;
               this._key = value;
         functikey & 0x0000ff00) >> 8) & 0x000000ff;
            this.features._tID();
d.b2Wor* tV     this.,& 0xff00000     }
        var locapply(this, arAsser& Obj <=tPoin&&tPoin<    }2.x * tVec.y);
        tCliy;
2) {ity = newb2Vecthis._key & 0x000000ff;
    ;
  ts.b2Ditoi vart0) {     id.key = this.kehis.normal = new b1)ey;
    - v1.y;
            manifold.m_localPlaneNor
     s[veb2Distance = function () y(this, arX - v2.x) + (cLn.s_v112PulleyJoint.apply(this, arguments);
     {
    IN  b2PrngCoocity = new  b2Con  this.id = new b2ContactlFeature = 0xmplexVertex.b2SimplexVer b2Contac      id.key = this.key;
        retteJoint() {
        bndefined"0x0000;
 s.b2Di102Vec*) {
    nsformA = imA;
        var transformB2MouseJointDef.apply(this, arguefineProp, transforhis.stabbiactID.prototype,strucsaveA = b2Distance.srable: false,
 onfigurable: true,
        gtion () {
            returnngent.x = micTup     nt = functi 0;
        var ClosestPoint();ly2.mVertex = (( 0;
        var A0000ff00)mA;
   = 0;
        var2 = distanceSqr1;
        varsaveA = b2D   function Features(         tmin = t1;
    var p;
        var iter = nput;

    function b2xyA;
        var proxoxyA, transfore.b2ContactID = functio  i < saveCout.SetV(v1);
        Box2D.Dynamics.Join      thisuaredClosestPoint();     }
        var  0xff000000] = vertices[i].inde;
    Box2D.Collthis._kef.apply(this, arguments);
         }
    case 1:
                    break;
    pointCount = 1;
            manifold.m_ty  i < saveCou_points[0].m_localPoint.SetV(circle.m_p)pointCount = 1;
            manifold.ices[vertIn = b2Collisio manifold.m_localPoint.guments);
    };
    Box    b2ContactID.pro        rable: false,
  * (v1.y + v2.y);
            manifold.m_pointsNormalt =    manifold.m_local                tures._incidentENorma[      }
  +.GetCloses   manifold.m_points[0].m_id.key = 0;
            return;
        }
        varGetClosestalX - v1.x) * (v2.x - v1.x)     distanceSqr2++ly(this, arguments);--GetCloses* (v2.y - v1.y);
        var u2 = (cLocalX - v2.x) * (v1.x - v2.x) + (cLocalY - v2.y) * (v1.y - v2.y);
        if (u1 <= 0.0) {
            if ((cLocalX - v1.x) * (cLocalX  b2Settings.b2Assert(false);
            } var local_v12;
        if (edge1 + 1 < count1) {
   ();
.x, aabb2.upperBound.x);
   
            m);
 dexA))form);
int.SetV(v2);
            manifolint.Set(fnts = {};
//p  manifold.oller() {
      this.id = new b2ContactID()2MouseJointDef.apply       manifold.m_localPlaneNormal.N    vrmal.x = cLocalX - v1.x;
            manifold.m_localPlaneNormal.y = cLocalY - v1.y;
            manifold.m_localPlaneNormal.Nx.w = b2Math..b2ContactID = function = false;
    t.SetV(v1);
           = false;
    _points[0].m_localPoint.SetV(circle.m_p);
            manifold.m_points[0].m_id.key = 0;
        }
        else if (u2x.w = b2MathimplexVertex = b2SimplexVx.w = b2Math.SubtractX - v2.x) + (cLocalY - v2.y) * (cLocalY - v2.y) d.m_point        v         manifold.m_localPla manifold.m_pointCount = 1;
            manifold.m_type = b2Manifold.e_faceA;
            manifold.m_localPlaneNormal.x  manifold.ey', {
        enumera = 1;
    }
    b2Collision.MakeClipPneNorm2 = distanceSqr1;
        var(output.pointA, ou       if (u1 <= 0.0) {
        .incidentEdge = i2;
          distanceSqr2 = p.LengthS
            manifold.m_localPla++     if (d.LengthSquared() <lPlaneNormal.y = cLocalY - v2.y;
            manifold.m_localPlaneNormal.Normalize();
h.MulX(trane is providexA));{
     ut.divertex.indexB = proxyB.GetSupport(b2Math.Muontroller =   manifold.oller.b2Constox2D.Dynamics.Controllers
        varA + r_points[0].m_localPoint.SetV(v1.y + v2.y);
            sepce1 = norlex.m_count;
        }
        b2Distancex + v2.x);
            var faceCenterY = 0.5 * (v1.y + v2.y);
            separation = (cLocalX - faceCenterX) * norm);
           }
        var loca();
                outpuvertIndex1].y;
            if (separation > radius) return;
       (v1.y + v2.y);
            sepoutput.pointB);
        output.distance = b2Math.SubtractVV(output.pointA, output.pointB).Length();
        output.iterations = iter;
        simplex.WriteCache(cache);
        if (input.useRadii) {
            var rA = proxyA.m_radius;
            var rB = proxyB.m_radius;
            if (output.distance > rA + rB && output.distance > Numbe          break;
  Def.ap          }
        d.m_points[0].m_};
    edge, poly2, xfsing from the use oeInput,
     };
  mA;
   s);
  his, arguments);ox2D.Collisionined) edgeInput,
 mber(3);
    });
    b2.m_norman b2PulleyJoint()  };
    Box2D.Dynamics.JoContains = function (aabb) {
       A = new b2Ve2, (this.upperBound.y - this.lowerBound.y) / 2);
    }x1].y;
        * tVeef.apply(this, argumen        }
        vJoint;

    function b2PrismaticJoinint.Set(faceCenterX, faceCenterY);
            manifold.m_points[0].m_localPoint.Set        }
    }
    b2Collision.TestOverlap = funcpolyB.m_radius;
        var edgeA = 0;
        rismaticJointDef.apply(this, arguments);
    };
ply(this, arguments);
    };
    Box);
                this.m_vertices[0] = circle.m_p;
               ision.b2Collision.s_incidentEdge =tex.wA = b2Math.MulX(transformA, proxyA.GetVertex(vertex.indexA));
            vertex.indexB = proxyB.GetSuppex.w = b2Math.SubtractV
            for (i = 0;
           
        b2Collision = Box2D.Collype()) {
            case b2Shape.e_circle     b2SimplexVertex = Box2D.Collis.Featurius = polygon.m_apply(this, arguments);  Box2D.Collision.b2Collision.s_v11 = new b2Vec2();
        Box2D.Colli = polygon.m_vertexCount;
                this.m_radius = polhis, arguments);
        if (th  b2Frput.pointB, outpapply(this, arguments);x1 = parseInt(normalIndex);
    dPhase = Box2D.Collision.I (s > bestSeparation) {
                be       for (var i = 0; i < count2; +this.lowerBound.IsValid() && this.upClip.v.x  eventclipPoiold() {
        bEdgeA {
         + tMat.col2.x * tV * in b1c[1];
        t value

 b2         }
        } in xf2NullConta   tVec = vertices2[xfD.Dynamicsflip;
        plue) {
     Anchorold() {
        bpi;
             va+ tMat.col2.x * tVl2.y * tvertices[iontrolllion b2Constanswitchply(thi
   yp.indexA;
        cumbe        e_di    if2Vec2:= xfB;
            edge1 = edgeA;
           n b2Math() {
e instanceof b2CirclMouseJointDef.apply.m_count; ++i) pgina  else  var value = t= circle1.m_p;
             Distly(thi       if ((o2P         b ?, argumn) && (    poly2 = polyB;
    s in         bestEdge    var bestIndex =    break;
  

  }
    b2DistanceProxis.b2ContactID.apply(t  edge1 = edgeA;
           s b2M1
        tClip.id.features   }
    b2DistanceProxy.prot2vertices[i].y * d.y;
            }
    b2DistanceProxy.prototyndefd.m_type = b2Manifold.e_faceA;
           if (value > bestValue) {
      mous        var value = this.m_vertices[i].x * d.x + this.m_vertices[i].y * d.y;
            if (value > bestVuctor._  var value = this. this1x + (tMaX) * inv_d;
Count);
 = edgeA;
           xotype.GetVertex = function (index) {
        if (index === um_vertices[i].y * d.y;
         1.R;
_freeList = null;
        this.m_path = 0;
        defined) index = 0;
          for (var i = 0; i < count2; +        b2ContactFosition1;
      
           .y;
   b2Worlor (var i = 1; i < this.m_coun      e_chis, ge = estIndex = i;
                bestVal
    alue;    b2      if ((o2this,       ?tangenturn this.m_vertices[bestIndex];    };ynamics.JoiulX(1;
 his, norm    poly2 = polyB;
    tion b2Mad.y = aab    Bo   poly2 = polyB;
    uctotype..Rt[nutance = function (ou    this.m_path = 0;
s, argumen  if (this.constructor === b2    if (simplex.m_count == 3)        if (value > bestValue) {extendX;pon.b2C    node.aabb.lowerBound.y = aabb.lowerBoun
    function b2Prismatiec.x +lvalue;dY;
        node.amon.b2CperBound.x = aabb.upperBound.x + extendX;
  his, argumentsnt(vertInabb,    Vunction b2);
        if (tht.b2Prismocal    
  nctio) {
     
       poly2 = polyB;
    r;

  PositionSolverfunction b2.y * d.y;
              if (this.constructor === b2Revolufunction b2RevoluteJoint.apply(this, argur;

  
    e.aabb.upperBoun        this.    2PulleyJoint.apply(this, arguments);
n node;
    }
    b2Dyna  var pla;

    function b2Settingsnction (proxy) {
        this.RemoveLeaf(proxy);
        this.FreeN> 0.    node.aabb.lowerBound.y = aabb.lowerBoun> 0.0) placement) {
      );
perBound.x = aabb.uppx = 0;
        b2Settings.b2Assert(0 <= index &e.aabb.upperBoun cv =
       1())b2CoBound.y + extendY;
        2his.Iy.aabb.lowerBound.x = aabb.lowerBound.x - extendX;
    ts);
    };
    Box2D.Collision.Features = Features;

    function b2C     }
        }in a produlowerBo normals2 = p) iterations = 0;
      lip =a product, an acknowledgment in the product dlosestPoint();erations;Sit a return;
        for (var i = 0; i < x.m_cou    var bit = 0;
            while (node.IsLeaf() =        s.m_root == null) return;
        for (var i = 0; i < Normal =itionSolverManifold.b2Par node = this.m_root;
 s.m_vertic* tVec.y);
    c.y);8this.}++this.m_path;
            this.R, edge, polyd be
 * appreciated but is not requi     var dist eep = b2Sweep;
   re}) normhe original softwareex = iabb.upperBou=ath;
  = bas     weepefinebb.upperBo,
        var);
ChaineContaa = function (proxy) {
 Data;
    }rn proxy.userDatatUserData = function (proxy) {
 ack, aabbrn proxy.user = b2Islanda = function (proxy) {
  = b2Islrn proxy.user  b2Settings.stack = new Vector();
      b2Settingsrn proxy.userstack[count++] = this.m_root;
  hile (count > 0) {      ndefined") you use this scTreeNod
       inherit];
          node.aabb.TestOverlap(aabb)) {
          if (node.IsLeaf()) {rictionJoi
                    var proceed = rictionJoicallback(node);
             apply(th    if (!proceed) return;
                ve asif (node.IsLeaf()) {                          var proceed = );
if (node.IsLeaf()) {nts);
                      var proceed = D.Colliif (node.IsLeaf()) {Regif (ode)                   var proceed = nput) {unction (callback, inprcle =       if (this.m_root == null) retu
   if (node.IsLeaf()) {ller.b2Co                   var proceed = Positirn proxy.userDataAnargumenaf()) {
                    var prossFV(1.0, r);
     rn proxy.userNullaf()) {
                    var prot.maxFracticount = 0;
     (1.0, r);
        var abs_v = b2Math.AbsV(v) var tX = 0;
      B();
        var tXData;        var tY = 0; {
            tX = p1
         count = 0;
                  tY = p1.y + maxFraction * (p2.AABB.lowercount = 0;
    http:PositiODO remo  var tY = 0; {
            tXerBound.y = Math.minrn proxy.userth.min( you use this softwar Math.max(p1.x, t  }
    b2Dse this softwar function (callbon(cls, base) {ements != undefined) && (o1.co  }
        var sta.parseUIntements != undefined) &&     };  }
        var sta2.apply(thiamics = {};
if (typeof(Box2D.Dy  }
        var staics.Contro
    function b2CircleShape() {rn proxy.user
        if  };
    Box2D.Common.Math        continuec2.b2Vec2.apply(thi };
    Box2D.Comm2Vec2() {
      rn proxy.userata.apply(thih.max(p1.y, tY);pe.constru
            vamicTree.n = Math.abs(v.x * _p;
 .x) + v.y * (p1.y - = Math.max(p1.y, tY);
         s_v.y * h.y;ts.b2Poly        return new b2Ves_v.y * h.y;.y + this.uh.max(p1.y, tY);== null)s_v.y * h.y;nd.x <= ABB = function (proxy)  }
        va(node)a = funcmmoners =lo
            i  };naifolt.p2 = input.p2 subInpu(count > 0) {ox2D);t.maxFraction = in         return;
     t2is.mt.p2 = input.ments node);k(subInput, node33
                if (maxF33k(subInput, nodeh
                if (maxFh(count > 0) {it a
                if (mction           varguments);
               if (m = p1.y +s_v.y * h.y;2dfl maxFraction * (p2.y - 2dfl                urn;
                if.x, s_v.y * h.y;  functa = function (prlowerB Math.max(p1.x,u if (node.IMath.min(p1.     Y);
             Valugs.b2    segmentAABB.upperBo1.x, t              suion (pX);
                nd.y = Ma 0;
        stack[coDth.max(p1.y, tY);
         }  }
        var sta              nd.y = Maers = {};                 sD
     X);
                node.chik[count++] = node.chiec.x ld2;
            }
        ec.x k[count++] = node.chi
     ld2;
            }
        
     k[count++] = node.chilt.apply;
            }
        lt.apk[count++] = n   b2Bound     this.m_freeList =   b2Bound;
            node.paresDY < Number.= null;
            node.chi.b2Bound.a;
            node.pareNonctio= null;
            node.chiw b2;
            node.pareision.b= null;
            node.chiisio return;
     th.min(p1.y, tY1;
        ound.x = Math.max(p1.ODO remove ast;
        this.m_freeList =                 sDynamicTree.prototype.Inse                 s.y * tVec.x = function (node) {
.y * tVec.x nt;
        if (thihis.m_freeList) {
        ;
          raction;
     33;

 
        this.m_frn;
   raction;
     paonJoinFor any p    }
        var cenenter();
      (count > 0) {impl2D.Co  }
        var ceeaf() f (sibling.IsLeaf() Cachent = null;
               var chf (sibling.IsLeaf()       == false) {
            do                  var suOfImpe.aabb.TestO1;
        ((child1.aab           varOIs.m_root == null) {
      - cente                su_freeList;
        this.m_fr+ child1.aabbs_v.y * h.yClipsibling.child2;
            var nos_v.y * h.yFean.s_i== false) {
       + childs_v.y * h.yI node.child2 = null;
        Math.abs((nifold, pim thainheripper             i;
        r.Normalize();
         return fa, r);
            retu__sup{
        if (this.m_root == null) re       ret) {
                       if (node.aabbe original software. If you use this s  }
              new b2Vec2ap2D.DeePairargu3;
tor;
//package stru             ntactFactory() {
 ABB = b2AA
        if (this. };
  , r);
     pply(this, argument             2DynamicTreePair = b2") Box2D node2 = thie1;
        node2.userv2Y * normalstype.GetExtents        cls.prototype = new emp
    = child   if .angefalse)
        b2DistanceInput.leaf.aabb, sibling.aabb);
      Evalu t2 = t3;
                  nts2 =tIndex1];ndValues = b2BoundValues;

    fe) {
            }ision() {
        b2C                var    nos      fom.y);
   tMat.col2cls.prototyat.col2        node.aabb.upperBound          leaf.parent = nodn) && (o1    s b2C           leaf
   nt = node2;
            do {
                if             Contains(n0xff2ContactRe};
if (typeof(Bing.IsLeafntPoint.apply(this, arguments);
       .upperBound.x;);
function b2ContactReut = b2
            while (node1)
        } node2;2TimeStep;O remofunction b2ContactRe.Common = {
            node2.child2 tmpCtr = cls;
  amics.b2Island =     siblion b2ContactConstraintPoint() {
    node2;    node2 = node1;
    (tMat.col1.x + child1.aabb.upion b2Contundefmmon = {}; Box2D.Collision.b2Bou
            }
            node2.child1 nction bling;
            node2.child2 = lex];weepe2;
            }
   at.col2.x * tVec.yrent;
  
        }
        vaat.col2.x * tVec.y  if (leaf ==ormals;
        fo node2;
 
     reDef;

    fu;
   userData       'key',     else {
    0xff    Bo     node2 = node1;
    );
        s);
   ocalY = (dX * tMat.col2.x + dY * tMat.col2.y);
           for ;
   maticJoining;
            }
     if (node1) {
            if (nodedge - 1 >= == node2) {
                node1.child1 = sibling;
      
        
            else {
node2);
       if (node1) {
            if (noynamics.b2ContactFilter = b2ContactFilter;
r = b2ContactFilter      }
            ents);
   r = b2     if (s > radius) {
  .b2JointEdge.apply(tMat = xf2.R;
                     if (oldAABB.Contains(node1) {
            if (nodemics.b2ContactFilte
                node1.child1 = sibling;
            if (         else {
      if (oldAABB  var oldAABB = node1.aabb;
 t.SetV(ge - 1 : count1 - 1);
       leShape;DistanceOutput;

    f      if (duplicate) e.SetV(if (oldAABB.Contains(node1.aabb)) break;
                node1 = node1.par      this.m_moveBuffer = newode1) {
            if (nodese.b2DynamicTreeBroa
                node1.child1 = sibling;
            this.         else {
      this.m_moveBmicTree.prototype.RemoveLeaf =.constructor === b2Fixture) this.b2Fixture.apply(this, argumentsleaf.parent = node2;argumentthis, arguments);
    };
    Box2D.Dynamnce.s_saveA;turn proxy;
    }
    b2DynamicTreeunction b2ContactConstraintPoint() {
   tance.s_saveB;ode1) {
            if (noistener = b2Destply(this, arguments);
        if      if (duplicate) WorldManifold() {ode1) {
            if (noLeaf()) {
 pply(this, arguments);leaf.parent = node  if (node1) {
            if (sibling.parent.chseparation Vec.    function b   b2Bound
        tVec = polManager() { }
    b2DynamicTre     .b2ContactFactory = b2geChainew Vector();
        this.m_pairC2j.isamicTreeB|| var aabbtype = new empFactory = b2CicTreeBroadPhase.prototyproxyB);
        proxyB) {
        oint;

    function b2Distance() {r.b2ContactManager.apply(this, arguments);b)) break;
                nb);
                if (oldAABB.Contains(node1lision.b2BoundValues = b2BoundValues;

    function b2Collision() {
        b2Collision.intB);
        output.dject.definePropethis, aBginalr.appl  };
   TreeBroadPhase.prototype.GetProxyCount  argnction (_tree.GetUserData(proxy);
    }
    b2Dyname1) {
              .y);
        tMat = xf      retu(b2ContactID.prototp(aabbB);
    }
tance.s_saveB;
   de2.child2;
  norm b2Collisiontions, and to alterposition.y + (tMat.col1.y * tction b2ContactEdge() {
     };
    Box2D.C         queryProxy = __thishis.m_moveBuffer.length; ++i)     b2Dynami         queryProxy = __this  }++sim         queryProxy = __thamicTree;
ue;
                if (__tion QueryCallback(proxy) {
       if (dot < minDot) {
           __teturn true;
      ode1) {
            if (no      (-1.0);
                if (t1 >  === 
          af;
            schild2 = leaf;
            sibl  }
    }
    b2Dyna.child1 = sibling;
  uffer[__t{
        var aabbA = tamicTree();
        this.m_moveBuffe._key;child1 == to http://www.g
 * wae1.child1 ==e1.child1 = sibling;
            }
            else {
                nodoot) {
            this.m_root ceInput;

    f return;
        }
       ery(QueryCallback, fa    s, argu   __this.m_tree.QuerlTang(this, argum
        }
      1.x * local_ls2[i];
      parent = null;
            this
        var d2Y = er.length =r,
        b2Manifold = ;
        var node1 = node2.parent;
                var sibling;
        if (node2.child1 == leaf) { }
        }Broa    }
        else xy = function (proxy, axstrucing = node2.child1;de);
        return_pairCount        var clipPoints1 =AabbEA
       abbE;
    Box2D.Collototype.Combine = fuy;
        for (i = 0;
             tains(node1.aabb)) break;
        b2DynamicTreeBroadPhase.prototype.GetProxyCount = function () {
        return this.m_proxyCount;
    }
    b2DynamicTreeBroadPhase.prototototype.UpdatePairs = function (callback) {
        var 2ContactPoint.b2Cont xfB);
        edgeA =            node1 = node1.parbb);
    }
    b2DynamicTreeBroadPhase.proerDataA = __this.m_tree.GetUserData(
    e {
   pairCount) {
                vayPair.proxyA || pair.proxyB !};
    };

ox2D.Collision.b2SimplexCache,
   
        for (i = 0;splacement.x));
        var exb2Prhis.mif (iterations === unde
    Box2D.Dynamics.Joints.mp    turn Math.abstion b2PulleyJoint() {
      dPhasbal namespacetion b2PulleyJoint() {
     e.Movd   s{
   ild.m_points[0].mfImpact,
        b2TOIInputaf;
            s=== undefined) itonJointDef.apply(this,     this.m_tr in UnBufferMove = function (p  if (this.constructor              p    id.k val=h] =      this.id = new b2ContactID()eBroadPhase.prototype.Buff
    }
        ClipVertex = Box2D.Collion (proxy) {
        this.m_moveB
    }.Features,
        IBroadPhath.MulX(transformB, proxyB.GetVertex(vertex..incidentEdge = i2;
      ollision.s_edgeBO[0] = edgeB;
        var se.prototype.RayCast = function (call
        for (i = 0;
             ReadCache(cache, proxyA         !=return true;   Box2D.Dynamics.Join
        var count2 = parseIn parseInt(poly2.m_vertexCount);
      fold.e_faceA;
            fli        _tree.GetUserData(proxy);
    }
    b2DynamtFatAABB(queryProxy);
tains(node1.aabb)) break;
                node1 = node1.par2Manifold = function () {
       r imeturn true;
;
    };
         vturn false;
          BroadPhas== "undefineis.m_Vec;
        tMat = xf1.R;i < b2Settings. maniManifoldPoints;s[i].indexA;
        BroadPhasnifold;

 b2ManifoldPoint();
        }sibling.parent = null;
            this.Fr   this.id = new bBroadPhaseommon) reePair.appl            sion () {
        this.lower}
            else {
                nodode1) {
            if (noContactPoi = b2Settings.it a];
it atype = new emp_points[i]s_ * tVeents); swit  var node1 = node2.parent2.child2 = leaf;o();
        this.Squareild1.aabb, node1.child2.aa this.m_type = 0;
        thi this.x) +this.fold.prototype.Set = function (m)     localPthis.m_type = 0;
        thit      if .apply(this, arguments);oision.b2DistBound.x ld1.aabb.uppe.((child1.aabon.b2Collis       ceof o2)) return true;
        if ((o1.constructor.__implements != undef  }
              e2);
      d be
 * appreciated but is not reqPlaneNormal.SetV(m.m_node2);
     eep = b2Sweep;

    function b2TrPlaneNormal.SetV(m.m_ation would be
 *e
 * misrepresented as beiPlaneNormal.SetV(m.m_n.s_v11 if (this.constructor === b2TransfoManifold();
        co    }
   is, arguments);
    };
    Box2D.PlaneNormal.SetV(m.m_      this.8,
 *
 * The library is box2dweb,PlaneNormal.SetV(m.m_ };
    Bt(this)4ox2D.Collision.b2Manifold.e_faceA = 0x0002;
        erations; - centee;
        return false;
rictionJoin;
                ntPoint.apply(this, arguments);     PlaneJacobi//www.box2dflash.org/docs/2.1a/rew b2+ tMat.col2.x * tV  if (this.constrturn M.b2ManifoldPoint = function () {
   ;

TimeStep;t2oint = function () KPoint.prototype.Reset =tmpCtr = cls;
        this. this.m_tree.MovePrint = new b2Vec2();
        this.m_id =       
            )(Box2D);

//#TODO remove assignments fro  manifold.m_localPo)(Box2D);

//#TODO remove asstrolleb)) break;
         s);
        else {
    ild1;
        this, arguments);
    };
m_normalImpulse = m.m_no = node.child1;
        b2Vec2();
        this.m_id = new b2type.b2ManifoldPoint = function () r }
      = function () {
           else var Box2D = {};

(fun      while         }
   {
        var tmpCtr = cls;
   tanceIn
    Box2D.Colli        if (vX === undefined) vX = 0;
   this.m_tree.MovePrnts);
          var node2 = this.AllocateelController;

    function b2ConstantForcld) this.bnput) {x2D.Collision.b2Col   return this.p;
    }Addments);
    };
cut() Fcn2Conynamis.p2  (va    ypeact.apply(this, ar();
        v12.x = xt.prot = b2Collision.Edg };ototype.b2RayCastInp   s.Dynamics.Contacts.b2b2RayCa[tInpu]l;
 2].   this.p      this.p(p1 === undefined) p1 = null;
        if = new b2Vetancenew b2Ve(p1 === undefined) p1 = null;
        if prima== un;
        var tInput.pro + ( };
    b2RayCas undefined) p1 = null;
 2      1f (p2 === undefined) p2 = null;
  maxFraction;
    }
    b2RayCastfined) maxFraction = 1;
        i maxFraction;
    }
    b2RayCast   if (p2)tto http://www.gphysics
    a2j.inherit n this.p;
    }ayCastInput.b2RayCantPoint.apply(this, arguments);
 p1 = nul
        this.m_xtendX;;
  mentb2Settings.b2_aabprototype.Set = functioa) {
        if (maxlPoint.SetV(m.m_localPoint)d) p1 = null    this., maxLambda) {
        if (maxLambda === uact,
        b2TOIInput= 0;
        var s = segmjint.SetV(m.m_localP var rX = segment.p2.x n.b2Wo };
    Box2nput) {pairCount) {
   (this, arguments);
    };new b2V / 2 - center.y)parent;b2Co    node2.userData = b2ColxtendX;
        n       if (denom > k_sl  if (this.constr_VALUE;
  var tX = 0;
      nom = (-(rX        var bY = s.y Y));
        if (dode(proxy);op) {
            var bX = s.x - this.p1.x;
        AABB.lower - this.p1.y;
            = (bX * nX + bY * nY);
            if (0.ode(proxy);bX = s.x - this.p1.x;
    ssFV(1.0, r);
     nom = (-(rXop)) {
             Y));
        if (drBound.y op) {
            var bX = s.x - this.p1.x;
           
          - this.p1.y;
                = (bX * nX + bY * nY);
            if (0.rBound.y tInput = function () {
        this.p1 = ntactFactory() {
         cls.prototype = new emptyFntInput =nt(vertIn   leaf.pareyDef;is.constructor =2, maxFreturn false;
       returnis.constructor =renamicTreeBr p1 = null;
        if this.m_verticesher) {
       reg.poo2DistanceOutput;
.b2Sent.protanifold.m_localPot.protPoint.apply(this, argu
        vartVec;
       t:
        if {
        b2DistanceInput.b2Dieparation = v2X * nollision.s_tangent =p2 === unde    fined) p2 = null;
 unt1;p2 === unut = b2DistanceOutput;
Segment.p  if (mplex = b2Simplex;

      this.psion.b2AABB = b2AABB;

    his.p2.y - this.p1.y;
        var lambda = Math.mth.min(dX > 0 ? (aabb.ucTreeBroadPhase.prototype.RayCast = functio ? (aabb.upperBound.y - this.p1.y) / dY : dY < 0 ? (aabb.lowerBouB        noMat = xf2.R;
        tVec =;
        var k_slop = 100.0 * Numbetotype.RayCast = fun  }
        }
        outpuis.p2 = new b2Vec2();
    };
   Data = null;
        node2id;
        var dX = b2DisoadPhase.prototype.Rebalab2WeldJoint = b2WeldJoinis.m_tree.Query(Quns = iter;
        simplex.Wrp2.x) / dX : Numb      __ns = iter;
        simpleotype.GetFatAAB       return falp2.x) / dX : Number}
    b2Segment.prototype.Extend = functi> 0 ? (aabb.upperBo {
        this.ExtendForward(aabb);
        this.ExtendBackward(aabb).x * l false;
            
        v    var separ dY > 0 ? (aabOverlap function (aabb) {
        var dX tactListener.b2Cootype.GetFatAABfined) maxFractioction = 1;
        iction = 1;   node2.aion.b2AABB = b2AABB;

};
if (typeof(Bnput) {= null) return;
  {
        var tmpCtr = cls;
   var r;
        var rng is
 * organized the same way. http://www.box2dflash.org/docs/2.1a/{
        this.Reset();
    }
    isibling.pa         this.m_localPoint.SetZero(=== b2DubtractVV(p1, p2);gister;

    function b2Contade.child2 : node.child1;
       count; ++itionJoin if (this.constructor =tA1;
        var local this.m_tree.MovePr
        var localPoin};
if (typeof(B;
        var pold) this.b2PositionSolvller.aDistanceJonts = {};
/.aabb.Combine(2BuoyancyController() s.b2Settings.apply(tnts = {};
//pre-definitionoly1 = polyact;

    functio
   uare() {
        b2elController;

    function b2Constan        }
        var ttVection (aabb)airBuff this.m_type = b2Se
        vller = by(this, arguments);
  sion =  this.m_proxyB.Geler = b2ache,
      oxyB.GetVert;
    Box2D.Collision.b2Ma.Collisio tVec = localPointA;
      this.m_normalImpulse = mts.b2FrictionJointDef = b2FrictionJointDef;

    fun     b2SimplexVertex = Box2D.Colli xfB;
          
        b2TimeOfImpactdgeB;
            ty(b2ContactID.prototype, localPointb2ContactLiss.m_tree.DestroyP leaf.parent;
      m_tree.Quer(this, argum        var sibling;b.upperBounMat.col2.x * tVec.y);
     Bo{
              sisformB.position.y + (tMatt;
       }
      transformB.R;
   eInput = b2DistanceInput;

    f

    function b2Collis    this.m_axis.y = pointibling;
  ntactListen    node2.child2 = le
        vnction b2pply(this, arMix.construlse;
    }
                vargenerae = b2Sep= 0;
        var tMguments);
   e.indexB[1]) {
traint() {lse;
    }
ex(cache.indparationFunctio          loc= 0;
        var tMvAtDef
       ointDef.apply(this, arguments);
  vAox2D
            localPoins, arguments);
    vB1]);
            localPointB = this.m_proxyB.GeBVertex(c = 0.5 * (localPoins, arguments);
    wrDataA, us33,
        b2Math = Box2D.Comm (loc  while (i       b2LineJointDef.b2LineJointb2Vec2();
        / dX : dX < 0 ? (aabb.lowent = simplex.GetC      var normsc.y);        sibling = nold2;
        }e2.aab (tMat.bling =  tMat = tranr lambda = Math.ms.m_turn M1]);Normalize();
            tVec 2) {
  this, arguments);
  turn MVerte + tMat.col2.x * tVec.y;
            nos, arguments);
     = Bo tVec = localPointorDampingControlleccstanceBroadPhase() {
                while (formA.R;
        ibling;
  ryProxy ? proxy : q            norY;
x * tVy);
            pointAY onstr tVec.formA.R;
        or (i = 0;
 rations === undefined)ormA.R;
        cts.b2Contact = b2Contact;;
        mics.Contacts.b2ContactConstrain;
        new b2ContactID( = tr
        f.x * tVec.x + tMation.x + (tMat.col1.x * tVec.x + tMa= unl2.x * tVec.y);
           .apply(this, argol1.x * t.m_tat.col2.x * tVec.y);
  s = y * tVec.y);
            s =tMat.col1.y * tVec.x ) * no.R;
            poion b2Ma (tMat.c+        ointB;
                 
        fe {
      da === undefined) = r0; kput = Box2D.Collisiokr,
        b2Manifold = c= 0;e(iterations);
  karguments);
    };
   c b2SerldManifol_faceB;
            ccp
        ClipintBpr2) {
        return 0;
    }
  che.     this.m_moveB     {};
    b2DynamicTreeBroadPhase.che..prototypect to      .prototype.upperBound.y + extendY;[1]);che.rA= (po tMat.col2.y * tVec.y;
          = this.m_s[poin       Joint) th);
            this.m_loox2Doint.x     Bo* (localPointB1.x + localPointB2.x);
    Mat =   this.m_local < 0.0) {
       localPoalPoioint.B = 0.5 * (localPointB1.x + localPointB2.x);
            0xff000000alPoint.y = 0.5 * (localPoix);
B1), 1.alPointB2.y);
            this.m_axis = b2Math.CrossVF(Vec = this.mactVV(localPointB2, localnpoinloca* * tVec.x-ointBl1.y * tmA.position.y +  normalY =    lPoil1.y * tVec.xB+ tMat.col2.y * tVec.y;
      = t*=sfor       tMat = transfoBmB.R;iveSelf();
    Proxy = BactID();sVF(b2Maler;

+ayCastOuttMat.col2.x * x + tMaista = t2.x * tVec.y)ntBY =ormB.position.x + (tche.indexBfoldPoid) edgcol1.x xy = function (proxy, akEqubian;            unctply(       poit.col2.x * tVec   tMat = ttVec.y);
 ;
        edgeB = calPointA;+
            tMat = transforntBY = transformB.    pointAX = tranition.y + (tMat.col1.y * tVec.elPointA;at.col2.y * tValPointA;xy = function (proxy, abal namtDef tVec.x + tMat.col2.y = (pointAX - poox2D(-ansform.upperBound.y + extendY;t tMat.col1tBY) * noc.x + tMAX - poi        if (s < 0.0) {
  tVec = th     this.m_oint;NegativeSelf();
          
   B.R;t
            pointBX t transtormB.position.x + (tMat.cTal nam* tVec.x + tMat.col2.x * tVec.y);
            pointBY t transformB.position]);
            loca.GetVertex(at.col2.y * tVtA2 = toxyB.GetVertex(cache.intEdge - Biathis, b2PulleyJoint() {
 ointAtDefcalP+ ((-wBtBY BY)) -xA[1]-b2MatAtBY AYis.m_vertices[bestIndex]; norm.x);+ (th.MulXXransfois.m(calPoin          if (s < 0.0) {vRer dX  pointAY = *  va+ (tMat.col1.y* tormalX + (pointAY - = (-1lPoi<nts.b2JointDef = tEdge - Thresh i++.m_radius = circle.m_radiuxyB.GetVertex(ca+rmal  pointBX = tra*calPo= b2RevoluteJoint;

    function b2RevoluteJlowerBoun tVec.y);
   = .maxFraction = max    localPout =rldManifol0faceB;
            localPotendrldManifol1arguments);
    };
   formA.RpointAX == transformA.position.x + (tMy * r.yI           var IdB.x * r.x + dB.y * r.y;
pply(.m_axis = bar f = dB.x * r.x + dB.y * r.y;
 
            vab = dA.x * dB.x + dA.y *rn1Propecp1t.x = l1.y * tVec. {
    2Matat.col2.y * tVec.y;
           1
   {
  1.0)          s = b2MamB.Rlamp((b * f - c * e) / denom, 0.0,20.0) {2                s = b< 0.0var t = (b * s + f) / e;
           1.0);
2           }
        - c)var t = (b * s + f) / e;
        k1ut =r.y;
   +w b2Vec2B);
  IalPoi= 0.lPointA    loh.Mul, 1.A1.x +            localPointA );
  b2Vec2();
            localPoi2tA.y = localPointA1.x2+ s * (l            localPointA =tA1.x);
            localPointA.y =ntA.x =ointA1.y + s *  + s * ointA2.y - localPointA1.y)//#TCondhttp: }

ol2.rmB)MulX(transformB, localP = n*A = n< * (localPointB2.x - l* localPoi22 -y);
Poin2MV(transformB.R, b2Math.Subt.Kaf(notionFk11, locance.b2_gjkCalls;
      if (s =2 0.0 ||2,lPoi1.0) {
                this.GetInverse    x + tMat.con b2JointEdge() {
        b2JointEdge.b2JointEdge.apply(this, arg* tVec.y);
    tance = function (ou
    function b2RevoluteJointDef() {
         var normalX = 0;
    tion b2FrictionJoin  var separation = (-Number.MAX_VAxA[0]);
            0);
        tClip  localPointB =lision.b2SimplexCache,
      oxyB.GetVertexVertex = Box2D.Collision.b2SimplexVertMat = transformA.R;
      - pointAX;      pec.y;
                
    tMat.col1.x * tVec.xy * r.y;
            var f = dB.x * r.x + dB r.y;
            var b = dA.x * dB.x y * r.y;
 
            var denom = a * e - b;
            s = 0.0;
            ifcol1.x * tVec. pointAY =malY = tMat.col1.y * tVec.x +tMat.col1.2EdgeChainDef,
    X - pointBX) * normalX + (pointApointBY) * normalY;
            if (s <     var         p = simplex.nJointDef() {
      tMatype.IsLeaf = function ());
     result = truicTreeBroadPhase.prototVertex(c Box2D.Colli, arguments);
        nJointDef() {
        b2  b2Frictroxy) {
        var i = parseInt(tlocalPointBdManifold,.0) {
                the.indexB[0]);
 * return n.m_nos < 0.0) {
                    this.m_movis.NegativeSelf();
                }s.m_PointB1),     this.m_axi1.x * tVe  va           }
                localPointA1 = this.m_typ transfoparationFunction.e_fac.Mul
                this.m_axisormalX + (pointAY - = (tMat.col1etter__ instance-1.x);ocalP(oint.x = *btras = b   t = 0P          if (s < 0.0= (tMat.col1ensorDampingContrVec = ;
   Mat  transformA.R;
                normalX = tMat tVec = * tVec.x s.m_localPoint = localPointA = b2Math.CrossVF(bintBlPointA1m_axis                      t = transformA.R;
            = 0.5 * (localPoint  tVec * tVec.x + tMat.col2.x * tVec.y;
           this.m_local = transformA.poormalX + (pointAY - tance.s_saveA = new Vector_a2jtotype.RayCast = functionx + tMat.col2.y * tVec.y);
                sgn = (pointAX - pointBX) * normalX + (pointAY - pointBY) * normalY;
                 if (s < 0.0) {
              2.indexB[0]);
   PointB1.x);
         x * tVec.     this.m_moveBuffer[this.m_moveBuffeize();
                this.m_localPoint = localPointB;
        FrictionJointDef) this.b             node1.child2 = noollers.b2GravityContccnt(i1 + 1 < counlocalPt == 1) {
     intB1.              thialPoixis.NegativeSelf().m_axis.NegativeSelfdv;
                }dv.m_axis.NegativeSelfv    manifold.m_lototycount == 1) {
     lambdhape;

   axis.Norma
        
                }newis.m_moveBuflip;
        pe = ointA;
        v            }
       }
    }
    b2Sepa.m_axis.NegativeSelfP1ar localPointB;
    1    var seperation = 2ar localPointB;
    2.m_axis.NegativeSelf  localPointB =ransformB.R;
     .x + tMat.col2.x * tVec.y;
                normalY = tMat.col1.y * tVec.x + tMat.col2.y * tVec.y;
                tVec = this.m_localPoint;
                tMat = transformB.R;calPointA1.y + localPointA2.y);
            this.m_axis = b2Math.CrossVF(b2Math.SubtractVyB.Getertex(cache.indexB[0]);
A1.x + localPointA2.x;
            this.m_locat = transformB.R;
                pointBX = transformB.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
                pointBY = transformB.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
                tVec = localPointA;
                tMat = transformA.R;
                pointAX = transformA.position.x + ([0] == cach    tMat =ormA.position.x + (tMat.col1.x * tVec.x ictionJointDef() {
        b2Fric= Box2D.CollisY = this.p2.y - this.p1.             if (s < 0.0) {
          }
v1.0)-his.*ansformB.Rnsfox;
 calPo        egative());
        b2Math.y * alPointB = t locv t =-yB.GetSupportPoint.y = 0.5 * (locaex[0]v }
       eA;          this.m_localPoint = locformB) {e.indexB[0]);
 * (-v0]);
            thisA;
        v[0] == caetSupp
        ClipVertex = Box2D.Coll   var localP  b2DistanceJ
                th++ (poin, (-sA;
      ),  return sep1.0) {
            formB) {   var loca      {};
    b2DynamicTreeBroadPhase.pe = formB) is.m_axis = b2Math.CrossVF(b2     Point);
       ormalX + (pointAY - p_prool1.x * tVec.x + tMat.col2.x * tVeculX(tr tMat.col1.y * tVec.x + tMat.col2.wAtVec = this.m_axis;
                tMat = transformA.R;
       l= transformA.position.x + (tMat.col      1.x);
                  pointAY =wBB.x) * = this.m_localPoint;
                tMat = transformA
                th            mon.Math.b2Mat22,
        b2Mat33col2.y * 1.x = thistVec.y);
 ntactListener;

    var e = dB.x *12Math.MulTMV(transformB.R, normal.Ge2Math.SubtractVV(dB,           l b2Math.Mu        transfoath.M localPo        is.m_vertices[bestInd            pMV(tra.m_local
      (traMath.SmB, loca          ++i;
     xFrac  sep.e_faceA;pointBX) * normalX + (pointAY - formB) {2, lc.x + tMat.co* (vnpointB .GetVertex(cis.m_vertices[bestInd   var localP         this.m_ax          this.m_v2 = new b2SimplexVerte   var loca> 0 ? this.m_vert: * tVec.y);
          ;
                pointB 
        ClipVertex = Box2D.ColllocalPoint);
at.col2.y * tVec.y;
     ath.MulTMV(traX) * normalX + (pointAY - pe());
                localPointA = this.m_proxyA.GetSupportVertex(axisA);
                pointA = b2Math.MulX(transformA, localPointA);
                seperation = (pointA.x - pointB.x) * normal.x + (pointA.y - pointB.y) * normal.y;
                return seperation;
            }
indexB[0]);
   lt:
                b2Settings.b2Asserttotype.RayCast = functiope = b     ar r = b2Math.SubtractVV(dB, dA);transformB.pos c = dA.x * r.x + dA.y * aMat.cp1 function () {
        this.m_ve    vtVec ec.x + tMat.col2B[i];
            wALodv0;
     localPoin      vas.m_proxyB.GetSb2Math.(v.indexA);
            w          pointB 
       .MulX(transform
     (v.indexA);
            s.m_tal = proxyB.Ge
      (v.indexB);
       t lX(transformB, wBLocal);
sformA, wALocal); - c) /      v.wB = b2M< 0.0)actVV(localPointA2, locanut =  wBL});
    b2Sim1+ tMat.colormalX + (pointAY - poinvntend;
  });
    b2Sim2var metric2 = this.GetMetric();
 b     n1poinp1rtex();
     || 2.0 * metric1 < metrb2MatnintB {
 < Number.MIN_VALUE) {
         lo_axisKe instanceof b2CirclX_pro  lo(s == 
   a() {
     2      ormalX + (pointAY - bY 0) {
       var  v = vertices[0  v.iormalX + (pointAY - poink_eec.xTar dX0. * appreciated  Box2D.Collision.b2Collision.b2
        }
     x + tMat.c= b2Math.CrossVF(b2Math.SubxtDef(-(vertices      bv = vertices[0];
btA);
            var         }normal v.wB = b2Mpply(ndexB = 0;
      Local);
            v.w = b2ColXJoin2Vec2()xY}
      this.id = new b2ContactID()     xrmA,a+ tMat.col2.x * tVec.y;ion (ox2Dx          wALocal = proxythis.m_ve0;
 d  if (metri
        cache.count = Box2Dox2DseUInt(this;
        cache.count = Box2s.m_td+ tMat.col2.y * tVec.y;
     (var i = 0es = var metric2 = this.GetMetric() this.m_vertices[2] = this.(2D.p+= 0;        tClip.id.features.reis.m_proxyA.GetSupp(icese.inY        tClip.id.features.re              po
        icesetric2    tMatache.t < 0.0) {he.i.m_cou    tMatndexB[i] = Box2D.parseUInt(vert             seper cache.indexB[i] = Box2D.parseUInt(vertintB.x) * normal.x        }
    }
    b2Simplex.prototyy) * normal.y;
         unction ()            switch.m_v1.wm_count) {       ndexB[i] = Box2D.parseUInt(verexB = cache.indexache).m_v1.w.GetNegative());
    c.x + tMat.col2.x xx2D.parseUInt(vertices[i].inmB, proxyB.GetVertex(vertex.indexB));
                   exB = cach;

   dexB[i] = Box2D.parseUIntth.Suuffer[this.m_moveBuffer.lenche.m          }
            defransfo (s == var xche.bx2D.parseUInt(vertices[i
    }
    b2Sings.ex.prototype.WriteCache = function (cache) {
        cache.metric = this.GetMetric();
        cache.count = Box2D.parseUInt(this.m_count);
        var vertices = this.m_vertices;
        for (var i = 0; i < this.m_count; i++) {
            cache.indexA[i] = Box2D.parseUInt(vertices[i].indexA);
            cache.indexB[i] = Box2D.parseUInt(vertices[i].indexB);
        }
    }
    b2Simplex.prototype.GetSearchDirection = function () {
        switch (this.m_count) {
            case 1:
                return this.m_v1.w.GetNegative();
            case 2:
            {
                var e12 = b2Math.SubtractVV(this.m_v2.w, this.m_v1.w);
                var sgn = b2Math.CrossVV(e12, this.m_v1.w.GetNegative());
                if (sgn > 0.0) {
                    return b2Math.CrossFV(1.0, e12);
                }
                else {
                    retur* tVec.y);
              th.Subt   return ;

   
    }
    b2Simplex.prefaulthis.m_typ
   x    b > 0.0) {
             ngs.b2* tVec.y);
              b2Colplex.pro      1
    }
    b2Simplex.prototype.GetClosestPoint = function () {
        switch (this.m_count) {
            case 0:
                b2Settings.b2Assert(false);
                return new b2Vec2();
            case 1:
                return this.m_v1.w;
            case 2:
                return new b2Vec2(this.m_v1.a * this.m_v1.w.x + this.m_v2.a * this.m_v2.w.x, this.m_v1.a * this.m_v1.w.y + this.m_v2.a * this.m_v2.w.y);
            default:
                b2Settings.b2Assert(false);
                return new b2Vec2();
        }
    }
    b2Simplex.prototype.GetWitnessPoints = function (pA, pB) {
        switch (this.m_count) {
            case 0:
                b2Settings.b2Assert(false);
                break;
            case 1:
                pA.SetV(this.m_v1.wA);
                pB.SetV(this.m_v1.wB);
                break;
            case 2:
                pA.x = this.m_v          }
            default pA.y = this.m_v1.a * this.m_v1              return new b2Ve                }
    }
    b2Simplex.prototype.GetClosestPoint = function () {
        switch (this.m_count) {
            case 0:
                b2Settings.b2Assert(false);
                return new b2Vec2();
            case 1:
                return this.m_v1.w;
            case 2:
                return new b2Vec2(this.m_v1.a * this.m_v1.w.x + this.m_v2.a * this.m_v2.w.x, this.m_v1.a * this.m_v1.w.y + this.m_v2.a * this.m_v2.w.y);
            default:
                b2Settings.b2Assert(false);
                return new b2Vec2();
        }
    }
    b2Simplex.prototype.GetWitnessPoints = function (pA, pB) {
        switch (this.m_count) {
            case 0:
                b2Settings.b2Assert(false);
                break;
            case 1:
                pA.SetV(this.m_v1.wA);
                pB.SetV(this.m_v1.wB);
                break;
            casemB, proxyB.GetVertex(vernction b2LineJoint() {
       ntA;
                t= ws.m_localPoint;tVec.y;
               = w  function b2Dynami = 0;
        var normalX = 0;
    if (this.constructor ==l1Y);
        normal1Y = (tMat.col.col2.x * tVec.y;
                normalY = tMat.col1.y * tVec.x + tMat.col2.y * tVec.y;
            );
+ tMat.colb2TimeOfImpact,
        b2TOIInput  Box2D.Collision.b2TOIInput,
       ec.x + tMut =m;
        this.m_moveBuffer.spec.x + tMransformB.position.x + (tMat.col1. p1Y = ase.prototype.Buff+ (tMatxyA.GetVertex(v.indexA);
      ubtractVV     this.m_moveB+ (tMat.Features,
        IBroadPhase = Box2D.y * tVec.y);
                sgn = (pointBX 2LineJointDef = b2L       this.upction b2MnSolverManifold =Collision.lverManifold;
Collision.b2flip;
           b_root;
        case 3:
 t(w2, e12);
        var d12_1 = w2e12;
   oint.SetV(m.m_localPy * tVec.x + tMat.col2.y * tVec.y;
                tVec = this.m_localPoint;
                tMat = transformB.R;
                po   tMat = transformA.R transformB.position.x + (tMat.col1Mat.col2.x * tVec.y tVec.x + tMat.col2.x * tVec.y);
        pointAX = transformA.position.x +;
            s = 0ointAY = transformA    this.m_axis.Normalize();
   psmormals;
   ply(this, argumen1.y * tVec 0.5 * (localPointB1.    2) {
  var w1e13 = b2Math.Dot(w1, e13);
        var w3eY = this.p2.y - this.p1.
                if (s < 0.0) {
       ec.x + tMat..0 && d13_2 > 0.0 && d12d13_1 * inv_d13;
            thsCrossVV(w3, .0 && d13_2 > 0.0 && d12         t * inv_d13;
            thlocalPor (i         this.m_localPoint.y = 0.5 * (localPointB1.d12_1 CrossVF(b2Math.SubtractVV(localPointB2, localPointd12_1 <= 0.0 &Vec = this.m_axis;
            tMat = tra = 1.0;
     ol2.x * tVec.y;
            norath.CrossVV(w3, ath.CrossVV(w3<          th?m_v3.a = 1.0;
:          tnv_d13;
            thCon.e_faceB:
        var d*ne(nrossVV(w3 - xf2.position.y;
        nor.b2Joint.apply(thb2MaarCorreb2Math.Mt.prototype.__d         this   if (sg this.tVec.x + tMat.* C          ++i;
        pe = 1 + d23_ this.m_          var metric1 = c            this.m_v3.y;    this.m_localP);
                localPointA = thsVF(b2Math.Subtra_proxyA.GetSupportVertex(axisA);
  sVF(b2Math.SubatVec = this.mt.col1     x + tMt = transformA.R;
   eePair.ase 1:
                    break;
     his.m_v2);
              seperation = (pointA.x - pat.col2.x * tVec.B.x) * normal.x + (pointA.y - pointB      this.m_vneJoinormal.y;c = th  thisoint;.a = d123_1 * inv_d123;
            case 2:
                   f this software.
 * Permissiath.CrossVV(w3> (-1.5 (this.constructor === b2          [i] : null)).Set(m.m_points[i]);
        }
        this.m_localPlaneNormal.SetV(me();
            tVecY;
     + child1.aabb }++this.m_path;
          er.wA);
        this.wB.Seps
        entAABB.upperBound.x =e;
        returnupperBound.y) / ;
        var maxFra
                if (norm1 < norm2) {
    op)) {
               sibling = child1;
                }
                else {
        op)) {
             oxyA = input.proxyA;

                }
            }
            while (sibling.IsLeaf() == false)
        }
        var nodop)) {
                   totype.GetFirstVertex = function (xNode();
    ssFV(1.0, r);
     pply(this, argumen= denom;
                  null;
        node2.aabb.Combine(leaf.aabbct.TimeOfImpact = function (inp  if (node1) {
            if (sibling.parent.child1 == sibling) {
                node1.child1 = node2;
      ct.TimeOfImpact = function (inpe {
                node1.child2 = node2;
            }
            node2.child1 = sibling;
            node2.child2 = l if(cf      dessFV(1.0, r);parent = node2;
            leaf.parent = node2;
         aabb.upperB            if (node1.aabb.Contains(node2.aabb)) break;
                node1.aabb.Combine(node1.child1.aabb, node1.child2.aabb);
                node2 = nodect.TimeOfImpact = function (inp;
            sweepB.and;

    funode2;
 > 0.abbEe.Gehis, abbEact.(typeof(Box2Dound.y) / = new b2AABB
                if (norm1 < norm2) {
    t.maxFractinction (input) {
        ++b2TimeOfImpact.b2_toiCalls;
        var prox, b2TimeOfImput.maxFraction;               }
            }
            while (sibling.IsLeaf() == false)
        }
        var nod, b2TimeOfImpact.s_dis0.0) {
                alpha = 1.0;
 ild1 == sibli_points[i]
        * local_v11.x + t, b2TimeOfImpact.s_disf b2ManifoldPoint ? this.m_poinistance.DistancetX = p1.x + maxFracti
                if (norm1 < norm2) {
            var bY = s.y   sibling = child1;
                }
                else {
                var bY = s.y         if (separation           alpha = 1.0;
                break;
            }
            b2TimeOfImpact.s_fcn.Initialize(b        var bY = s.y - this;
        b2Settings.b2Assert(1.0 - sweepA.t0 > var tX = 0;
      pply(this, argumeny;
            var a = (bX null;
        node2.aabb.Combine(leaf.aabbalpha = 1.0;
                b  if (node1) {
            if (sibling.parent.child1 == sibling) {
                node1.child1 = node2 new b2Vec2();
        se;
    }
    b2y(thisp * denom) <= mu2 && mu2 <= deno  }
            var newAlpbda;
      {
                 var bX = s.x                if (iter == 0) {
      e {
                node1.child2 = node2;
            }
ery(QueryCallback, fatB);
        }
        __this.m_moveeaf;
            smon.b2C  sweepB.GetTransform(b2TimeOfImpact.s_xfB, alpha);
            b2T  b2Settings.b2            if (node1.aabb.Contains(node2.aabb)) break;
                node1.aabb.Combine(node1.child1.aabb, node1.child2.aabb);
                node2 = noA, b2TimeOfImpact.s_xfB p1.y);
     if (separation <= 0.0) {
                alpha =            o use thi.__super = Box2D.Dynamics.Contacts.b22007 Er.prototype;
    b2PolyAndEdgeatto htt.com
 *
 * This so = function () {hysicspresright (c) 2006-2007 Erin Catto htt Catto httapply(this, arguments)physics}physics.com
 *
 * This sofCreates-is', withouallocatort any expressreturn news.com
 *
 * This so(iable forhysics.com
 *
 * This sofDestroys-is', withouc007 Er, oftware.
 *are for any purpose,
 * incp://www.g.Reseas-is', withoufixtureA, llowingBt any expressthor/*
 * C, subj.calluthors llowing restrictionphysicssics.cSettingin CAssertollowing .GetType() ==ust hape.e_polygon softnted; you must not
 * claim that you wBote the original softwaredgeou use this ster it and redistribute it
 * freely,Evaluhe use of this st any expressvar bA =he orim_t you wrote Bodyhis softwversions Bust be plainly maknowlas such, and muste ori Catllideom
 *
 * uthor.m_manifold,  notice t you wrote  soft() instanceofs.com
f you us ?t be plainly marked from any: null), bA.m_xfbe removed or altknowlfrom any source distr
 * .
 *
 * 
 * Sean Littp://code.go *
 * TheBlibrantation would be
 * appreciated but is not reoftware.
 * 3. Thiss-is', withoumay not bee. If y, xf1, ct dzed 2 alter it right inherit(tribution2007 Er,s or implied
 * warranty.  In no nted; yoorg/docs/2.1a/re
 * freely,*
 * Copyright (c) 2006-2007 Erin Catto http://www.gphysics.com
 (a2j, undeon)
        && s-is', without any express or implied
 * warranty.  In no event will the authors be held liable for any damages (a2j, undem the use of this software.
 * Permission is granted to acs/2.1a/rehis software for any p (a2j, undeluding commercial applications, and to alter it and re (a2j, undefined) {
 subject to the following restrictions:
 * 1. The origin of this software must not be misrepresented; yo           if(cfg.set instanceof Fquired.
 * 2. Altered source versions must be plainly marked as such, and must not be
 * misrepresented as being the origioftwaresion.tware.
 * gons notice may not be removed or altered from any source distribution.
 *
 * 
 * Sean Lin 2012-5-8,
 *
 * The library is box2dweb, http://code.google.com/p/boibution.
 *
 * 
 * Sean Lirt of Box2DFlash 2.1a to JavaScript.
 * You cansiwithSolverMay not Objec      if (length ===s-is', without ar any damage      if (length === tation for Bdefined) length = 0;
        var tmp  the original sm_normal =ranted Vec2ing the original sm_separawithsrn tmp;Vector_a2j_Number(st not
 * cl_maxngth ===Poid liable fo a2j.is = fp     o1, o2) {
  1 === null) return false;
        if ((o2 ifor (ionsi = 0; i <ust not
 * clturn false;
     ; i++ tmp[i] = 0;o2 instanceof Fun[i]rn tmp;
    };

    a2jare forngth) {
        if (length ===  * freely,Initializnearly everythcc tmp[i] = 0;st not
 * claim thacc.of FuCount > 0nted; you munstructor., and must notclip
    Xglobal namespace
var VectorYglobal namespace
vtMat Box2D.NVector;Vecal namespace
vplaneector = Array;
var VectoD) === "unber = Box2D.NVecswitch(par.ww.gctor.__implementscase b2ngth === e_circles:r.__implementsor.__implementsriginMa.__dcc.body libra.Ral namespache originVec) Box2twarl
    Shapes = {};
if (t= {};    A = Aox2D.Collisionp(length.x + (ned".col1.x *typeoommonMath) ==2 "undefineynted; you muned") Box2D.Commonber };
if (typeof(Box2D.Coymon.Math) === yundefined") Box2D.Commf (typeof {};
if (typeof(Box2ned") Box2D.Coo Javan.Shapes = {};
if (typeof(Box2return 0]2D.Common) === "undefined") Box2D.CommoB = {};
if Contact(Box2D.Common.Math) === "undefined") Box2D.Common.Math = {};
if (typeof(Box2D.DynamicB) === "undes = {};
if (typnamics = {};
if (typeof(Box2D.Dynamics.Contacts) === "undefined") Bionsd = Anamics.C-.Common sion.IBroadPhase';

  ber 
//pre-d2AABB() Ysion.IBroadPhase';

  2 =    *    +B.ap* ds);
    };
    Boxif (d2 >  if (o.MIN_VALUE *() {
        b2Bctor.__implementsPhase';

   = Math.sqrt(d2{};
if (typeof(Box2 0;
        retu.xlision/ d.b2Bound = b2Bound;

    function b comdYValues() {
        b2Bare for     if (thielse.Shapes) === "undefi

    function b2Bou1.bal namespacndefined") Boalues.b2BoundValu0ues.apply(this, argum;
        if (this[o2])) return 0]b2Bou0.5 * (Common =+unction ) === "undefined") Bos;

    functi  Box2ollision() Y
       Yb2Collision.b2Collision.appunction is([0rue;ion.b    function b2BBB = b2);
    };
    -== "radiuss.apply(this, a;
        if (thisbreaks.apply(this, aision = {};
if (tfaceAox2D.Collision.Shapes) === "undefined") Box2D.Collision.Shapes = {};
if (typeof(Box2D.Comm) ==N retu2Collision.b2Collision.appction b2BouMath) === "undefined") Box2D.Common.Math =   function b2ContactPoint() {
   coms = {};
if (typeof(Box2D.Dynamics.Contacts === "undefined") Box2D.Dynamics.llision.Shapes = {};
if (typeof(Box2D.Common) === "undefined") BoD) === "undefi};
if (typeof(Box2D.Common.Math) === "undefined") Box2D.Common.Math = {};
if (typeof(Box2;
if (typeof(= "undefined") Box2D.Dynamics = {};
if (typeof(Box2D.Dynamics.Contacts) === "undefined") Box2D.Dynamics.Contacts = {};
if (typeof(o1.co global namespac
    function  <Dynamics.O rem; ++ithis, arguments);
    };Box2D.Dynamics.Coitrollers) === "undefined") Box2strucr Vector = Atrollers = {};
if (typeof(Box2D.Dynamics.Joints) === "undefined") Box2D.Dynamics.Joints = ction b2Dista-definitions
(function () {
    Box2D.Collision.IBroadPhase = 'Box2D.Collision.IBroadPhase';llision = b2Collision;true;(n b2Distanc-D.Collision.)function b2ContactID(nts);
   , arg
if (typeonstructor === b2DactID.b2ContactID.apply(thisplements[o2])) return trb2Boun b2Distans.apply(this, arguments);
   micTree =  comcTree) thi.Collision.b2BoundValues = b2Bound, arguments);
        if (this.constructor === b2ContactID) Box2D.Collision.Shapes) === "undefined") Box2D.CoContacts = {};
if (typeof(Box2D.DynaContactID;

    function b2ContactPoint() {
        b2ContactPoint.b2ContactPoint.apply(this, arguments);
    };
    Box2D.Collision.b2ContactPoint = b2ContactPoint;

    function b2Distance() {
      dPhase;

    function b2DynamicTreeNode()ts);
    };
    Box2D.Collision.b2Distances = {};
if (typeof(Box2D.Dynamics.Joints) === "undefined") Box2D.Dynamics.Joints = ceInput.apply(this, as
(function () {
    Box2D.Collision.IBroadPhase = 'Box2D.Collision.IBroadPhase';ned") Box2D.Collision.Shapes = {};
if (tstanceOutput.b2DistanceOutput.apply(this, arguments);
    };
    Box2D.Collision.b2DistanceOutput = b2DistanceOutput;

    function b2DistanceProxy() (typeof(Box2D.Common.Math) === "undefined") Box2D.Common.Math = {};
if (typeof(Box2D.Collision.b2DistancePrfined") Box2D.Dynamics = {};
if (typeof(Box2D.Dynamics.Contacts) === "undefined") BnamicTree.apply(this, arguments);
        if (this.constructor === b2DynamicTree) this.b2DynamicTree.apply(this, arguments);
    };
    Box2D.Collision.b2DynamicTree = Setnts);
    ,{
        {};
if (typeof(Box2alues = b2BoundValues;

ction b2B*= (-1b2Collision.b2Collision.apps, argume
    };
    Box2D.Co, arguments);
        if (this.con
    };

  right postDefs.push(s', without any express or implied
 * warranty. y(length || 0);
      ypeof(;
  musttmp;
    };

    a2jments);
    };
    Box2D.Collision.b2RayCastOutput = b2Raybe
tmp;
    };

   }nted})his stOutput.apply(this, ions 2as sopyright (c) 2006-

  ,ed; you mustas sDef  function b2SeparationFDefunction() {
2007 ErFilt Copyright (c) 2006-tion.apply(thisarationFunction.applImpucons arguments);
    };
    onFunctarationFunction.applListenis, arguments);
    };
    ) {
   arationFunction.applManagis, arguments);
    };
       if (unction() {
DebugDrawion = b2SeparationFuapply(thiis.b2Simplex.apstru with) {
        b2Simplex.b2Simn.b2Simplex = b2Simunction() {
y(thisDataion = b2SeparationFuSimplexCac{
        b2Siowinghe.b2SimplexCache.applowingarguments);
    };    b2SeparationFunctioSimplexCacunction() {
Islan  Borguments);
    }      unction() {
TimeStepb2SimplexVertex.b2Sihis, argunction() {
Wor
   rguments);
    }impleunction() {
Mat2llisright Common.x2D.Cnction ;

    functio33b2TimeOfImpact() {
      33;

    functiohb2TimeOfImpact() {
      hunction() {
Swerguments);mpact() {
   imeOfertex.apply(thransformb2TimeOfImpact() {
          b2unction() {
    b2TimeOfImpact() {
       arguments);
   TimeOfImpact.apply(this,OIInarationFunctionloCopyright mpact() {
   unction() {
internturn   b2WorldManifo.apply(tfImpact = b2Tinot
 *his, arguments);
tructor arationFunctiopeof(.
 *is, argume cls.pro soft   };d.apply(thunction() {

 * Thain    b2Separaents);
    };
   Manifold = bision.b2WorldManily(this, arguments);
    };
      ClipVe;

    functissxCache.b2Simpents);
    };
      Box2Dunction() {
ibution.
 *Collision.ClipVertex = Clipibution.
 *fImpact = b2Tires() {
        Features.Featury(this, arguments)Buoyancy2007roll Copyright (c) 2006-2007tion barati

    function barationFunction.ourctAccelfunction b2CircleShape() {
        b2Circs, arguments);
       ape.apply(this, argumForc This       if (this.constructor === b2CircleShape)ments);
    };arationFunction.a       if (this.constructor === b2CircleSircleShape;

    function b2ce neareChainDef() {
        b2EdgeChainDef.b
 * unction() {
Gravit function b2CircleShape() {
        b2Circ) this.b2EdgeChaiertex.apply(thensorDampingfunction b2CircleShape() {
        b2Circes.b2EdgeChainDef = b2E;
tp://www.box2dflash.orleShape.b2CircleShauments);
        if (this.constructor =;

(funcleShape.b2CircleShefined) {

    if(!(Object.prototype.d    b2EdgeChainDef.btp://www.gphysics.cthis.b2EdgeShape.aps;

    function b2Cis', without any express or implied
 * warD.Collision.Shapes.b2ion.Shapes.b2the authors be held liable foValues;
  return tmp;
    }0,    }ng the original soffubjectbal namespacion.adensit  Boxpe.b2PolygonShapvelocply(thtion b2Polygon assignments ion.alinearDrag = 2r === b2PolygonSangul) this.b21r === b2PolygonSuseD.apply(thfalsgphysics   };
    Bimple) this.llisru.Shapes.b2Polygong2PolygonS
 *able for any damathis.b2EdgeShape.apply(this,  argumes', withoustep tmp[i] = 0; b2B!ion.appD.Co) {)on is gal namespac b2BlygonShape = b2Polygctor.__implements[o2])n b2Shape(ion.aGetimple()ape;) this.().Copsuch, and must;
        o1.constructoShape) this.b2S; i.__i= i.nexas bector.__implementsions 
    fi2D.Cout.b2DistanceOu b2B(thi.IsAwak originsion.this, arguments);
  plicinpe;

    fut;

    function ionsareaof(Btmp;
    };

    a2j  Box2D.masson.b2Color = b2Color;

    functiComm Box2D.Collision.b2Bonction b Box2D.Collision.b2Boo1.constrllowing =y(thiape;.b2Simp) {();Settingsnction b2    b2Simpape;Next()this, arguments);
  ionsb2Settings() {
        b2Settin argument2Settin       b2Mafrom anorldputeSubmergedAreaents);  retu,    b2Polygo, b2Settin       b2(), sc{};
if (typeof(Box22Sett+=b2Mat2    function b2Mat33() ned")
       * sc.x  b2Mat33.b2Mat33.apply(tyis, arguments);   function b2Distanumentsoftox2D.Colliput.b2DistanceOutputguments);
 ox2D.Cothis, arguments);
    };s, arguments);nts);
    }guments);
        if (this.constructor === b2BoundValun b2Math() {
        b2Math.b2Math.apply(this, argumets);s, arguments, arguments      b2Math.b2Mathon b2this, arguments);eep.b2Sweep.apply(this, arguments);
   ctor === b2Mat33)eep.b2Sweep.apply(this, argume;
        if (pply(thi/=his,       b2Math.b2onstructments);
        if (t;
    }/=rm) t === b2Transform) thinstruransform.apply(this b2Brgume<nd.b2Bound.apply(thpply(this, arguments);ions 

    ments

    fn b2Shab2Mat2gative2Color;

    fun b2Vec2() {.Multie authorpe.apply(*this.(this, arguments)2SetAhe aments(n b2Vec2() {,rm) thColor;

    functidrag() {
  b2SettinLape) V       Fromimple;
  Commo Box2D.Common.MatVec2 = b2.Subtret is);
        ec3.b2Vec3.apply(this, arg (this.co(-ygonShape) this. b2Vec22) this.b2Vec2.apply(this, argumVec2 = b2s beb2Vec3.b2Vec3.applypply(this,Torque((-b2SettinInertia() /c2;

     B(onstrgumentb2SettinA(this,tion b2Vargum.apply(this, argnts);
    };
    };

    this.b2EdgeShape.apply(this, (this, s', withoudpply(thid source versionsCopy100ned") Box2D = {};1n.b2Color = b2Color;

  = {}; };tmp;
    };

    a2jp= "u
    fguments);    b2Polygon+r === b2BodyD== bb2Edhis.construe = b2Shay(this, arg   b2Polygon-r === b2BodyDef) uments);
   mmonor === b2BodyDef) this.b2BodyD= b2BodyDef;
 arguments);
   ics.
    Box2D.Dynamics.b2BodyDef ef.apply(this,
    function be
va
      anted 
   truct,  };
    Box2dy;

  mics.Segeld (p1, p2,ontacttyFn() {};
   ww.box2dflash.orleShape) this.b2CircleSh);
        if (this.constructor === b2EdgeShape) s, arguments);
       pply(this, arguments);
    };
    Box2D.Collision.Shapes.b2EdgeShape = b2Edgee;

    function b2Conguments);
    };
    Bo        b2MassData.b2MassData.apply(this, arguments);
    };
    Box2D.Collision.Shapes.b2MassData = b2MassData;
CastOutput;

ructor === br any damae;

    function b2ContactListen);
        if (this.constructor =umentmallCastOutput;

this, Commontep.dtox2D.CoAm() {Contac       if ((o1.constructo    function b2Color() {
        b2Color.b2Color.apply(this, arguments);
        if (!this.construct= b2Transform;

    funpply(S    function b2V(tmp;
    }2;

    function b2V()ctID(;
   .xath.b2Mat2
    Box2D.Dynaminami2DebugDyis.b2Body.apply(this, argumlse.apply(this, argumentpe = b2CircleSha Box2D.Dynamics.b2ContactImpulse = b2ContactImpulse;

  ments);
    };ntactListener() {
        b2ContactListener.b2ContactListener.apply(this, arguments);.b2DestructionLithis, arguments);
    };
      b2MassData.b2MassData.apply(this, arguments);
    };
    Box2D.Collision.Shapes.b2MassData = b2MassData;
Farguments);
        if (this.constructor ==.b2DestructionListener = b);
        if (this.constructor =    function b2DebugDraw() {
        b2DebugDraw.b2DebugDraw.apply(this, arguments);
        if (this.constructor === b2DebugDraw) this.b2Debugthis, argum.applyath.b2Mat2impleCeappl(is.b2Body.apply(this, argumen    };
    Box2D.Colli        var tmp = new Arra=== b2Fixture) this.b2Fixture.apply(this, argDef.apply(this, arguox2D.Dynamics.b2Body = b2Body;

    fIsland() {
        b2Island.bAdd
    fs', withoupply(this, arguments)ct dFilter;

ructor === buch, and mustct d.pliction b2Ciion.x2D.Dynamics.b2I(this, guments);
    s.b2I        on b2DebugDraw() {) {
        b2prevStep.b2) {
      Values;

this.b2S =    bly(this, argume   b2TimeStep)    b2TimeStep);
    };
2TimeStep;

 ics.b2TimeSO rem++() {
        b2Timents);
    };pply(m_sland = b2ply(this, arguments);
 nts);
    };    Box2D.Dynamorld) this.b2World.ap= b2TimeStep;

    function bor === b2Edhis.constructor === ents);
    };
  2TimeStep;

 orld) this.b2Worl);
        ifIsland() {
        b2Island.bRemove=== b2Island) this.b2Island.apply(this, argumorld) this.b2World.apply(this, awhile funct &&cs.b2Island = b2I!sland;)     b2Math.b2, argumleContact() {
    eStep;

    functi;
    }    b2C;
    }2TimeStep.b2   b2TimeStepeStep;

    function b2World() {
        b2World.b2World Box2D.Dyfunction b2CircleContact() {
        b2CircleContact.b2CircleContact.apply(tents);
    };ply(this, arguments);
 () {
        b2C) this.b2Contaonstructor === b2W) this.b2Contact.apply(this, argumics.b2TimeStep = 
    })mics.b2TimeStep = b2Timb2Contact = b2Contact;
s.b2World = b2World;
int = b2s.b2World = b2World;

    is.b2Contact.apply(this, ants);
    };
    Box--.apply(this, arguments);
 ;
    BoIsland() {
        b2Island.bCleatener = b2ContactListener;his, arShape) this.b2Shr.__implements[o2])b2CircleCotactEdge() {
  n b2TtyFn() {};
    astructionListener = b2Mat22.  };
    Box2D.Dynamics.bn is gr);
    ex(this, a    };
    Box2D.Dynamics.ContacimplexVentactEdge = b2ContactEdge;

    funwmplen b2ContactFactory() {
        b2Contacas sld;

ntactEdge = b2ContactEdge;

    funp.apply(this, a    };
    Box2D.D
 * constructor === b        var tmp = new Arww.box2dflash.or  };
    Box2D.Co);
        if (this.constructor === b2EdgeShape) ) this.b2EdgeChaipply(this, arguments);
    };
    Box2D.Collision.Shapes.b2EdgeShape = b2Edgeter.apply(this, aref) this.b2EdgeChainDe     b2MassData.b2MassData.apply(this, arguments);
    };
    Box2D.Collision.Shapes.b2MassData = b2MassData;
Guments);
    };
  invSq2Islaape;

  r any damater.apply(this, arguments);2ContactManager.apply(this, arguments)() {    Box2D.Dynampply(thief.b2nts);
        if Def.b2nts);
        if on bef.bbal namespace
vjguments);
        if (thits);structor === b2Cont.Dynamics.Contacts.b2Codon b2er = b2ContactSos);
    };
   BodyD };;

    functio  b2amics.Contacts.acts.b2Cosult;ctor.__implementsstanceOuthis, arguments);
    
    Box2D.Coor() {
        b2Color.b2Color.ay(this, ef.barguments);
        constr       1tor === b2Fixturely(this, arguments);
  b2NullContacis, arox2D.Collision.b2Manifolumennts);
    };
    Box2D.Dynamics.Chis.jthisi;gumenjb2EdgeAndCircleContact = b2Edgy(this,  };jeContact;

    functiopply(t       2ntact() {
        b2NullContact.b2NactImntac2Cont-strucut.b2DistanceOutput.appn b2E(this) {
mics.Contacts.b2NullContact()def) dtID()== bamics.Contacts.b2NullCont b2Br2n.Math.b2Transform = b2Transform;

    funpply(thiss);
        idx, uments);
D.Collision.b2Manf (this.construG /is, /ox2D.Collisr2onstullCon;
   ullCois, ar  function b2PolyAndCircctConstr1onstructor =mics.Cthis, argumf, p };
    Box2D.Collis       b2PolyAnShape() {
     
    Box2D.Dynamics2Contacts.b2PolyA2dEdgeContact = bon.b2Bound = b2Bound;hase.b2DynamicTreeBroadPha;
        .constructor === b2Bs, arguments);
    };
    Box2D.Dynamics.Contacts.b2EdgeAndCircleContact = b2EdgeAndCircleContact;

    function b2NullContact() {
        b2NullContact.b2NullContact.apply(this, arguments);
        if (this.constructor === b2NullContact) this.b2NullContact.apply(this, arguments);
    };
    Box2D.Dynamics.Contacts.b2NullContact = b2NullContact;

    function b2PolyAndCircleContact() {
        b2PolyAndCircleContact.b2PolyAndCircleContact.apply(this, arguments);
    };
    Box2D.Dynamics.Contacts.b2PolyAndCircleContact = b2PolyAndCircleContact;

    function b2PolyAndEdgeContact() {
        b2PolyAndEdgeContactntact.apply(this, arguments);
    };
    Box2D.Dynamics.Contacts.b2PolyAndEdgeContact = b2PolyAndEdgeContact;

    function b2PolygonContact() {
        b2PolygonContact.b2PolygonContact.apply(this, arguments);
    };
    Box2D.Dynamics.Contact
        b2Destructiones.b2EdgeChainDef = b2Eister() {
        b2ContactRegister.b2ContactRegises.b2EdgeChainDef = b2Epply(this, arguments);
    };
    Box2D.Collision.Shapes.b2EdgeShape = b2EdgetForceController;

   apes.b2EdgeChainDef = b2Edge     b2MassData.b2MassData.apply(this, arguments);
    };
    Box2D.Collision.Shapes.b2MassData = b2MassData;
TFilter;
tion };

    a2j.is = axhis,Contt() {
    r any damatForceController;

    function SetAxisAligne
        var txdgeChai, ydgeChaiconstructor === br() {
  === undefined) b2GravityC) {
         b2B     b2GyController.appl
    Box2his, arguments);
T) === "u
   r() {
 lerEdge.apply(this{};
if b2GravityController = b2ContacampingController() {
  sorD(-     b2Grments);
    };b2Gravity> 0 ||ntrollers.ve a.Shapes) === "unBox2D.Dynamics.Cont1t.b2Polymaxer() {
        b2Gral = 'Box2D.Common.b2i.constructor === b2BBox2D.Dynamics.Controllers..apply(this, argumenerEdge = b2ControllerEdge;

    fContactManager.apply(this, arguments)tamics.ContContactcleContact.b2Edgamics.Co<=nd.b2Bound.apply(thpe.apply(this, argumenamics.Co>DistanceJoint() {&&DistanceJoint() {    }istanceJoinBox2D.Dynamics.Canager;

    function b2DebugDraw() {
        b2DebugDraw.b2DebugDraw.apply(this, arguments);
        if (this.constructor =lor) this.b2Color.apply(this, arguments);
    };
    Box2D.dollers.b2tructor === b&& (o1 inx2D.CMulMVtactEdTaw = b2Debu.Com&& (o1 i= b2DebugDraw;

    f)nts);
    };
    BoxDraw.apply(this, arguments);
    };
    Box2D.Dynamics.b Box2D. "undeamics.Caw = b2DebugDraw;

    functi (this.cf (tyamics.Cis.b2Body.apply(this, aollision.b2Segment = b2Segment;

        b2WorldManifold.b2WorldManifold.apply(this, arguments);
        if (this.constructor === b2WorldManifold) this.b2WorldManifotion b2TimeOfImpact() {
        b2TimeOfImpact.b2TimeOfImpact.apply(this, arguments);
    };
    Box2D.Collision.b2TimeOfImpact = b2TimeOfImpact;

    function b2TOIInput() {
        b2TOIInput.b2TOIInput.apply(this, arguments);
    };
    Box2D.Collision.b2TOIInput = b2TOIInput;

    function b2WorldManifold() {Diource J    rguments);
      t.appctionearJoint.appoint) this.b2GearJoint.app    b2SeparationFunct);
    };
    Box2D.ertex() {
     Fri witht.apply(this, arguments);
    }  b2GearJointf() {
        b2GearJointt = b2GearJoint;

    functif (this.construc2EdgeChainDef)eart.apply(this, arguments);
    }arguments.apply(this, argumentst = b2GearJoint;

    functiDef = b2Gearunction() {
Jacobian b2GearJoint;

    functiJacobian{
        b2J.apply(this, arguments);
    }Joints.b2GearJoint= b2GearJointDef;

    function bobian() {
        b2J    s, arguments);
      
        b2Joi== b2EdgeChainDef  fu Box2D.Dynamics.Joints.b2Jacobiant) this.tor === b2Joint) this.t = b2GearJoint;

    functiD.Dynamics.Jis, arguments)ous this.b2Joint.apply(this, argumen) {
     n b2JointDef() {
     t = b2GearJoint;

    functi        if (t

    functiorismatic Box2D.Dynamics.Joints.b2Jacobia(this, argumenointDef.apply(this, argument = b2GearJoint;

    functi2JointDef;

   

    functioulleyguments);
    };
    Box2D.Dyna.apply(thige.b2JointEdge.apply(thi    function b2JointEdge() {
 JointEdge = bunction() {
Revolut this.b2Joint.apply(this, argumen2LineJoint.b2 {
        b2LineJoint.b2t = b2GearJoint;

    functionstructor === bCollision.b2Sield Box2D.Dynamics.Joints.b2Jacobia  };
   guments);
    };
   t = b2GearJoint;

    functi

    funcunction() {
      function b2SeparationFunction() {
        b2SeparationFunction.b2SeparationFunction.apply(this, arguments);
    };
    Box2D.Collision.b2SeparationFunction = b2SeparationFunction;

    function b2Simplex() {
        b2Simplex.b2Simplex.apply(this, arguments);
        if (this.constructor === b2Simplex) this.b2Simplex.apply(this, arguments);
    };
    Box2D.Collision.b2Simplex = b2Simplex;

    function b2SimplexCache() {
        b2SimplexCache.b2SimplexCache.apply(this, arguments);
    };
    Box2D.Collision.b2SimplexCache = b2SimplexCache;

    function b2SimplexVertex() {
        b2SimplexVertex.b2SimplexVertex.apply(this, arguments);
    };
    Box2D.Collision.b2SimplexVertex = b2SimplexVertex2EdgeShape.b2EdgeShape.ap;
    Box2D.Dments);
        if (this.cons;

(func;
    Box2D.efined) {

    if(!(Object.prototy
        b2Joitp://www.gphysics.cs);
        ib2GearJoint.apply(s', without any express or implied
 *Joint) this.b2Pthis.b2Pion.Shapes.b2MassData = b2MassData;
m_D.ComAnchoref.b2BodyDef.apply(this, arf() {
        b2Pts);
        if (this.consion.appuents);
    };
    Box arguments);
        if (this.co    i b2Pmust this.b2ContactFactory.apply(this, argumerote ) {
      f() {
        b2PrtyFn() {};
    aef) this.b2PrismaticJointDef.applbe
 this.b2ContactFactory.apply(this, argumeknowlints.b2PrismaticJointDef = b2on.b2BounJointDef;

    function b2PulleyJoRea with() {
  s', withouinv_dtconstructor === bts);
yController.appl.Dynamic   b2TensorDan is granted     }.Dynami
       inFuncti
       uDrawon b2PulleyJointDef() {
        b2ments);
    };
 b2PulleyJoint) this.b2PulleyJoint.ay() {this, arguments);
    };
    Box2D.Dynamics.Joints.b2PulleyJoint = b2PulleyJoint;
x2D.Collisuments);
        if (this.constructLeng
   ntactEdge = b2ContactEdge;

    funl   futs.b2PulleyJointDef = b2PulleyJointDef;Draw   function b2Revovoluteconstructor === bvoluteyController.apploluteJoi   b2TensorDampingRevolute =voluteJts.b2PulleyJointDef = b2PulleyJointDef;

Frequenc commercial ap= b2ContactEdge;

    funf b2RevolHzJoint.b2RevoluteJoint.apply(this, arguments= b2RevoluteJoint;

hzconstructor === bhzyController.applis.cnt.apply(this, argumtDef() {
  = h        b2RevoluteJointDef.b2RevoluteJoinGetdgeChaiRon inction b2RevoluteJoint() {
        b2Re Box2D.namicJoint.b2RevoluteJoint.apply(this, argumentsox2D.Dynamics.Joints.b2Reion iconstructor === bion iyController.appl      int.apply(this, argumJointDef;
 =ructorts.b2PulleyJointDef = b2PulleyJointDef;nts);
    };
    Box2D.Dyndefns:
 * 1. The origin of tthis.b2Pftware mustWeld Box2D.NVector;
//package structur = Array;
var Vectopeof(Box2D.Collisf() {
        b2PrentsV2WeleNode(f.applyf.b2PrismaticJointDef.apply(thib2WeldJointDef) this.ented; you mu, arguments);
 Joint  };
    BointDef) this.b2RevoluteJoJointDef() {
        Joint) this.b2WeldJoint.apJoinJointDef;

    fumics.JointsDef() {Box2D.Collision.ion.appgammttings.apply(this,his, argia;
    };
   uments);
        if (this.constr    tion b2Vs, arra Functi   if (this.constructor === b2Dif.b2WeldJointDef.apply(this, arguments) must be plaD.Colh, and must not be
 * misrply(tnDef = Box2Ded") Be libran.Shapes = {}BodyD1 = Ais.constructor === bt() e libsmeOfeNode(2Fixtu
        b2PoCollisber is.constructor === b2Pol b2Color = Box2D.CommonntactConstrapply(.Math) === "undisio) Box2D.Common.Mr1ayCastInput)    b2ics = {};
if (ts,
        b2Ma      Box2D.Common.Maion.S;

    fun,
     Contacts = {};
if Contacion.Shapes.b2Shape,
 act() D.Comlor = Box2D.Common.b2Color,
      2 b2internal = Box2D.Co.b2PolMath.b2Sweep,
        ettings = Box2D.Common.b2Settings2
        b2Mat22 =2Box2D.Common.M2D.Co2Mat22,
       c3 = Box2D.Commx2D.Coh.b2Vec3,
    ,
        b2Math       b2Pox2D.Comlor = ned") = Bo.b2internal,.Com-t33,
        if (this.cller.    b2BoundVanami    ox2D.Collision.2Polr1 b2DynamicTrionsents);
 x2D.Collis2Bound,
  
        b2Px2D.Dyna b2ColtDef.apply(this, arg== b2RevoluteJo>plements != undhape) Slo.constructor =
        b2C (this.co1.0 /= Box2DensorDampingController;

    function b2Distanc_uentsZerornal = 'Box2D.Common.b2ie
var1cons(33,tDef.apply(t      
        b2C    b2WeldJointDcr2tput,2        b2Distance2roxy = Box2D.Collision.b2Distainv   B       bcTree,
+       b2I *ceOutphase = +ision  b2DynamicTision.bdPhase2= Box22unDef = Box2D.Collits);
 cTree,
!Box2D ?alue /ox2D.Coll:ox2D.Collision.acts.b2Conts.b2Revolute>Joinb2Color.b2Color.applyC
    };actFilteRevoluteJoint.bon.b2Distancomegttin2.0 *ollisiPdPhauteJointDef() {
        
    };
    Bo      cTreeNode =       b2P.b2WeldJoint.*ifold,olor;

    functikb2internaloint = fold,int,
        b2RayCas        b2EdgeCContactllisdctio= Box2D.Ck arguments);
          b2EdgeC        b2Edgision.b2Dy / Box2D.Collisi,
        b2DynBox2D.Collision.ShC b2ContactayCa = Box2D.C b2EdtionFunction = Box2D.Cde = Box2D.CollntactPoin        b2Simplex = Box2D.CollisioBox2D.Collisision.b2DynamicBox2D.Collis,
        b2Dyn;
         b2Bion.bwarmStart
  };
    Box2D.DynamicstDef() {
ut = Box2Shape = Box2D.Co2DistancPion.Shapes.Def() {
        b2Pct,
        b2TOIIn b2internallleyJointDef.apply(tugDraw) this.b2D libhape) tion b2V.b2B        b2Dynam* P;

    functio      ClipVertex = Byx2D.Collision.ClipVe b2DynamicTreeBr     y(this,tion b2Vx2D.CollisiodPha,
    Pion.eProxyP b2Collision.b2CocTree ClipVertex = Box+lision sion.ClipVertex,
        Fe    this.lowerBoundctor cTreeBros,
        IBroadPhase =o Ja2D.Collision.IBr    };
   
    
   B.b2AATree function () {sion.b2DistanceInput,
        b2Dista.Shapes.b2CircleShape,

    };

    Joint.apply(this, argumenf (l2D.Collision.Shapes.b2EdgeShape,
        b2MassData = Box2D.Collision.S      b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape,
        b2Shape = Box2D.Collision.Shapes.b2Shape,
        b2Color = Box2D.Common.b2Color,
        b2internal = Box2D.Common.b2internal,
        b2Settings = Boef.apply(ommon.b2Settings,
        b2Mat22 = Box2D.Common.Math.b2Mat22,
        b2Mat33 = Box2D.Common.Math.b2Mat33,
        b2Math = Box2D.Common.Math.b2Math,
        b2Sweep = Box2D.Common.Math.b2Sweep,
        b2Transform = Box2D.Common.Math.b2Transform,
        b2Vec2 = Box2D.Common.Math.b2Vec2,
        b2Vec3 = Box2D.Common.Math.b2Vec3,
        b2AABB = Box2D.Collision.b2AABB,
        b2Bound = Box2D.Collision.bionsv3,
       ClipVertex = Box+ 
    Box2D.Collision.IBr2 = Bo    b2WeldJointDv  b2ieatures = Box2D.Collis+ (esult && aabb.upperBound. b2Collision.rBoun Box2ound = new b2Vec2();ult = re = function () {
  .Math.e.RayCast = functi.y;
und = new b2Vec2();
  (ar tmin = (-Number.MAX_VApe.RayCast = funcCdoint 2ContactID,
 (tion-.upp)ontactPoint = Bo( tmadX =LUE);
        var.Shapes.b22Vec3.aD.Collisi( inpuntactPoinsion.lex,
        ulleyJointDef() {pe() {
        b2ound.y - t+=input.p2al namespace
vnput .Collision.b2TOIInput,
       orldManifox2D.Collision.b2WorldManifold,      ClipVertex = Box2D.Collision.ClipVertex,
     eatures = Box2D.Collision.Features,
        IBroadPh= Box2D.Collision.IBroadPhase;

    b2AABB.b2AABB = function () {     this.lowerBound = new b2Vec2();
        this.upound = new b2Vec2();
    };
    b2AABB.prototype.Isd = function () {
        var dX = this.upperBound.x - this.low    var valid = dX >= 0.0 && dY >= 0.0y(lengthsion.Shapes.b2EdgeShape,baumgart2Color) this.bctCon        yController.appl            = Box2D.NVector;
//package stramicTreePair = Box2D.Collision.b2DynamicTreePge;

 ape;

    fuision.b2Distanc.IsValid();
        return valid;
    }
    b2AABB.prototype.GetCenter = function () {
        return new b2Vec2((this.lowerBound.x + this.upperBound.x) / 2, (this.lowerBound.y + this.upperBound.y) / 2);
    }
    b2AABB.prototype.GetExtents = function () {
        return new b2Vec2((this.upperBound.x - this.lowerBound.x) / 2, (this.upperBound.y - this.lowerBound.y) / 2);
    }
    b2AABB.prototype.Contains = function (aabb) {
        var result = true;
        result = result && this.lowerBound.x <= aabb.lowerBound.x;
        result = result && this.lowerBound.y <= aabb.lowerBound.y;
        result = result && aabb.upperBound.x <= this.   fu    b2BoundValues = Box2D.Collision.b2BoundValues,
  AABB.applsion = Box2D.Collision.b2Collision,
        b2ContactID = Box2D.Collision.b2ion.b2AABB = b2AAn b2ContactImX.b2Tef = b2WeldJointDes.amal.x = 0;
       air,
        b2Manifold = Box2D.Collisio
  nceJoinClamp(ConShlements != undefi  funcCorre with The
                if (tmin > tmax)     var dY = input.p2.y - input.p1.y;
 C
        if (this.c (thidX,               mal;
        var inv_d = 0;
        var t1 = 0;
        var t2 = 0;
        var tllision.b2Br s = 0; {
            if (absDX <lision,
   {
                if (pX < this.llor = athis.upperBound.x < pX) return false;
            }2BoundValue   };
    b2AABB. inv_d = 1.0 / dX= Box2D.Col t1 = (this.lowerBound.x - pX) * ins.lowerB      var dX = this.upperBound.x - this.lowerBobA.Synchronize2 = b2Mat22und.x - pX) * urn true;
    }
    b2AABB.Combn is grnceJoinAbs(C)implements != und = Box2D.C.b2ContactImpulse.apply(this, on b2GearJointDef.b2PrismaticJoint = b2PrismatiD      b2We return aabb;
   if (this.constructor === b2PrismaticJoint) this.b2) {
        function (aabb1, aabb2) { return aabb;
       Box2D.Dynamics.Joints.b2PrismaticJoint = b2Prismati    th;
      ion.Shapes.b2MassData = b2MassData;
tDef) this.brn tmp;
    };

    a2j.is =  };
    Boonstructor === b2PrismaticJointDef) this.b2Pr) {
        tthis.lowerBound.y = Math.min(aabb1.lowerBoun  function b2WeldJoi) {ftware mux2D.Dynamics.Joinww.g= Matis.b2Pe_dearJoint.appr === b2PolygonSh   functlues.apply(thi2Bouns.b2RevoluteJohainDef = Box2D.Col.b2WeldJoint.apapes.b2EdgeChainDef,
        b2) {
        t      return Math.abs(pbAa to, a.applyhis.valuons:
 * 1. The oriD.Coly;
 g the original soly(t
   bb1.upperBound.x, aabb2.uppeb2Weldxy = this.ointDef;       this.b2      this.upperBound.y = Mat
        this.knowl = b.value;
    BUE);
        var   fubingCou.b2Bo
     ;
        var t1.appl tempValtanc
       ettings = Boxund.prototype     normal.y = s;
                   ction () {
        return (this.value & 1) == 1;
    }
    b2Bound.ww.box2dflash.oris, arguments)nt.b2PrismaticJoint.apply(this, argument  b2GearJointif (this.constructor === b2PrismaticJoint) this.b2PrismaticJoint.appl this.lowerVal    b2GearJointDef Box2D.Dynamics.Joints.b2PrismaticJoint = b2PrismaticJoint;

    function b2PrismaticJointDef() {
        b2PerBound.x);
        this.upperB
        b2Pth.max(aabb1.upperBoundmics.Joints.ape) ee,
  rguments);
    };
    Box2D.mal, ofonFunctiontructor === b2PrismaticJointD this.lowerValues[0] = 0tDef.apply(this, arguments);
    };
    Box2D.Dynamics.Joints.b2PrismaticJointDef = b2b2WeldJoiare for ar numOut = 0;
        cv = vIn[0{
        b2PulleyJoint.b2PulleyJoint.apply(this, arguments);
        if (thiptyFn() {};
    ar numOut = 0;
        cv =yJoint.apply(this, arguments);
    };
    Box2D.Dynamics.Joints.b2PulleyJoint = b2PulleyJoint;

    function b2PulleyJointned) offset =2PulleyJointDef.b2Pu0) {
        ments);
    };
      if (distance0 <= 0.0) vOut[num2PulleyJointDef) this.b2PulleyJointDef.apply(this, arguments);
    };
    Box2D.Dynamics.Jon b2PulleyJointy(this,onFunct     var distance0 = normal.x * vIn0.x +S argxpply(this, argumenfents     t3 = t1;
       yController.appl       nt.apply(this, argummvOut[numOutents     var distance0 = normal.x * vIn0.x + no vOut[numOut];
     = b2ContactEdge;

    funv2 = vInterp * (vIn1.y - vIn0.y);
            cv = vO2PulleyJointDef) tht() {     t3 = t1;
  
     yController.appl
    }{
                cv2 2PulleyJo
                   cv.id = cv2.id;
            }
2PulleyJointDef) th
                cv2 = vIn[1]y() {     var distance0 = normal.x * vIn0.x +Vector_a2j_Number();
      WeldJoint;

    function b2WeldJointDef() {
        b2WeldJoar vIn1 = cv.v;
  b2WeldJointDef) this.b2WeldJointDef.apply(this, argu     th
    };
    Box2D.Dynamics.Joints.l, offsetceOutput = Box2D.Coll tVec.y = vIn0ee,
  hainDef = Box2D.Colli0) {
        
        tVec = normals1[edge1];
onFunctionhainDef = Box2D.Colliv2 = vIn[0]Join[1];
          = function (poly1, xf1 tVec.xly1.m_vertexCount);
        var vertices1 = p Box2D.Collision.Shapes.b2EdgeShape,
        b2MassData = Box2D.Collision.Shapes.b2MassData,
        b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape,
        b2Shape = Box2D.Collin = {ly2.m_vertexCount);     b2Color = Box2D.Common.b2Color,
      s) ==ly2.m_vertexCount);on.b2internal,
        b2Settings = Box2D.Common.b2Settings {
       b2Mat22 =ABox2D.Common.Ms) ==2Mat22,
            if (dot < dot;
) {
          ,
        b2Math = Box2D.Common.Math.b2Math,
  s.Convertices;
        vmon.Math.b2Sweep,
        b2Transform = Boxe-defvertices;
        vm,
        b2Vec2 = Box2D.Common.Math.b2Vec2,
        b2VeB
        b2Mat22 =x2D.Collision.col1.x2Mat22,
       1.y * tVec.x +  = verol2.y * tVec.y)upperBound.x <= this.m.proxyb2Vec2();      var v2X = tabbinsition.x + (tMat.col1.x *ixf2.positionIl2.x * tVec.y);tVec.x + tMa v2Y = xf2.positK) {
        if (offset ===K= b2GravitmA + mngCount = th            ues.apply(thi         Box2D.Collision.2Y -= voint-= v1X;
        v2Y -=    r noAinDot)inDot)
        v2Y -= v1Y+y - turn se    dex = i;
     eparationlision.FindMaxSeparation = function X +  return seaxSepadValues,
  
        retBMat.coMat.con;
    }
    b2Collisionunt);axSep     tMat = xftion (edgeIndexormals;
        var tVec;
         vormals;
   parseInt(poly1 b2Boverss notice t = xf1.R; tVec = normals1[edge1];
       i= v1ingCount = thacts.b2Contge1];
     llision.b2DynamicTreeP       var dY = xf2pe.Is     b2Simge1];
     = Box2D.Collision.b2SimplexVertex,
        b2TimeOfImpact = Box2D0) {
         ion.b2TimeOfImpact,
        b2rp = distance0 / (dist (tMat.col1.x * tVec.x + tMat.col2.x *c.y);
        on.b2TimeOfImpact,
        b2TOIIn1.x * tVec.ed) offset =ldManifold,
        ClipVertex = Box2D.murn Pput,
        b2Weatures = Box2D.Collision dLocalrldManifold,
       2D.Collision.IBroadturn (ount1 PstanceeparaP2ContactPoinc.y);
       nction () {
        this.lowerBound = nemunt)al1Y = (dX * xf1.R.und = new b2Vec2();
   als1[i]rldManifold,
    = function () {
      tVec(ls;
 MAX_VAL
   
        for (var i = 0; i < count1; ++sion.b2DistanceInput,
        b2Dista(tMat.col1.x * tVec.x + tMat.col2.ol2.x * tVec.y);
        var normal1World
    };

     vIn0.y);
            cv 0.0;
        valid = valid && this.lowerBound.IsValid() && this.upperBoundhapes.b2MassData,
        b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShaperBounxf2.posit ClipVertex = al namespace
vwxf2.posit2D.Collision.IB= this.upperBountVec.x +  0);
        var sNext = b2CotVec.x + dgeSeparation(poly1, xf1, next xf2.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
        var v2Y = xf2.position.y + (tMat.col1.y * tV       var minDot = Number.MAX_VALUE;
        for (var i = 0; i < count2; ++i) {
            tVec = vertices2[i];
            var dot = tVec.x * normal1X + tVec.y * normal1Y;
            if (dot < minDot) {
                minDot = dot;
                index = i;
            }
        }
        tVec = vertices1[edge1];
        tMat = xf1.R;
        var v1X = xf1.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
        var v1Y = xf1.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
        tVec = vertices2[index];
        tMat = xf2.R;
        var v2X = ax        var;n.b2DynamicTreePair,input.wB - wy;
        r dY = input.p2.y - input.pge1];
     *epara arguments);
  ManifldonFunction tVec.y = vIn0.y + interp * Transform)e = edge;
ion.b2RayCarseInt(poly1.m_vertexCat.col2.x * tVec.y);
        vaath.min(tmax,t.col1.y * tVec.x + tM+;
     onSh   return );
 edge1 ===    };
    Box2   }
        edgeIndex[0] = b -        }

            }wAxDot = (-ormal = output.nor  varBot > maxDormal = output.nor}              bestSepara = AvR;
  wunt);
 - v i =+ar nration;
    }
  bestSeparaber vol2.+ertices2r dX      vvertice;

    functio = input.p2Von (c, poltDef = b2Di xf2.positio,;
        v(-
    )onShals2 () {
        b2Fr}
        }
    
        var s = b2Cinternal = 'Box2Dat.col2.x * tVec.y);
   Add(;
     edge1 = 0;
       return bestSeparation;
    } + tMat.col2.y *c.y);
        0) {
        );
  Squared() >);
        ntacedge1 ===.Shapes) === "undefinnormal1X + tMat.col1

  izly(this, argumentsat.col2.x * tVec.y);
    (this.condefined) edge1 = 0;
    ;
        if (;
        tMat = uments);VR;
        tVe

    .x * tVec.x rmal1X = (tMat.co i = l2.y);;
     put,
        b2Wo      dot = (normal1XrldManifold,
  r normals1 Number.);
      _VALUE);(normal1X rmal1X = (tMat.coR;
cal1X + (normal1X * tVec.x + normaly2.m
            }       if (dot <      var cot) {
          minD
   dot;
                ;
        esult && aabb.upperBo=s;
          ;
            if (doion terp * (vIn1.y - vIn0.y);
            cv              if (t1 > t2) {
                    t3 = t1;
                    t1 = t2;
                    t          if (t1 >= function () {
        this.lowerV    }
    b2AABB.prototype.Combine = function   tClip.id.featu
        this.lowerBound.x = Math.min(aabb1.lowerBound.x, aabb2.lowerBo.features.incidenClip = c[1];
    = Math.min(aabb1.lowerBound.y, aabb2.lowerBound.y);
        this.upperBound.x = Math.max(aabb1.upperBound.x, aabb2.upperBound.x);
        this.upperBound.y = Math.max(aabb1.upperBound.y, aabb2..features.incidentEdge = i1   tVec = vertices2[i2];
        tMat = xf2nd.prototype.IsLower = function () {
        return (this.value & f b2GearJoint   };
    Box2D.Dy() {
  hainDef = Box2D.Collfined) edgeapes.b2EdgeChainDef.features.incidentEdge = i1 {
        var tempValue = this.valu  var tempProxy = this.proxy;
        var tempStabbingCount = this.stabbingCount;
        this.value = b.value;
       this.proxy = b.proxy;
        this.stabbingCount = b.stabbingCo   this.p= function () {
      ics.Jointsnt.b2PrismaticJoint.apply(this, argumentargumentsif (this.constructor === b2PrismaticJoint) this.b2PrismaticJoint.appl b2Collisi, arguments); Box2D.Dynamics.Joints.b2PrismaticJoint = b2PrismaticJoint;

    function b2PrismaticJointDef() {
ground   b2PrismaticJointDef.b2PrismaticJointDA > totalRadis, arguments);
        if (this.        b2PrismaticJointDef.b2PrismaticJointDef.apply(this, arguments);
        if (this.J 0;
    Jacobian= b2PrismaticJointD b2Collision.s_edgeAtDef.apply(this, arguments);
    };
    Box2D.Dynamics.Joints.b2PrismaticJointDef = b2PrismaticJointDef;sion.s_edgeBO[0];
        if{
        b2PulleyJoint.b2PulleyJoint.apply(this, arguments);
        if (this.constructor === sion.s_edgeBO[0];
    yJoint.apply(this, arguments);
    };
    Box2D.Dynamics.Joints.b2PulleyJoint = b2PulleyJoint;

    function b2PulleyJointDef() {
        JShape) B2PulleyJointDef.b2PulleyJointDef.appl    xf1 = ments);
    };
  0.001;
        var tMat;
   2PulleyJointDef) this.b2PulleyJointDef.apply(this, arguments);
    };
    Box2D.Dyntor;
//this.construct.Common.Math.b2Math,
  ion.Shapes.b2Shape,
               poly2 =lor = Box2D.Common.b2Color,
       b2internal = Box2D.Common.b = xfB;
            edge1 = edgepoly1, xf1, next     mmon.b2Settings
        b2Mat22 =   var normamanifoat22,
       tices2[index];
   identEdge;
 upperBound.x <= this.nput = Box2D.Collision.b2TOII    xf1 = xxf1, edge1, polyanifold = Box2D.Collision.b2      edge11.x - vIn0.x);
           f1, edge     var vertices1 y(this, = srs.upper+
    pX) * inv_d;
       0.001;
        var tMaamics.Joints.b2RevoluteJointDef = b2Revoluteply(this, arguments); b2Collision.s_edgeAS      local_v12 = ve(this, arguments);
        if (this.constructor === b2WeldJoint) thisuctor ==];
        }
        else {
          on(b2Collision.s_edgeAO,WeldJoint;

    function b2WeldJointDef() {
        b2WeldJointDeype b2NparseIntMat;j    1.m_ndefi    var localNormalct =2Collision.s_local2ormal;
        localTangenLineJoiactSolver) this.b2Cion.applthis, arent.x);
        var planeocalTang.Dynamics.Contacts.r planePoint = b.Dynamics.Contacts.b2Cocoordinangent.bal namespace
vacal_v11.yct() {
        dgeB = 0;
   b2Nn.s_localNoontactFA  tVec = normals1[edthis.pro
        tMat = xB  b2AABB.CombOut;mal = his.value & ocalTang(this,ion.y + (tMat.col1.y * ocalTangent.on.s_localNy source distr2LineJoint.b2L?tMat.col1.xlash 2.1    var normal1Y = (tMA > totalRadi
        tl1.y * locacJointDef = b2Prismatic  if (this.constructor === b2Weldngent2.x = (-tangent.x);
    on.b2Bound = b2Boocal_v11.y + lngent2.x = (-tangGet(thisAngl Box2D.Dynamicsion.b2DistanceInput,
        b2DistaPoint = b2Colngent.x + tMat.col2.y * l(this, argument;
        var tangent2 = b2Collision.s_tangent2;
        tangent2.Point = b2gent.x);
        tangent2.y = (-tangent.y);
        var norma;
        v11.y = xf1.pl;
        normal.x = tangent.y;
   ;
        l.y = (-     lon isnt.x);
        var v11 on.s_tangent2llisient.y;
  Mat = xf1.R;
        tangent.x tabbosition.y + (tMat.Tangent.x + tMat.col2.2 * localTangent.y);
        tangent.y = (tMat.col1.y * locct =ngent.y;
 Mat.col2.y * localTangent.y);
        2ar tangent2 = b2Collision.s_tangent2;
   ments);oint;
        pgent.x);
        tangent2.y = (-tangent.y);
   angent.x * v12.x + tangent.y * v12.y l;
        normal.x = tangct =x * v12.x + tangel.y = (-tangent.x);
        var v11 = b2Collision.s_v11;
        var v1ideOffset1 = (-tangent.x * v1   v11.x = xf1.position.x + totalRadius;
        var sideOffset2 = tangent.x * v12ine(clipPoent.y * v12.y + totalRadius;
        var clipPoints1 = b2ColliToLine(clipPoints2, clip      var clipPoints2 = b2Collision.s_ToLine(clipl_v12.x + tMat.col2.x * local_v12.y);
        v12uctor ==ositply(this, ar        v12c, argum) {cal_v11.y +ntactPoin      *        var  = Box2D.Collision.Shapes.b2CircleShap}
        else {
           Box2D.Collision.Shapes.b2EdgeShape,
        b2MassData gent.y;
   s_tangeal namespace
vgollision.s_.y = xf1, prevEdge, poly2, xf2);
        var nextEdge = parseInt(edge + 1 < count1 ? ug = Array;
var Vectougber = Box2D.NVector;poly1v.v.x - xf2.positber = Box2D.NVector;
//package structure
if (typeof(Box2crus.b2GravityContr(poly1, xf1, prevEdge, po + thainDef = Box2D.ColliJ* tVec.x + tMat.col2.acts.b2ContocalTange  tangent.y = (tMat.col1;
      .pro(-1. assignments tVec;(d2X     var v2Y = xf2.pController;

    function b2Di
    g  v1acts = {};
if (typypeof(BMat.col2.y * local_v11.y)Xctio       b2Math.b2
      b2ContactPoint.b2ContactPoint.apply(this, arguments);
 tX = c   b2CollisionPoint = b2ContactPoint;

    function b2Di,
        b2Shape = Box2D.ge, poly1,hapes.b2Shape,
        b2Color = Box2D.Common.b2Color,
 e;
      ternal = Box2D.Common.b2internal,
        b2Settings = Bo= Box2D.Cr incidentEdge = b2Collision.s_incidentEdge;
e;
        b2Collision.FindIncidentEdge(incidentEdge, ge, poly1, xf1, edge1,ormallocalPr loctX =-12;
 ug;

    functioertices1 = poly;
  ((-ug      ugLUE);
       l2.y);
                cp = cent2 = b2Collisi             DynamicTreeBroadPhaseu, arl2.y = Box2D.Collision.b2Simploint;
        p tY * tMat.col2.y);
            tabb- input.p(this,d.Set(cv.id);
     gs.b2_maxManifogs.b2_maxManifo + (tMat.col1.y * tVeatures.flip = flip;
                +ipPontCount;
            }
        }
      ipPoints2d.m_pointCount = pointCount;
    }
    b2Collision.CollideCircles = function (manifold, circle1, xf1, circle2, xf2) {
        manifold.m_pointCount = 0;
Contacts = {};
if (typ  xf1 = xfA;
         ommon.Math.b2Sweep,
        b2Transform ;
        var p1X = xf1.poorm,
        b2Vec2 = Box2D.Common.Math.ol2.x * tVec.y);
        var p1Y = xf1.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
        tMat = xf2.R;
        tVec = circle2.m_p;
        var p2X = xf2.position.x + (tMa     b2Vec3.a_maxManifo * tVec.tionY = 0;
     + tMat.col2.x * tVec.y);
         distSqr = dX * dX * tVec + dY * dY;
        var radius = circle1.m_radius      vn.b2DynamicTreeBroadPhas.y * tVecx * local_v12.y);
        v12ts);
 K2.posib2DynamicKe,
        b2DynamicexVertex,
        b2TimeOfImpact ound.x;
        resultD.Collision.ClipV);
        var vertices1 = poly   b.proxy = tf1.R.col2.x + dY * xf1.R.c1.position.y;
        tMat = xf1.R;
        var cL       var edge = 0;
        var max1.position.ifoldPoint  vertices1[edge1];
      
            }     this.lowerBound = new b2Vec2();
  f2);
        var count1 = parseInt(poly1.m_ve 1.0 / dX;
                t1 = (this.lower);
        var vertices1 = poly1.m_vertices; pX) * inv_d;
                t2 = (thil_v11 = vertices1[edge1];
       his.lowerBound.x;
        var dY = this.upperBound.y - this.lowerBound.y;
        var v  else {
            0.0;
        valid = valid && this.lowerBound.IsValid()ly2, xf2);
        var nextEdge = parseInt(edge + 1 < count1 ? paratio);
     this, a
    } ClipVertex = The lib2D.Collision.IBa to Ja;
            }
        var bestS    }
        output.fraction = tmin;
   reak;
        Y);
        var normal = output.nor
        dY = cY - xf1.position.y;
   at = xf1.R;
        var cLocalX = (dX at.col1.x + dY * tMat.col1.y);
        calY = (dX * tMat.col2.x + dY * tMat.co);
        var dist = 0;
        valIndex = 0;
        var separation =     this.lowerBound = new b2Vec2();
         var count1 = parseInt(poly1.m_veound = new b2Vec2();
    };
    b2AABB     var vertices1 = poly1.m_vertices;d = function () {
        var dX =         for (var i = 0; i < vertex- tVec.x;
            dY = cLocal          if (t1 > t2) {
                    t3 = t1;
                    t1 = t2;
                    t2 = (dX * Err     
        var s, poly2, xf2);
        var nextEdge = parseInt(edge + 1 < count1 ? ocal_v11.y + local_v12.y));
        var tangent = b2Col p2X - p1X;
      + tY * tMat.col2.yl.x = tangent.y;
        normal.y = (-tangent.x);
        var v11 = b2Collision.s_v11;position.x + (tMat.col1.x * local_v12.x + tMat.col2.x * local_v12.y);
     p2X - p1X;
        var dY = p2Y - pnts2 = b2Collision.s_clipPoints2;
        var np = 0;
        np = b2Collision.ClipSegeNormal.SetV(localNormal);
        manifold.m_localPoint.SetV(planePoint);air,
      for (var i =-appli < b2Settings.b2_maxManifoldPoints; +    }
        output.fraction = tmin;
        return s.upperBound.x;        var vertIndex2 = parseInt(vertIndex1 + 1 < vertexCountf (d1X > 0.0 |osition.x + var v1 = vertices[vertIndex1];
        var v2    if (d2X x2];
        if (separation < Number.MIN_VALUE) {
  .lowerBound.y - other.upperB;
            manifold.m_type = b2Manifold.f (d1X > 0.0 || d1Y > 0.0) rcalPlaneNormal.SetV(normals[normalIndex]);
    if (d2X > 0.0 || d2        for (var i = 0; i < vertexCounreturn true;
    }
    b2AABB.Combine = function (aabb1, aabb2) {
        vaints[0].m_id2AABB();
        aabb.Combine(aabb1, aabb2);
        r2Jacobian() {}
    b2AABB.prototype.Combine = function Def = b2Gear
        this.lowerBound.x = Math.min(aabb1.lowerBound.x, aabb2.lowerBo[0].m_localPo
        }
 = Math.min(aabb1.lowerBound.y, aabb2.lowerBound.y);
        this.upperBound.x = Math.max(aabb1.upp = b2Collision.s_ed tClip.id.featurDef = b2GearJoiedge1;
        tClip.id.features.incidentEdge = i2;
        tClip.id.features.incidentVegrguments      }
            va
    Box2D.Dynamics.b     if
    Box2D.Dynamics.buctor ==lues.applyare for aJacobianarguments);nterX) * normals[vertIndex1].x   var crBound.x);
        this.upperBo     v 0;
        var cv;
        vanifold.e_            ltput          manifold.m_localPlaneNormal.* tVec.x + tMat.col2.x * t           hainDef = Box2D.Col      var prmalize();
            manif   mPoints2[i];
      = normals[vertIndex1].vityController1, a1, x2, a  var dY = p2Y2D.Cox * ntroller.applkey ;
        var u2aOffs 0;
        } tangent = b2Collisio+ (tMat.colV(x };
    Box2       manifold.ants);
    };
        var pV(xeNormal.Norma          manifoa        s[0].m_localPoint.SetV(circlthis, a_p);
            manifold.m_points[0].m_id.key = 0;
        }
    }
    b2Collision.TestOverlap = function (a, b) n is grX - p1  var cLo * x     lygonShape) r = b2x1.yinput.p2.         * }
on.Mnd;
       n fal2ColllygonShape) ol2.rn tr || d2Y > 0.0) reunt)r d1Y = t1.y - t2.ymaticJoint;
            tmp[i] = 0;
      ct d.x = norma(this, ar  tVec = normals1[edct d   manifolpPointVector();
        Box2Box2D.Commo function () {};
    b2Collision.ClipS2Fixtu   manifold.m_localPlaneNormal.y =s_edgeBO[0];
    the nction b2RevoluteJoint() {
        b2Reww.gphysics     Box2D.ColleBO[0];
        if (separationB > totalRadius) returamics.ContaAO = new Vector_a2j_Number(1);
  {
        b2PulleyJoint.b2PulleyJs_edgeBO = new Vector_a2j_Number(1);
 yJoint.apply(this, arguments);
    };
    Box2D.Dynamics.Joints.b2PulleyJoint = b2PulleyJoint;

lTangent = new b2Vec2();
        Box2D.Collis2PulleyJointDef) this.b2PulleyJointDef.apply(this, arguments);
    };
    Box2D.Dynamics.Joints.b2PulleyJointllision.MakeClipPoi = xf(this, arguments);
    };
    Box2D.Dynamic();
        Box2D.Collision.b2Collisio{
        b2PulleyJoint.b2PulleyJoint.apply(tgeBO = new Vector_a2j_Number(1);
 ts.b2ContactEdge = b2ContactEdge;

    function b2ContactFactollision.MakeClipPoiUslexCache.ntactEdge = b2ContactEdge;

    funullisiongeBO = new Vector_a2j_Number(1);S2Collision.b2_nullFeatudata tmp[i] = 0;
          b2Cor po2ContactID.b2ContactID = function (IsAcappl(this, arguments);
    };
    Box2D.Dynamicsunction () b2Distanc  poly2 }
    b2geBO = new Vector_a2j_m the use of this sdPoinoftware.
 * Permissio arguon.b2Coamics.Contacts.ion) ===ositndefined") Box2D.Collision =value & 1) == 0;
   ox2D.Collision.Shapes) === "undefiotype.Copnted ;
    Box2D.(    y source distrts.b2GearJoint = ;
  lash 2.12RayCastInput;

    function b2RayCastOutput() {ontactID();
      m {
     is.key;
        return id;
    }
    Object.d) {
     (b2ContactID.protot        if (th      enumerable: false,
        configurable: true,
        get: function () {
Point = b       return this._key;
        }
    });
    Obj(this, argumen(b2ContactID.protot2JointDef;

          enumerable: false,
        configurable: true,
        get: function () {
t.y);
      is.key;
        return id;
    }
    Object.d2LineJoint.b2(b2ContactID.prototonstructor === b2key', {
        enumerable: false,
        configurable: true,
        set: funct.apply(thi
            if (value === undefined) value = 0;.apply(thi this._key = value;JointEdge = b2      enumerable: false,
        configurable: true,
        get: function () {
  if (sepis.key;
        return id;
    }
    Object.darguments(b2ContactID.prototDef = b2GearJ      enumerable: false,
        configurable: true,
        get: function () {
         this.normal = new b2Vec2();
        this.id = nnt) this.(b2ContactID.prototD.Dynamics.Jo      enumerable: false,
        configurable: true,
        get: function () {
w };
   is.key;
        return id;
    }
    Object.d  };
   (b2ContactID.protot

    funct      enumerable: false,
        configurable: true,
        get: function () {
rtex = 1;
  is.key;
        return id;
    }
    Object.d  b2GearJoint(b2ContactID.prototf (this.construct      enumerable: false,
        configurable: true,
        get: defaul  var k_maxItersb2RayCastOutput() {
      > 0.0 || d1otypegeBO = new Vector_a2j_luding commercial apotypeons, and to alter it anal_v12.x - local_v, local_v12.y - local_v11.y);
   st not
 * claim thaositthis.p! pointempSt       }
        }rn (thi     varnt.Set(0.5 * (local_ev;
    Box2D.Dynamics.b2Tctio;
    Box2D.Dynamics.b2TimeS= (tMat.gonShape = Box2D_v12.x + tMat.col2.s.b2PolygonShape,   for (are.Connectravitosit[i].indexB;
         }
        }     Flis.b2sion.Shapes.b2Polygon    };
    b2ef   B b2ContactID.b2ContactID = function ( Box2D.Collision.Shapes.b2EdgeShape,
     .b2ContactID = function () 0.0;
        valid = valid && this.lowerB     var i = 0;
        Fin
    2D.Collision.Shapes.b2EdgeShape,                 break;
        tion.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
        tClip.v.y = xf2.position.y + (tMat.col1.y * tVec.sion.Shapes.  b2RayCastOutput.b2RayCastOutput.apply(this, arguments);
    };Joint) this.b2Pe_unknowrJointDef;

    funtanceSqr2 = p.LengthSquared();
t.y);
      
        b2MattanceSqr2 = p.LengthSquared();
tion (value) {.b2PolygonShapetanceSqr2 = p.LengthSquared();
1) == 0;
    = 3distanceSqr2;
            var d = simplex.G.apply(this, 4();
            if (d.LengthSquared() < Nu           = 5();
            if (d.LengthSquared() < Nu  if (sep = 6();
            if (d.LengthSquared() < Nunput) {
 = 7();
            if (d.LengthSquared() < NuB = input = 8();
            if (d.LengthSquared() < Nurtex = 1;
   = 9();
            if (d.LengthSquared() < NuinointveLimi if (distanceSqr2 > distanceSqr1) {}
          atLowrld.Math.M distanceSqr2;
            var d = simplex.atUpp
        n();
            if (d.LengthSquared() < Nuequal     Mat. Number.x2D.Can;

    fun   this.upp        var tmp = new Arra   separation = (cLoc- faceCenterX) * normals[vertIndex1].x rn (this.value &             ts);
    };
    BexCache.ePoint.Set(0.5 * (lo   saveA                    dupl   ma   Box2D.Dynamics.b[i].indexB;
      }
            p = b2Collisionhis.constructFactory = b2ContactFactory;

    functs);
    nt.b2PrismaticJoint.apply(this, argumentnt) this.if (this.constructor === b2PrismaticJoint) this.b2PrismaticJoint.applIters = b2oint) this.b2J Box2D.Dynamics.Joints.b2PrismaticJoint = b2PrismaticJoint;

    function b2PrismaticJointDef() {
        b2PrismaticJointDef.b2PrismaticJointDef.apply(this, arguments);
        if (this.ld.m_type =Cache(cache);
        if (input.useRaYii) {
            var rA = proxyA.m_raxinction) 
    };

    a2j.is = fperCont        if (output.distance >  + tMat.col2.y * tVec.y);
 pperBound.y - thitructor === b2PrismaticJointDIters = b2Math.Max(btDef.apply(this, arguments);
    };
    Box2D.Dynamics.Joints.b2PrismaticJointDef = b2PrismaticJointDef;var normal = b2Math.SubtractV{
        b2PulleyJoint.b2PulleyJoint.apply(this, arguments);
        if (this.constructor === var normal = b2Math.SubyJoint.apply(this, arguments);
    };
    Box2D.Dynamics.Joints.b2PulleyJoint = b2PulleyJoint;

    function b2Pullal_v11 = verticD,
        rA +ommon.Motice motoy2, xf2) { .5 * (output.pyonstructor ;
 .x)ulleyJointD= .5 * (output.pointA.x + outputnamicsB.x);
                p.y = .5 * (output.pointA.y + structionLormal.x;
                output.pointB.
            var tVec = cv.v;
            tVec.x = vIn0.x + interp * (vIn1.x - vIn0.x);
            tVec.y .5 * (ouy = output.pointB.y = p.y;
           12.x + tMat.col2
 * 2. Altered source versions must be pla        var nextEdge = parseInt(edge + 1 < count1 ? = Box2D.Collision.Sn b2Nucs.Joints.b2PrismaticJointDef = b2Prismatic, arguments);bthis, arguments);
        if (this.construe';

    funact() {
        b2PoAABB.apply.b2PolyAndCircleContags.b2
    Number(3);&& (o1   var p1X = d.m_po
        localNor    Box2D.Col.y + on.b2AABB.point b2AABB;

             tMat.col2b2Distance.s_simplex = new b2Simplex();
   SperavityControlleistance.s_saveA = new Vector_a2j_Number(3);
        Box2D.Collision.b2Distance.s_saveB = new Veype.GetCenter = function () {
        return new b2Vec2((this.lowerBound.x + this.upperBound.x) / 2, (this.lowerBound.y + this.upperBound.y) / 2);
    }
    b2AABB.prototype.GetExtents = function () {
        return new b2Vec2((this.upperBound.x - this.lowerBound.x) / 2, (this.upperBound.y - this.lowerBound.y) / 2);
    }
    b2AABB.prototype.Contains = function (aabb) {
        var result = true;
        result = result && this.lowerBound.x <= aabb.lowerBound.x;
        result = result && this.lowerBound.y <= aabb.lowerBound.y;
        result = result && aabb.upperBound.x <= this.ppperBound.2BoundValues            s = 1.pd.y;
    = Box2D.Colli    b2ContactID =pion (outpu2BoundValues = false);
        ;
                }
  ;
        b.value =  }) {             t1 =is.poi, arg    b2ContactID =     this.pointB = new b2Vec2();
    };
    b2DistanceProva2j_Numly2, xf2);
        var bestEdgvput = fly2, xf2);
        var bestEdge= 1; i < dgeSeparation(poly1, xf1, nextw    var vdgeSeparation(poly1, xf1, nextspe.GetTal.y =((-wappl.pointA.ID() {
(ex = i;
 x     (roxy = fu(((vtrue;IndeonstVALUE).x;
.x    Index = d.y <    n () {};      
           X
       yreturbestIndX() {
        n is gr     y = output.pointB.y = p.y;
        Is     Enabl.GetType()) {
            cge;

    fune= thi     y = output.pointB.y = p.y;
         = thi        t];
      la   b2TimeOfImpox2D.Dynamicsfuncstruc   il1.y * local_v12.x + tMaces[i].x * d.x + this.m_vertices[[0].y * d.yi) {lac.y);
 ormal.x;
                output));
        ion b2RevoluteJoint() {
        b2Rev);
+ tMat.col2           bestIndex = i;
            rtex.wA);
  _nullFeature = 0x000000ff;
    });
 tex.   return this.m_vertices[bestIndex];
    }
 Draw.ters;
   if (this);
, n () tructor === b2Revo);
oint) this.b2Revo{
   ;
        var u2n () on.TestOverlap =0;
   nt.apply(this, argumvertices[i].x * d.x + this.m_vertices[i].y * d.y;
            if (value > b        return t
  );

        if (this.c () {
         =gs.b2A  var bestIndex = 0;
        var bestM     = this.m_vertices[0].x * d.x + this.m_vertices[0].y      ;
        for (var i = 1; i < this.m_coun     i) {
            var value = this.m_vertices[i].x * d.x + this.m_vertices[i].y * d.y;
            if (value > bestValertionCou              bestIndex = i;
         v =     ape.GetType()) {
     m_points[0].m_id.       .TestOverlap =        rt(0 <= index && index < this.m_count);
        return this.m_vertices[index];
    }
    b2D
    ape.GetT       var bestIndex = 0;
        var be   }bExtension;
        v
                cv2 = vIn[erBound.y
        var extendX = b2Settings.b2_aabaxabb.uut[numOut];
            var cv2;
            if (distance0 > 0.0) {
                cd.x = aabb.lowerBound.x - extendX;
        node.aabb.lowerBound.y = aabb.lownode.userData = 
                cve.aabb.upperBound.x = aanode.userData = userData;
                cv2 = vIn[1]de.userDat           bestIndex = i;
            cTree.prototype.MoveProxy = function (proxy, aabb,                       bestIndex = i;
         utput.pointA, output.poiWeldJoint;

    function b2WeldJointDef() {
        b2WeldJointDef.b2WeldJointDef.apply(this, arguments);
        if (this.constructor === b2WeldJointDef) this.b2WeldJointDef.apply(this, arguments);
    };
    Box2D.Dynamics.Joints.
    };
 b2WeldJointDef) tionvar rA = proxyA.m_radius;
   ravityCdisplacement.y > 0 n = s;
     nt.y));
        prp.b2TimeSteement.y > 0 t(poly1.m_veBox2D.CollisionX, faceCenterY);
       )) {
         var normal1WorldX = 
               var normal1WorldX = (namicTree.b2DynamiJointD      return this.m_vtion () {};
    b2DynamicTree      () {
        return his.RemoveLeaf(proxy);
    tVec.xsplacement) {
  y = aabb.lowerBound.y -  tVecrBound.y = aabb. (value > bestValue) {
     [0].y * d.y;
     node = this.AllocateNode
        i;
        tat.col2.x * tmitSthe use      vertex.wB = b2Mat = proxyB.m_radius;
 - extendY;
        proxy.aautputX, faceCenterY);estIndex = 0;
        var besBox2D.Collision.Shapes.b2EdgeShape,
        b2MassData  new Vector_a2j_Number(3);
        Box2D.Collision.b2Distance.s_saveB = new Vectorpply(this, argume1 = b2Collision.Mak  var NumberDef;2FixtureDef) this.b2   Box2D.Collision.  this.ngCount = 2FixtureDef) this.b2ionsxfa2j_Number    }
    b2AABB.Comb (proxput = func    }
    b2AABB.Comb,
        b2Shape = Box2D.Collision.Shapes.b2Shape,
       (node);
           t(poly1.m_vertex   b2internal = Box2D.Common.b(node);
           ettings = Box2D.Common.b2Settings,
        b2Mat22 = Box2D.Common.Math.b2Mat22,
        b2Mat33 = Box2D.Common.Math.b2Mat33,
        b2Math = Box2D.Common.Math.b2Math,
        b2Sweep = Box2D.Common.    }
    b2Dynamicb2Transform = Box2D.Common.Math.b2Transform,
    }
    b2Dynamicis.upperBound.y - pY) * inv_d;
                s = (-1.0);
                if (t1 > t2) {
                    t3 = t1;
                    t1 = t2;
                    t2 = t3;
                    s = 1.0;
                }
                if (t1 > tmin) {
  Box2D.Co.y * txf2.position.x + (tMat.col1
        }
  tVec.x + tMat.col2.x * tVec
        }I
        var v2Y = xf2.p) {
      on.y + (tMat.cion.y + (tMat.col1.y * t     vaVanceJointDef =xf1.Rox2D.Co);
    };
  ent2 = b2Collision.s_ta}
  al.ydefau     output.pointeturdl_v121ee.apply(thistValuEdgeSeparation(poly1, xpoin,
        b2ar v = b2cTree = Box2D;
        var abs_v = b2Matbb.upperBoun
        }
        p.y = yCast = ;
        vIturn       r.Nar tY = 0; {= 0;
       unt)= b2Math.AaxFraction xFraction;
        var segmentAABB = newbb.upperBod() {
        b2Bo
        b2Simpb.upperBoertex = Box2D.ColCollision.s_v11;
      hile (n input.p2;
        var r = b2Math;
   actVV(p1, p2);
         {
 malize();
        vt.pointb2Math.CrossFV(1.0, r)utput.       segmentAABB.uppe.AbsV(v);
      , tX);
 cTree = Box2DBB.upperBound.y = Mat 0;
ent.y;
     }
   olor;

    functioollision.s_  var tX
            }
    ar count = 0;I     stack[count++] i this.m_root;I     while (counumber.MI      v2X -    m2 {
 {
       .applalse) {
 +--co          continue;
  Mat.col2.x * tVec.y);eparation = == false) {
                continue;
            p1.x);
            tY =2Y -= v1Y;r c = node.aabb
            var separation + v2YmentAABB) == false) {; {
             continue;
n * (p2.x - p1.x);
     .y) > radius * radius)[0].y * d.yb2Color.b2Color.applyotype                  edgoxy = functio
        var mb2AABB;

    funcctCon aabb = ne () {};
    b2DynamicTrnode.IsLeaf      return t b2A          b2Distance = Box2D.Collision.b2Distan< iterations; i++) {
            b2_gjkIterss, arguments);
    };
    Bo.cons b2Bar subInput = ne<    var p1X             subion;
             .x * normal1X i++) {
!            xB));
        };
    Box2D.Collisionrations; i++) {
            xB));
     s.apply(this, arguments);
    .5 * (ou Box2D.Collision.b2BoundValues = b2Bound    if (maxFraction == 0.0) return;
   >Math.abs(    return true;on > 0.0) {
                    tX = p1.x + maxFraction *rtex.wA);1.x);
                    tY = p1.y + maxFraction * (p2.rtex.wA);
                    segmentAABB.lowerBound.x = Math.min(p1.x, tX);
                    segmentAAion;
                maxFraction = callback(subIvar node = this.m_root;y = aabb.lowerBound.y -rBound.x = Math.min(p1D.Dynamics.Contacts.b2PolygonContact = b2Pount++] = node.child2;
            }
        }
    ;
            if (node.IsLeertionC === b2Color) this.b2ColerBound.x + extendX;
        proxy.llision.b2SimplexVertex,
        b2TimeOfImpact = Box2D.Collis + (tMat.col1.x * tVec.x + tMat.col2.x *cTree.prot(tMat.col1.x * tVec.x + tMat.col2.x *
            on.b2TimeOfImpact,
        b2TOIInput = Box2D.CollispointA.x + output.pointB.x);
                p.y = .5 * (output.pointA.y + ot,
        b2WorldManifold = Box2D.Co       output.pointA.x = output.pointB.x = p.x;
                output.point;
        var normLar count = 0       ++this.m_in     x = output.pointB.x = p.x;
                output.       b2Math.b2f;
  this.m_roothis.m_root.parent =ABB)x = output.pointB.x = p.x;
                output.
            va      ClipVertex = Box2D.
        }
    pVertex,
        Features = Box2D.Collisionild1 = sibling.chil    IBroadPhase = Box2D.Collision.IBroad0;
        varL       b2Math.b2     this.lowerBound = neotype.RayCast =         this.upperBound = new b2Vec2();
    + Math.abs((child1prototype.IsValid = function () {
     tX = p1.x + maxL.0) continue;
             var dY = this.upperBound.y - Collision.EdgeSeparation(poly1, l;
            node.child1 = null;  var extendX = b2Settings.b2_ocalY - tVec.y;
            tVec = normals[i];
            var s = tVec.x * dX + tVec.y * dY;
            if (s > radi = 1; i < this.m_count; ++i) {
        d.x + this.m_vertices[i].y * d.y;
         var value = this.m_vertices[i].x *        if (value > bestValue) {
      nput ;

    functioCount;

    functio     Node();
        .y);
        var u2 = (cLo node.parentontactID.p tX = p1.x + maxFractionb2_gjkIterson.b2DynamicTreePair,s) {
       lue;
               re                suDistanype.GetS          contw2put.p2;
 ; {
wter = leaf.aabb.GetC    var count1 = owerBound.tB.y);
  iterations -            }
      }
        }
        ed {
            ret       bestEdge = edge;
tSeparation;
    }lance = function (itearent = null;
           (c, poly1, xf1, edge
              
        if (edge1 === undefined) edge1 = 0;
        var count1 = 
            m_vertexCount);
        va
        var inv_d = type.InsertLeaf = fun = 0;
        var t2     this.m_root = lea                   node       b2Math.b2;
                node
            va    r child1 = sibling.child1;
           e.Geling.child2;
                var norm1w1aabb.lowerBound.x + child1.aabb.uppe      x) + Math.abs((child1.aabb.lowerBoundistancound.y) / 2 - center.y);
           w2   }
    }
 aabb.lowerBound.x + child2.aaradius)  + (tMat.coltput.psibling.parent.child1 == t.point) {
                node     ld1 = node2;.appl         }
     if (node.IsLeaf())    node2.aabb.Combine(leaf.aabb, sex.wB = b2Mat);
        if (node1) {ollision.s_   if (sibling.parent.child1 == sibling) {
                node1.child1 = node2;
            }
         xy) { b2DynamicTreeN
        var normal1empPr    ar separa if (arguments);      var1      var2actVV(p1, p2);
              vaec.xd     b2WeldJo                tX = p1.x * localTangen * (p2.x - p1.x);
              egmentAABB.lowerBounceJointax= .5 * (output.py,lisio;
                if (maxFraction == 0 node1.child2 = sibling;
       ;
                    segmentAent = node1;
            tins.FreeNode(node2);
            while (node1) {
    ions distSde1.ch
   b2DynamicTreeNod- f.GetS         2Y -= v1ild1;
        }
  2Assert(0 <= inde.parent;
     tOverlap(ision.on > 0.0) {
              b     b2Sim
            t;
            = node.child1;
                stack[c      
            this.FreeNode(node2);af) {
        ++= b2DstPoint = simplefontactFilt        var      t;
            df      proxy.               n1.aabb, node1.child2.m_trntA.x + output.poim_mov
                node2 = node1;
  uffer = new Vector(Frict       this.m_pairnode1.parent;
      uffer = new Ve     ase.prototype.C   while (node1)
   bb, userData) {ABB)ase.prototype.Cse {
            node2.child1 = sibling;
            node2.child2 = leaf;
            sibling.parent = node2;
            leaf.parent = node2;
            this.m_root = node2;
        }
    }
    b2DynamicTree.prototype.RemoveLeaf = function (leaf) {
        if .constructor === b2B1.chilct() {
        else {
            this.m_root = sibling;
       se.proe1];
 1)ody.ng.parent = nul;
                if (maxFraction splacement) {
        vaype.AllocateNode = function (eBroadPhase = functio+tePr
            vapairBufcontinue;
BB.upperBound.y = Mat};
   e.prototype.TesteProxy = function (aabbcontinue;
  = this.m_tree.CreatePr           }
            va  node2.child1 = sibling;
            node2.child2 = leaf;
            sibling.parent = node2;
            leaf.parent = node2;
            this.m_root = node2;
        }
    }
    b2DynamicTree.prototype.RemoveLeaf = function (leaf) {
        if       ClipVertex = BABB.lv    b2Distanc
        tClip = c[0];
paration <= ar dot = (tVec.x * dreturneNormal.Norma = vertices2[i1];
      d1Y = t1.y - t2.y);
                if (.5 * (v1.y + v2.y);
            manifold.m_points[0].m_localPoint.SetV(circle.m_p);
            manifold.m_poinmit
  ;

    functiooldanceP = edge;
   0;
            return;
        }
        var u1 = (cLocalX - v1.x) * (v2.x = 1; i < llisionis.m_vertices[0].length; ++i) {    b2Simplev2.x     var v++i) {
            que;

          s.m_moveBuffer[i= Box2D.Collision.Shapes.b2MassData,
  var cxy) return true;ct() {
        b2Ed0) {is.m_pairCount ==ct() {
        b2Edints[0].m_id.key = 0;
         y(this,     __this.m_pairBuffer[__tion () {ion.Shapes.b2Poradiu
            this.ionsR b2Nus);
 .ec3(tangena    b2DistanceProRct = = __this.m_pairBuf1X = t1.x - t2
    Rparation <= tota
        return proxy.userData;
    }
    b2DynamicTree.prototype.Query = function (callback, aabb) {
        if (this.m_root == null) return;
        var stack = new Vector();
        var count = 0;
        stack[count++] = this.m_root;
        while (counR          var cpr node = stack[--count];
            if (node.aabb.TestOverlap(aabb)) {
                if (node.IsLeaf()) {
                    var proceed = callback(node);
                    if (!proceed) return;
                }
                else {
                  ctrue; = Boxc      fault:
          bestVcstanceision.cmmon.brt(false);
      if (node.IsLeaf()) {
             _radius;
    nceJointDef =R1var r = b2Math.SubtratVV(p1, p2);
        r.Normalize();
        var v = b2Math.CrossFV(1.0, r);
        var abs_v = b2Math.AbsV(v);
        var maxFraction = input.maxFraction;
   eProxy.b2DistanceP
            sib;
                subInput.p1 = input.p1;
                subInput.p2 = input.p2;
                subInput.maxFraction = input.maxFraction;
              }
 (c, poly1, xf1prototype.t2);
                if (tmin > tmax) return false;
            }
        }
     
    }
ints[0].m_id.k
          ;
            function b2Mat33tion ()    if (t1 > tmiile (node1) {
              b2DynamicTr             if (maxFraction > 0.0) {
        icTreeBroadPhase.prototype.Raput.p2;
                sCollBB();
        aabb.Comt2);
                if (tmin > tmax) r
            while }
    b2DynamicTraabb.upperBound.y = aabb-y.prototype.Set = fe = function () {}
    b2DynamicTreeBroadPhase.prototype.Rebalance = functith.min(p1.y, tY);
                    segmentAndefined) iterations = 0;
        this
    b2DynamicTr(iterations);
    }
    b20.0        this.m_tree.RayCast(callback, input);
    }
    b2DynamicTroxy));
        this.m_moveBuffer.splValidate = function () {}
    b2DynamicTreeBroadPhase.pro2.y);
        v12rA + rB __this.m_pairCount) {
     ;
    

    a2j.is = furBound.x = Math.max(p1.x, tX);
            segmentAABB.upperBound.y =h.max(p1.y, tY);
        }
        var stack = new Vector();
       else {2BodyDef.apply(this, argumeC this.m_root) {
   ;
         null;
  AABB;

       b2DynamicTreeBroadthisints[0].m_i retaabb = new          segm_this.m_pairCount] = new b2DyolliswB = on > 0.0) {
    var count = 0;
        stack[count= this.m_root;
        while (coun0) {
            var node = sta-count];
            if (node.aabb.TestOverlap(segmentAABB) == false) {
                continue;
            }
            var c = node.aabb.GetCenter();
            var h = node.aabb.GetExtents();
            var separation = Math.abs(v.x * (p1.x - c.x) + v.y * (p1.y - c.y)) - abs_v.x * h.x - abs_v.y * h.y;
            if (separation > 0.0) continuede.aabb.TestO {
  
        ifCchild1 ibling;
     ;
    }
    b2DynamicTreeBroa) {
        this.m_points = new Vector(b2Settings.b2_maxManifoldPoints);
        for (var i = 0; i < b2Settings.b2_maxManifoldPointstInpu1{
 gmentAABB) == false) {
                continue;
            }
            va       else
    }
    b2Cototype. b2M.m_root = sibling;
              for e1];r = thk1       b2Math.b2b, displacement);
        if (buffer)        for (        this.BufferMove(proxy); = function        fdge1 = 0;
        varrototype.AllocateNo        if (lea
        vafer = new Vector();
micTreeNodeee.prototype.InsertLeaf =r t1 = 0;
      b2DynamicTreeBroadPh;
        this.m_type =poly1, xf1, next           }, userData) {
  ;
        this.m_typaration <= tota
        }oxy(aabb, userDat;
        this.m_ty
          tUserDchild1 = sibling.child1;
        callbng.child2;
                var na = node2;
            leaf.parenhis.m_x) + Math.abs((child1.aabb.lowerB
    ound.y) / 2 - center.y);
       a.RemoveLeaf = function (leaf) {
lse if (u2 <= t2 = a.upperBoManifold.e_favar d1Y = t cLocalX - v2.x;
            manifold.m_localPlaneNormal.y = cLocalY - v2.y;
            manifinal ();
        aabb.Com    _this.m_pairChis.Reset();
   y(this,.Combine(aabb1, aabb2);
        r
    function}
    b2AABB.prototype.Combine = function D.Dynamics.J
        this.lowerBound.x = Math.min(aabb1.lowerBound.x, aabb2.lowerBohis.m_tangent     var proxyB Math.min(aabb1.lowerBound.y, aabb2.lowerBound.y);
        this.upperBound.x = Math.max(aabb1.upperBound.x, aabb2.upperBound.x);
        this.upperBound.y = Math.max(aabb1.upperBoundis.upperBound.ytionce -= rA + rB;
                var norma tClip.id.featur function (m) {
        this.m_localPnd.prototype.IsLower = function () {
        return (this.value & nput) {
t(m.m_id);
    }
    b2P (thi1icTr
            wh  tY estValue) {
  ion.Shapes.b2PolygonperBound.y = aabb.uhainDef = Box2D.Col
    b2DynamicTreehainDef = Box2D.Cols.AllocateNode(             case 1:node.userData =hainDef = Box2D.CollerBound.y - Points2[i];
            this.p = new b2Ve {
        var tempValue = this.valu,   }  var tempProxy = this.proxy;
        var tempStabbingCount = this.stabbingCount; this.m_ld, polyA, xfA, polyB, xfB)     this.upperBound.y = Math.mld.m_pointCount = 0;
        vat(m.m_id);
    }
    b2Poindefined) p2 = null;&& (o1  (p1, totalRadius = polyA.m_radius ply(this, ant.b2PrismaticJoint.apply(this, argument) {
     if (this.constructor === b2PrismaticJoint) this.b2PrismaticJoint.applnction () {f() {
         Box2D.Dynamics.Joints.b2PrismaticJoint = b2PrismaticJoint;

    function b2PrismaticJointDef() {IN_VALUE) {
                outpK{
       ction (lambda, normal, sts);
        if (offset === undefinDef) this. rB && output.distance > Number.Mtarg.m_p)        if (output.distance > ild1 == null;
    }
    b2Dynam.y + (tMat.colambda === undefined) maxLambda 
  tructor === b2PrismaticJointDnction () {
        tDef.apply(this, arguments);
    };
    Box2D.Dyar rX Leaf() == false)       var nX = dY;
        v{
        b2PulleyJoint.b2PulleyJoint.apply(this, arguments);
        if (thifunction (id) {
       var nX = dY;
   yJoint.apply(this, arguments);
    };
    Box2D.Dynamics.Joints.b2PulleyJoint = b2PulleyJoint;

    function b2PulleyJointDef() {2PulleyJointDef.b2PulleyJoie1 = edgeB;
        var bY = s.y - this.p1.y;
   2PulleyJointDef) this.b2PulleyJointDef.apply(this, arguments);
    };
    Box2D.Dynamics.Joints.b2PulleyJoint       var nX = dY;
   Tr rX = sY = (-dX);
        var k_slop = 100.0 * Number.MIN_VALUE;
        var denom = S    nX /= nLen;
    ar rX    return numOut;ctID.prototype.structor === b2Color) this.b2Colrtices[i].y * d.y;
            if (va2.y);
        v12ar rX = s0 * Number.MIN_VALUE;
        var denom = (-(}
            else {
                cv2 = vIn[1];
                cvlambda[0] = a;
         vOut[numOut];
     sion.Makm_points[0].m_id.sion.MakeC.TestOverlap =sion.MakeCliormal1WorldY = (tMat.col1.y *    var tX = (tX + nY * nY);
                  = b2RevoluteJoint;

    function b2RevoluteJointDef() {
        b2Revolutlambda[0] = a;
        f.apply(this, arguments);
        if (this.constructor === b2RevoluteJointDef) this.b2RevoluteJointDef.apply(this,       var nX = dY;
   ox2D.Dynamics.Joints.b2RevoluteJointDef = b2RevoluteJointDef;

    function b2lambda[0] = a;
        ldJoint.b2WeldJoint.apply(this, arguments);
        if (this.constructor === b2WeldJoint) this.b2WeldJoint.apply(this, arguments);nction () {
        on () {
        this.p1 r normals1 = poly1.m_normals;
        var count2 = parseInt(poly2.m_var rX var tMat;Set(nX,       }
        varb.lowerBound. xf2 = xfB;
      {};
if (typehis, arguments);
  E_INFINITY,
 old.e_faceA;
     function () {  poly1 = polyA;
            poly2 = polyB;
        var p1X = xf1.poravityt     ath) === "u+);
a;
        abb.lowerBound.x - extend.x + dXler.bmbda;
      true;
p1.y = this.postormal1WorldY = (tMat.col1.y * tVec.x + tMat.col2.y * tVec.yound.y - extendY;
        proxy.aa(); //definitions
Box2D.postDefs = [];
(function () {
    var b2CircleShape = Box2D.Collisionbe    bCircleShape,
        b2EdgeChainDef =  (-this.p2.y) + this.p1.y;
  node = (this.m_path >> bit) & 1 ? node.child2 : node.child parseInt(edge + 1 < count1 ? ts);
 bply(this, arguments);Manifold,
        b2ManifoldPoint = Box2D.Collision.b2MaldPoint,
    oint = Box2D.Collision.b2Point,
        b2RatInput =Collision.b2RayCastInput,
    b2RayCastOutput = Box2D.Collision.b2RayCastOutput,
    b2Segment = Box2D.Collision.begment,
        b2SeparationFunctioormA, proxyB, SeparationFunction,
        b2Simple       if,
     2 = polyB;
            xf1 = xfA;
         ;
            edge1 = edgeA;
            manifold.m_type = b2Manl2.x *rBound.y) / 2);
    }
    b2AABB.prototype.GetExtents = = b2Collision.s_inci);    v2Mat22,
       FindIncidentEdge(inc= function (dupperBound.x <= this.cTree,
    + tMat.col2.x * tVec.y);    tVec = loI;mal, se= b2Gravitn (callback, input) {
A.R;
 v1Y;
        var sansformA.potion = v2X * normal1ansformA.posib.Get     pointAX = transfor2R;
         dPha2;
 ncidentEdge, formA.positContac(-+ (tMat.axSep.b2BoundValues = f.positioler.b2.y);
            tVec = localPointB;         ;
       dValues,
       K2_aab      Kde.b2DynamicTreeNoK    t.col1.x1X = t1.x - t2.x;
        rex,
        b2SimplexCa    pointB;
    b2Manif.position.y + (tMat.col        var dX = xon bis.p1.x;
        va
      }
    b2Distandex E_INFINITY,
  x = pointBX - pointA     Settings.b2Asser;
 / dY : dY < 0 ?2Vec2();
   tmin = (-Number.MAX, tr9exA));
     = new b2DynamicTon.b2TimeOfImpact,
       b2DynamicTreeNode();
    }
    b2Dynamicse ithis.lowerBound = nem_vertexCount);
       type = b2Manifnd = new b2Vec2();
   ertex(cache.indexA[0]);

        else if (cache.indexB[_proxy
            b2D            2;
  = new b2Dynamic     if ((-k_slop * denom) <= mu2 && m if (norm1 < norm2) {
                    sibling = child11) & 31;
            }++this.m_path;
            this.RemoveLeafnts);
        if (thiar tVec;
        var s = 0;
        var sgn = 0;
        if (count == 1) {
            this.m_type = b2SeparationFunction.e_points;
            localPoi= this.m_proxyA.GetVertex(cache.indexA[0]);entEdge;
              localPointB = this.m_proxyB.GetVertex(cache.indexB[0]);
    
       localPointA2 = thisult = re tmin = (-Number.MAX_VLUE);
        varals2 = plocalPointA2 = this.m_ (localPoint;
           b2Collision.2Math.Sthis.m_axissformA.R;
     
      var absDXoxyBB[0]);
 tAX;ath.abs(dX);
        var absDYY - pointAY;
ber als2 =    pointAY = transformA. tration.y + (tMat.col1.y * tVec.xy) / dY : Number      vtotyp-.Math) === "unde
        b2Mat22 r nosformB.R;
           .x * tBX = transf   thtices2[index];
  .col1.x * tVec.x +        }
arent = this.m_freeLformB.position.y + (tMat. (leaf) {
        Count = tempStabb    }
    }
         = b2SeparationFunction.e_facintBY - po) {
        var;
        tMat = xf2.R;
        var tX = (tMat.       var       va.y * normal1Y);
        normal1Y = (tMat.col2.x * normal1       }
     
        var minDo this.m_tr}
        elsreDef) this.b2Fixture   }
     arent = this.m_freeLim_vertexCounintAY) * nortMat.col2.x.GetVertex(cache.inc.y);
      localPointA1 = this.m_proxyA.GetVec = localP      mani inv_d = 1.0 nd = new b2Vec2();
    .m_pointCount = 1;
e.indexB[1]);
        var dist = 0; var dX = th       var ;
      oxyA.Get  this.m_localPoint.x = 0.5 * (localPointA1tion.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
        tClip.v.y = xf2.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
      Def) this.b2Jo}
    b2AABB.prototype.Combine = function         if (t
        this.lowerBound.x = Math.min(aabb1.lowerBound.x, aabb2.lowerBo          normtID.prototype, ' Math.min(aabb1.lowerBound.y, aabb2.lowerBound.y);
        this.upperBound.x = Math.max(aabb1.upperBound.xar rX = segment.p2.x - s.x;s.p1.y;
        var tClip.id.featur tVec.x + tMat.col2.y * tVec.y;
      nd.prototype.IsLower = function () {
        return (this.value &             }
    b2Collision.MakeClipPointVector = funs.b2RevoluteJo5return (this.value & 1) == 1;
    wA = b2Mttp://www.box2dflash.orgmics.Joints.b2nt.b2PrismaticJoint.apply(this, argument + tMat.col2.xif (this.constructor === b2PrismaticJoint) this.b2PrismaticJoint.applormA.position.yly(this, arguments)output.pointB);
        output.distance = b2Math.SubtractVV(output.pointA, output.pointB).Length();
        output.iterations = iter;
        simplex.WriteCache(cache);
        if (input.useRadii) {
            var rA = proxyA.m_radius;
            var rB = proxyB.m_radius;
            if (output.distance > rA + rB && output.distance > Number.MIN_VALUE) {
33              output.distance -= rA + rocalPointBr any damagrmA.position.y + (tMat.ctDef.apply(this, arguments);
    };
    Box2D.Dynamics.Joints.b2PrismaticJointDef = b2PrismaticJointDef;         var pA = b2Math.MulX(tran{
        b2PulleyJoint.b2PulleyJoint.apply(this, arguments);
        if (this.constructor ===          var pA = b2Math.Mul.pointB.y -= rB * normal.y;
            }
            else {
                p = new b2Vec2();
                p.x = .5 * (output.pointA.x + output.pointB.x);
                p.y = .5 * (oztput.pointA.y + output.pointB.y);
                output.pointA.x = output.pointB.x = p.x;
          .x + dA.y * r.y;tA.y = output.pointb2Math.SubtractVV(localPointB2, locaput.distance = 0.0;
            }
        }
    }
    Box2D.postDefs.push(function () {
        Box2D.Collision.b2Distance.s_sim         var pA = b2Math.Mul
        Box2D.Collision.b2Distance.s_saveA = new Vector_a2j_Number(3);
        Box2D.Collision.b2Distance.s_saveB = new Vector_a2j_Number(3);
    });
    b2DistanceInput.b2DistanceInput = function () {};
    b2DistanceOutput.b2DistanceOutput = function () {
        this.pointA = new b2Vec2();
        this.pointB = new b2Vec2();
    };
    b2DistanceProxy.b2DistanceProxy = function () {};
    b2DistanceProxy.prototype.Set = function ( = (b * s + f) / e;
            ape.GetType()) {
            case b2Shape.e_circleShape:
            {
                var circle = (shape instanceof b2CircleShape ? shape : null);
                this.m_vertices = new Vector(1, true);
                this.m_vertices[0] = circle.m_p;
                this.m_count = 1;
                this.m_radius = circle.m_radius;
            }
                break;
            case b2Shape.e_polygonShape:
            {
                var polygon = (shape instanceof b2PolygonShape ? shape : null);
                this.m_vertices = polygon.m_vertices;
                this.m_count = polygon.m_vertexCount;
                this.m_radius = polygon.m_radius;
            }
                break;
            default:
                b2Settings.b2Assert(false);
        }
    }
    b2DistanceProxy.prototype.GetSupport = function (d) {
        var bestIndex = 0;
        var bestValue = this.m_vertices[0].x * d.x + this.m_vertices[0].y * d.y;
        for (var i = 1; i < this.m_count; ++i) {
            var value = this.m_vertices[i].x * d.x + this.m_vertices[i].y * d.y;
            if (value > bestValue) {
                bestIndex = i;
                bestValue = value;
            }
        }
        return bestIndex;
    }
    b2DistanceProxy.prototype.GetSupportVertex = function (d) {
        var bestIndex          var pA = b2Math.stValue = this.m_vertices[0].x * d.x + this.m_vertices[0].y * d.y;
        for (         var pA = b2Math.m_count; ++i) {
            var value = this.m_vertices[i].x * d.x + this.m_vertices[i].y * d.y;
            if (value > bestValue) {
                bestI         var pA = b2Math.Mul    bestValue = value;
            }
        }
        return this.m_vertices[b         var pA = b2Math.Mulb2DistanceProxy.prototype.GetVertexCount = function () {
        return this.m_co         var pA = b2Math.istanceProxy.prototype.GetVertex = function (index) {
        if (index === undefined) index = 0;
        b2Settings.b2Assert(0 <= index && index < this.m_count);
        return this.m_vertices[index];
    }
    b2DynamicTree.b2DynamicTree = function () {};
    b2DynamicTree.prototype.b2DynamicTis.m_type = b2SeparationFun       this.m_root = null;
        this.m_freeList = null;
        this.m_patlocalPointA2, localPointA1), 1.ertionCount = 0;
    }
    b2DynamicTree.prototype.CreateProxy = function (aabb, userData) {
        var node = this.AllocateNode();
        var extointAX = transformA.positionbbExtension;
        var extendY = b2Settings.b2_aabbExtension;
        node.aabb.lowerBound.x = aabb.lowerBound.x - extendX;
        node.aabb.lowerBound.y = aabb.lowerBound.y - extendY;
        nod         var pA = b2Math.Mulabb.upperBound.x + extendX;
        node.aabb.upperBound.y = aabb.upperBoun
                }
         node.userData = userData;
        this.InsertLeaf(node);
        return node;
    }
    b2DynamicTree.prototype.DestroyProxy = function (proxy) {
        this.RemoveLeaf(proxy);
        this.FreeNode(pr     var pointA;
        var poif());
        if (proxy.aabb.Contains(aabb)) {
            return false         var pA = b2Math.BX) * normalX + (pointAY - po;
        var extendX = b2Settings.b2_aabbExtension + b2Settings.b2_aabbMultiplier * (displacement.x > 0 ? displacement.x : (-displacement.x));
        var extendY = b2Settings.b2_aabbExtension + b2Settings.b2_aabbMultiplier * (displacement.y > 0 ? displacement.y : (-displacement.y));
        proxy.aabb.lowerBound.x = aabb.lowerBound.x - extendX;
        proxy.aabb.lowerBound.y = aabb.lowerBreftanger pointCeferencetangend.y = aabb.lowerBound.y - extendY;
        proxy.aabb.upperBound.x = aabb.upperBound.x + extendX;
        proxy.aabb.upperBound.y = aabb.upperBound.y + extendY;
        this.InsertLeaf(proxy);
        return true;
    }
    b2DynamicTree.prototype.Rebalance = function (iterations) {
        if (iterations === undefined) iterations = 0;
        if (this.m_root == null) return;
        for (var i = 0; i < iterations; i++) {
            var node = this.m_root;
            var bit = 0;
            while (node.IsLeaf() == false)is.m_type = b2SeparationFuode = (this.m_path >> bit) & 1 ? node.child2 : node.child1;
                bit = (bit + 1) & 31;
            }++this.m_path;
            this.RemoveLeaf(node);
            this.InsertLeaf(node);
        }
    }
    b2DynamicTree.prototype.GetFatAABB = function (proxy) {
        return proxy.aabb;
    }
    b2DynamicTree.prototype.GetUserData = function (proxy) {
        return proxy.userData;
    }
    b2DynamicTree.prototype.Query = function (callback, aabb) {
        if (this.m_root == null) return;
        var stack = new Vector();
        var count = 0;
        stack[count++] = this.m_root;
        while (count > 0) {
            var node = stack[--count];
            if (node.aabb.TestOverlap(aabb)) {
                if (node.IsLeaf()) {
                    var proceed = callback(node);
                    if (!proceed) return;
                }
                else {
                    stack[count++] = node.child1;
                    stack[count++] = node.child2;
                }
            }
        }
    }
    b2DynamicTree.prototype.RayCast = function (callback, input) {
        if (this.m_root == null) return;
        var p1 = input.p1;
        var p2 = input.p2;
        var r = b2Math.SubtractVV(p1, p2);
        r.Normalize();
        var v = b2Math.CrossFV(1.0, r);
        var abs_v = b2Math.AbsV(v);
        var maxFraction = input.maxFraction;
        var segmentAABB = new b2AABB();
        var tX = 0;
        var tY = 0; {
            tX = p1.x + maxFraction * (p2.x - p1.x);
                var  * (p2.y - p1.y);
         b2ContactowerBound.t.col2.y * tVecowerBound parseInt(poly2.m_vertexCoun    segmentAABB.lowerBound.y = Math.min(p1.y, tY);
            segmentAABB.upperBound.x = Math.max(p1.x, tX);
            segmentAABB.upperBound.y = Math.max(p1.y, tY);
        }
        var stack = new Vector();
        var count = 0;
        stack[count++] = this.m_root;
        while (count > 0) {
            var node = stack[--count];
            if (node.aabb.TestOverlap(segmentAABB) == false) {
                continue;
            }
            var c = node.aabb.GetCenter();
    h = node.aabb.G
            var c = node.aabteJotCenter();
            var h = node.aabb.GetExtents();
            var separation = Math.abs(v.x * (p1.x - c.x) + v.y * (p1.y - c.y)) iunt ==
            var separation         v.indexA            if (sep
            var separatio3_tree = new ;
     b2Math.MulX(transformB, wBLocp.b2TimeStetransforb2Math.MulX(transformB, wBLocteJo- abs_v.x * h.x - abs_v.y * h.y;
            if (separation > 0.0) continue;
            if (node.IsLeaf()) {
                var subInput = new b2RayCastInput();
                subInput.p1 = input.p1;
                subInput.p2 = input.p2;
                subInput.maxFraction = input.maxFraction;
                maxFraction = callback(subInput, node);
                if (maxFraction == 0.0) return;
                if (maxFraction > 0.0) {
                    tX = p1.x + maxFraction * (p2.x - p1.x);
                    tY = p1.y + maxFraction * (p2.y - p1.y);
                    segmentAABB.lowe     return (this.nts);
    };
    Box2D.Dynamics.segmentAABB.lowerBound.y = Math.min(p1.y, tY);
                    segmentAABB.upperBound.x = Math.max(p1.x, tX);
                    segmentAABB.upperBound.y = Math.max(p1.y, tY);
                }
            }
              var e12 = b2Math.SubtractVV(this.m_v2.w, this.m_v1.w);
             stack[count++] = node.child2;
            }
        }
    }
    b2DynamicTree.pr    var e12 = b2Math.S function () {
        if (this.m_freeList) {
            var node = this.m_freeList;
            this.m_freeList = node.parent;
            node.parent = null;
            node.child1 = null;
            node.child2 = null;
            return node;
        }
        return new b2DynamicTreeNode();
    }
    b2DynamicTree.prototype.FreeNode = function (node) {
        node.parent = this.m_freeList;
        this.m_freeList = node;
    }
    b2Dynam.x + dA.y * r.y;
nsertLeaf = function (leaf) {
        ++this.m_insertionCount;
        if (this.m_root == null) dB.y;
          is.m_root = leaf;
            this.m_root.parent = nulmalY;
           ec2();
        }
    }
    b2Simplex.prototype.Geter = leaf.aabb.GetCenter();
        var sibling = this_count) {
            case 0:
                b2Settings.b2Assert(fa
            do {
                var child1 = sibling.child1;
                var child2 = sibling.child2;
                var norm1 = Math.abs((child1.aabb.lowerBound.x + child1.aabb.upperBound.x) / 2 - center.x) + Math.abs((child1.aabb.lowerBound.y + child1.aabb.upperBound.y) / 2 - center.y);
                var norm2 = Math.abs((child2.aabb.lowerBound.x + child2.aabb.upperBound.x) / 2 - center.x) + Math.abs((child2.aabb.lowerBound.y + child2.aabb.upperBound.y) / 2 - center.ointAX = transformA.positiif (norm1 < norm2) {
                    sibling = child1;
                }
                else {
                    sibling = child2;
                }
            }
            while (sibling.IsLeaf() == false)
        }
        var node1 = sibling.parent;
        var node2 = this.AllocateNode();
        node2.parent = node1;
        node2.userData = null;
        node2.aabb.Combine(leaf.aabb, sibling.aabb);
        if (node1) {
            if (sibling.parent.child1 == sibling) {
                node1.child1 = node2;
            }
            else {
                node1.child2 = node2;
            }
            node2.child1 = sibling;
            node2.child2 = leaf;
            sibling.parent = node2;
            leaf.parent = node2;
            do {
                if (node1.aabb.Contains(node2.aabb)) break;
                node1.aabb.Combine(node1.child1.aabb, node1.child2.aabb);
                node2 = node1;
                node1 = node1.parent;
            }
            while (node1)
        }
        else {
            node2.child1 = sibling;
            node2.child2 = leaf;
            sibling.parent = node2;
            leaf.parent = node2;
            this.m_root = node2;
        }
    }
    b2DynamicTree.prototype.RemoveLeaf = function (leaf) {
        if (leaf == ;
        t) {
            this.m_root = null;
            return;
        }
        var node2 = leaf.par(leaf == ber ld1 =e2 = leaf.parent;
        var node1 = node2.parent;
        var sibling;
        if (node2.child1 == leaf) {
            sibling = node2.child2;
        }
        else {
            sibling = node2.child1;
        }
        if (node1) {
            if (node1.child1 == node2) {
 33arguments)3    node1.c       var1Yhild1 = sibling;
            }
            else {
                node1.child2 = sibling;
            }
            sibling.parent = node1;
 teJo       this.FreeNode(node2z;
            while (node1) {
                var oldAABB = node1.aabb;
                node1.aabb = b2AABB.Combine(node1ar e13 = b2M, node1.child2.aab w1);
        var w1e13 = b2Math.Dotions  pointV(w2, w) break;
         zTree().x + dA.y * , wBLoca       }
         bl2.x *
      e23 = b2Math.Dot(w2, e23);
        var w3e23nessPoints = functio      f b2ManifoldPo22               bX, bayCastInput) thisf2
   +namicTreeBroadPhase.bb2Ma    i);
        this.m_adPhase = function () pperBound.y = Math.max(petV(m.m_loca     {
        this.m_tree = new b2DynamicTree();
        this.m_moveBuffer = new Vector();
        this.m_df   va= b2Math.Dot(w2, e23);        this.m_pairBuffer = new Vector();
   z    this.m_pairCount = 0;
    };
    b2DynamicTreeBroadPhase2_2 > 0.0 && d12eProxy = function (aabb, userData) {
       .0 / (d12_1 + d12 = this.m_tree.CreateProxy(aabb, userData);
.0 / (d12_1 + d12this.m_proxyCount;
        this.BufferMove(proxy);
        return proxy;
    }
    b2DynamicTreeBroadPhase.prototype.DestroyProxy = function (proxy) {
        this.UnBufferMove(proxy);
        --this.m_proxyCount;
        this.m_tree.DestroyProxy(proxy);
    }
    b2DynamicTreeBroadPhase.proMath.CrossVV(e12, e13);
      tVV(w2, w1);
      ling;
            }
          }
            var d123_3 = n123 * b2Math this.m
        this.m_pairBufmmon.Matotype.TestOverlap = function (prox b2DynamicTreeBroa       var aabbA = this, userData) {
     = 1;
           
      oxy(aabb, userData) = 1;
           etFatAABB(proxyB);
        return aabbA.TestOverlap(aabbB);
    }
    b2DynamicTreeBroadPhase.prototype.GetUserData = function (proxy) {
        return this.m_tree.GetUserData(proxy);
    }
    b2DynamicTreeBroadPhase.prototype.GetFatAABB = function (proxy) {
        return this.m_tree.GetFatAABB(proxy);
    }
    b2DynamicTreeBroadPhase.prototype.GetProxyCount = function () {
        return this._v1.wA.x + this.m_v2.a * this. b2DynamicTreeBroadPhase.prototype.UpdatePairs = function (callback) {
        var __this = this;
        __this.m_pairCount = 0;
        var i = 0,
            queryProxy;
        for (i = 0;
             i < __this.m_moveBuffer.length; ++i) {
            queryProxy = __this.m_moveBuffer[i];

            function QueryCallback(proxy) {
                if (proxy == queryProxy) return true;
                if (__this.m_pairCount == __this.m_pairBuffer.length) {
                    __this.m_pairBuffer[__this.m_pairCount] = new b2DynamicTreePair();
                }
                var pair = __this.m_pairBuffer[__this.m_pairCount];
                pair.proxyA = proxy < queryProxy ? proxy : queryProxy;
                pair.proxyB = proxy >= queryProxy ? proxy : queryProxy;++__this.m_pairCount;
                return true;
            };
            var fatAABB = __this.m_tree.GetFatAABB(queryProxy);
            __this.m_tree.Query(QueryCallback, fatAABB);
        }
        __this.m_moveBuffer.length = 0;
        for (var i = 0; i < __this.m_pairCount;) {
            var primaryPair = __this.m_pairBuffer[i];
            var userDataA = __this.m_tree.GetUserData(primaryPair.proxyA);
            var userDataB = __this.m_tree.GetUserData(primaryPair.proxyB);
            callback(userDataA, userDataB);
            ++i;
            while (i < __this.m_pairCount) {
                var pair = __this.m_pairBuffer[i];
                if (pair.proxyA != primaryPair.proxyA || pair.proxyB != primaryPair.proxyB) {
                    break;
                }++i;
            }
        }
    }
    b2DynamicTreeBroadPhase.prototype.Query = function (callback, aabb) {
        this.m_tree.Query(callback, aabb);
    }
    b2DynamicTreeBroadPhase.prototype.RayCast = function (callback, input) {
        this.m_tree.RayCast(callback, input);
    }
    b2DynamicTreeBroadPhase.prototype.Validate = function () {}
    b2DynamicTreeBroadPhase.prototype.Rebalance = function (iterations) {
        if (iterations === undefined) iterations = 0;
        this.m_tree.Rebalance(iterations);
    }
    b2DynamicTreeBroadPhase.prototype.BufferMove = function (proxy) {
        this.m_moveBuffer[this.m_moveBuffer.length] = proxy;
    }
    b2DynamicTreeBroadPhase.prototype.UnBufferMove = function (proxy) {
        var i = parseInt(this.m_moveBuffer.indexOf(proxy));
        this.m_moveBuffer.splice(i, 1);
    }
    b2DynamicTreeBroadPhase.prototype.ComparePairs = function (pair1, pair2) {
        return 0;
    }
    b2DynamicTreeBroadPhase.__implements = {};
    b2DynamicTreeBroadPhase.__implements[IBroadPhase] = true;
    b2DynamicTreeNode.b2DynamicTreeNode = function () {
        this.aabb = new b2AABB();
    };
    b2DynamicTreeNode.prototype.IsLeaf = function () {
        return this.child1 == null;
    ocalPointB2 = icTree            this.m_cair = function () {};
    b2ManificTreeoxy;d1 =eA =                    b2Manifold.b2Manifold = function () {
        this.m_poinXtCount = 0;
    };
    b2M  this.m_poin.x + tMat.colype.b2Manifold = function () {
        this.m_points = new Vector(b2Settings.b2_maxManifoldPoints);
        for (var i = 0; i < b2Settings.b2_maxManifoldPoints; i++) {
            this.m_points[i] = new b2ManifoldPoint();
        }
        this.m_localPlaneNormal = new b2Vec2();
      t == 0) {
            v = vertices[0];
            v.indexA = 0;
            v.indexB = 0;
            wALocal = proxyA.GetVertex(0);
            wBLocal = proxyBthis.m_K.col2.y = i1 + i2;
 07 Erin Cat/*
 * Copyrigzt (c) *to http:a) 2006s.com
 *
6-2007 Erin Catto http://www3.x =to http://www1.zs provided 'as-is', without aht (o http://www.gps provided 'as-is', without aphysm) 20m2 200cs.com
 *
 *.com
 *
 * This software is software is provided 'as-is', withSolve33(impulse, (-C1X) purpoYe,
 *2))-2007 Erin }2007 Erin else {2007 Erin Cattm1will the ainvMassA-2007 Erin Cattm2 redistribute itB-2007 Erin Cattid redistributeI
 * freely, subjict to the follIg restrictions:var k1d re arising from the use s that you wrot This softwaressoftware. If srepresented; you musct tm that you wrotal software. If srepresented; you mu2oduct, 2006-2007 Erin Catto http://www1.Set(k11, pro, 0.0 commercial Catto http://www.ged.
 2, woultered source versionou mfor anyd redistrib softwa22(new b2Vec2(e,
 * se,
 * ind source versionfor anyany e * misre.xThis notice may not be ht (ced or alyThis notice may not be phys0.0commercial applicationou mPXemoved or .x this softperp.x
 *Lin 2012-.com
 *
xisltered from a box2Yweb, http://code.google.comyp/box2dweb/
 *
 * It is a *
 * 
 * ou mLd re, http://code.googlledgmeurce dist/box2dweb/
 *
 * It 1 for Box2dFlash,oducte nearly everythingng fr * organized the same way. httpoduct documec1.x -redistribute it
 * PXction (a2j, unyefined) {

    if(!(OY-2007 Erin a1efined) {

 If(!(L://www.box2dc2m/p/ to the following(!(Object.prototyightetter__ instanceof Funof Function)2& Object.protoIf FuLoduct documebAhingweep.a = p://www.box2dbB  Object.defin
    {
       SynchronizeTransform( commercial bB       if(cfg.get instanceof Functreturn linearError <= b2Settings.b2_p, cfgSlop && angulfg.get);
            if(ceof Fut in-2007 EapplicaBox2D.inherit(b2PrismaticJointDef,, cfg.sDynamics.  }
  if  }

  commerc      }
    }

 .prototype.__super =  function emptyFn() {};
    a2jse) {
   inherit = function(cls, bas      }
    }

  = function ()nd to alter pCtr = cls;
        emptyFn.protmptyFn.protapply(/*
, arguments commercial /*
 localAnchorA = he original nction generateCallback(conBext, cb) {
        return function (xistext, cb) {
        re}inherit = function(cls, base) {
    .prototype = new emptyFn;
        cls.protot/*
     var;

    a2jcallrateC      return func
    
     }
.e_p   }
    }
pply(context, arguments);inly 1.0ltered source ver/*
 referenceAngl
   8,
 *
 * The/*
 enableLimitptyFalsbase.progenerateCalwerg.getla
        a2j.is = functionupp) return false;
        if ((o2 in is(o1Motor tm
        if (o1 === nmaxturn Forc
    a2j.is = functionmurn Speede;
        iapplica = function(cls, base) {
    Initializ
   Fn;
     bA, bB, ak(con,  is undefined) length bodytextb
 * freely, (v) {
      bg restrictiorateCallback(context(v) {
   .GetLllbaP }
( a2j.p      return function () {
    .abs(parsee assignments from global namespace
var Vecs);
  TODO remove assignmVector(seUIn        return tmp;
    };

  ay;
var Vecto};
() -ture
if (typeon) === ineSetter__(p, cfg.set);
     ulley  }
   function emptyFn() {};
    .inherit = llision.Shse) {
        var tmpCtr = cls;
        emptyFn.totype = base.prototpes = {};
typeof(Box2D.ptyFn;
        cls.prototype.constructor = tmpCtr;
  peof(Box2.generateCallback = function generateCm_groundck(cond re, cb) {
        return func{};
if (typeoct tx2D.Dynamics.Contacts) === "unallback(conf(Box2D.Dynamics.Contacts) === "unallback(conx2D.Dynamics.Contacts = {};
if (tuf(Box2D.Dynamics.Contacts) === "unux2D.Dynamics.Contacts =
    a2j.NVpes = {};
if (typeofox2D.(contextFn;
        cls.protottter__(/*
 * remove asWorldents f
if (typeof(Box2D.ision = {};
if = {};
//pre-definitions
(funct    () {
    Box2D.Collision.IBroadPhase = 'Vecto.Collision.IBroadPhase';

 2  function b2AABB() {
        b2AABB.b2AARea
   or.__impFn;
     inv_dt   cls.prototif   };
  === undefined) n.b2Boun 
 *
 * Thetter__(he originaln.b2Bou.com
 **
 */oundValuesu2.x,

    fundValues.b2BoundValues.applyyon b2Bound() {
        b2Bound.b2Bound.apply(thisTorquguments);
    };
    Box2D.Collision.b2Bound = b2Bound;

    function b2BoundValuesstructor.__implement{};
//pre-definitions
G
if (typeoion () {
    Box2D.Collisiou mdefi=== "undefine.m_xf.posi
   .Copy       returna.Add.IBroadP;
if (typeofj.__defineGetter__(an b2Collision() {
        b2Collision.b2Collision.aply(this, arguments);
    }};
    Box2D.Collision.b2Collision = b2Collision;

    function b2ContactIDion b2Bou     b2ContactID.b2ContactID.apply(this, arguments);Lengthd res.constructor === b2Contactp   Box2D.C = 'Box2D.Collision.IBroadPhase';

    functi2ContactsdwebBox2D.Collision.b2Collision /p/bunction b2ContactID(a port of Box2DFlssh 2Box2D.Collision.b2Collision nize b2Distance() {
    n for Box2dFlashddwebom/p- sbject.prototnce =sh 2 You- sof Function)tter__(Math.sqrt(dX * = b+on b* dY  function b2AABB() {
        b2AABB.b2AA
     ct t2ContactPoint.b2ContactPoint.apply(this, asion.b2AABB = b2AABB;

    function b2BouontactPoint = b2ContactPoint;

    function b2Distance() {
  2     b2Distance.b2Distance.apply(this, arguments);
    };
    Box2D.Col2ision.b2Distance = b2Distance;

    function b2DistanceInput() {
        b2DistanceInput.b2DistanceInput.apply(this, arguments);
    };
    R faly(this, arguments);
    };
    Box2D.Cr faln b2Collision() {
        b2Collisionommon.Math) === "undefineddefundefined) length = 0;
        vtmp = new , (thi

    functiotMa< length; ++his, dweb
 *
 * Thehis, sh 2ments != undefinedn b2Con.apply(this, argm_wCollynamicTreBod *
 * 
 *  b2Distance() {
      =amic.;
if (typeoAstanc b2ContactPoint;

    functdPhase() {
        b2DynamicTreht (adPhase.b2DynamicTtancance.apply(this, arguments);.Contacts) === "undefined") BoxeeBroadPhase.b2DynamiBTreeBroadPhase.apply(this, arguments);
    };
    Box2D.Collisight (
        b2Dynamicase = b2DynamicTreeBroadPhase;

    function b2Dyypeof(Box2D.inlyV (thCallback(contollers) === "undefined") Box2D.ir() {
        b2DynBs.Contacts) === "un     x2D.Col     b2Dynam) {
      consta === 
        A
    };
 .Colli*air;

   v));
    }

})m_max
        bb2b2DisMin{
  anifold.aA,r = b2DynamicTreee = b2Dyn2Manifoltypeof(Box2D.Com_min{
   
     s.Contacts) === "unanifold.act t(this, arguments);
    B, .IBroadPis.construcold) this.b2Manifold.apply(this,  /ctor === b2Mas.Contacts) === "un.b2Boundmplements != undefined_l o2)I* misrepre arguments);
        if (this.coct ttion b2Collision() {
        b2Collision   rVelocityCamicra() {ollision.b2Disteptor === b2Contactbructure
his, ar Box2D.Collisiob Array;
put;
ree.apply(this, arguments);
  arg     on.b2CR Box2D.Collisior1nt = b2ContynamicTreePaitanc    Object.allbaCentera port of Box2DFlr1Distance.apynamicTreePaitancn b2RayCastInput() {
 n for Box2dFlash;
  ( argrequir/codoint+
    opyrigastInpInput.app{
  nput. === b2RayCystInput) this.b2Ray   };put.apply(this,nt = bject.protot    };
unctBox2D.Collision.b2Po2nt = b2Point;

    fayCa- function(obInput() {
        b2RayCastI2put.b2RayCastInput.appolliput.b2RayCastOutput.apply
    functioctor === b2RayCastIn2ut) this.b2RayCastI2put.apply(this;
  uments);
    };egment() {
    argum2Segment.b2Segm = b2RayCastInputPointt = b    Object.cctionr1gment = b2Segment;sh 2    function nizer1of Function)Pointn.b2Sfunction(obn b2Sep2gment = b2Segment;
  nction.apply(ation2unction.b2Separasint = b2PoinactPoint;

    function b2Distance() {
        b2Distance.b2nput.b2RayCaply(this, arguments);
    };
    Box2D.Collision.b2Distance st() {
     2DistanceOutput.apply(this, arguments);
    };
    Box2D.Coll;
    };
 tanceOutput = b2DistanceOutput;

    function b2Distance
if (typinly t;
-ctio,) {
exCaput.apply(thilues.apply.b2Si2plexC2che.2pply( Box2D.Collisiou m

   d redistribu1.
            returne = b2Simpct to the fu2    function b2Simplisiob2Simple>            if(cfg.set in   cls.prototb2SimplexCacheMultiener1.0 / b2Simpl commercial applications, and to alter it amplexCache.b2Zero       returnapplicationplexVertex2apply(this, arguments);
    };
    Box2D.Collision2b2SimplexVertex = b2Si{
        b2

    function b2TimeOfImpact() {
    };
b2TimeOfImpact.b2TimeOfImpacou mCistance.apis.construcb2Simpleuctor === b2ManifImpact;ertex.b2SimplexC >tered b2TimeOfImpact() {
  stat
        for (iny(thv1, o2)-2007 Erin Catto http:pply(this, arguments);


    function b2TimeOfImpact() {
  WorldManifold.b2WoatUtancold.apply(this, TimeOfImpact.apply(th1 <fold.b2Manifold.apManifold() {
        b2 if (Sorldpply(told.b2WorldManifold.apply(this, arguments); if (this.constructor === b2Ma

    function b2TimeOfImpact() {
  unction ClipVertex() {
his, arguments);
    };
    Box2D.Collisio2.b2WorldManifold = 22WorldManifold;

    function Clx2D.Coex() {
        ClipVertex.ClipVertex.apply(this, argum2ManifoldPoint
    Box2D.Collision.ClipVertex = ClipVertex;

  = Features;
his, arguments);
    };
    Box2ou mcr1ypeofut =Values.apply(this, aments);
    port of Box2DFlcr2ndefion.b if (this.con};
2   Box2D.Col };
    Box2DClipVertex; itpply(    ute it +geChainDeI *ly(thisapply(tEdgeChainDef() {
        bx2D.CunctnDef.b2Edgeructor f.applleShf) thisEdgeChainDef() {
pllisif.b2Et.b2RayCas       b2Eunction b2ManifolCollision.Shapes.b2Edgif (this.cEdgeChainDef() {
        b2Edgertex f() {
        b2uments);
        if (this.cons) {
        b2EdgeShaChainDef.apply(this, arguments);) {
        , argumentertex.b2Simplexnt =.warmStar    Manifold() {
        b2.b2BoundV= );
 deProxyertex.ClipVertex.apply(this, argumene = b2EdgeShape;

    function b2MassData() {
2       b2MassData.b2MassData.ap box2t = b((-apes.b2EdgeSha "undefinly(this, argume)  Box2D.Collision.Shapes.ion.Shapesent.assData = b2MassData;

    function b2PolygonShape()  *
 * 
 * Sean box2n.b2Sb2PolygonSon.Shapes.b2Edgb2MassData;

    function b22olygonShape( };
    Box2Dr === b2Poape.b2PolygonSis.b2PolygonShape.apply(this, arguments);
    };
    Box2D *
 * 
 * SeaneChaip, cfg   Box2DneGetteChainDef.b2E*pes.2Shape.apply(this, arguments);
   && Obif (this.construcof Function)y(this, aceof Fu   Box2Dhis, argumenf.ap(argumeShap;
    BP1Xd source versiondgeChrguments);
        iructor === b*2Polrnal = 'Box2D.Common.b2internal';
hape =function b2Color };
    Box2D.Counction.Shapes.b2Shape =geChainDef)(e = b2Poly

    P2ternal = 'Box

    function b2TimeOfImpact() {
  pply(this, arguments);
);
        if (this.constructor === b2Maape() {
        b2CircleShape.b2CircleShape.appon b2AABB() {
        b2AABB.boftwa   Box2D.Collision.b2ManifoldPoint = b2ManifoldPoint;

    function b2Point() {
        b2Point.b2Point.apply(this, arguments);
    };
    Box2D.Collision.b2Point = b2Point;

    function b2RayCastInput() {
        b2RayCastInput.b2RayCastInput.apply(this, arguments);
        if (this.constructor === b2RayCastInput) this.b2RayCastInput.apply(this, arguments);
    };
    Box2D.Collision.b2RayCastInput = b2RayCastInput;

    function b2RayCastOutput() {
        b2RayCastOutput.b2RayCastOutput.apply(this, arguments);
    };
    Box2D.Collision.b2RayCastOutput = b2RayCastOutput;

    function b2Segment() {
        b2Segment.b2Segment.apply(this, arguments);
    };
    Box2D.Collision.b2Segment = b2Segmenvt = b  Box2D.Collisiovhape.
        if (thin.b2Sstructor === b2Tra.constructor === b2Tes.b2Mpply(this, argumenrm.apply(this, argumeansform) this.b2TransPolygo  Box2D.CollisioCdo function b2Bounbe
 * misr   function b2Vec2(oldthis.co   function b2Visios.b2WorldManiftructor === b2CircleShapManifold() {
   ents);is, arguments);
      onShollision.Shapes.b2Shasion.bh, and must not b{
       .b2Color.apply(thi }; b2Vec2;

    functioternal = 'Box2D.Cransfoommon.b2internal';

 Vec2 structor === b2Color   b2Sis.constructor ===;
    Bob2Vec3.apply(this, ar arguments);
    };
  ternal = 'Box2D.C) {
  (-tor === llis *  };    };
     }    Y)ata;

   2Manifolrguments)ayCastrans if (this.};
  v Box2D.Collisi may not bes);
    }, arguments*onSh) { Box2D.Common.Mat;
        ifor;

    funpply(this, arguments);
        (this, aax(0] = or;

    func
 *
 */
    Box2D.Dynamics.b2Body = b2Bmics.b2B-        b2B-2007 Erin Cattes.b2Ma-.b2BoundValues.app1.x
    Box2D.DynaShape.b b2BodyDef;

    funstructorContactFiolygonhape = b2Polygon.b2BoundValues.apply(ilter.b2ContactFilter() ply(this, arguments);
    };
    Filter.b2ContactFis, arguments);
        if (this.constructor === b2Shape) this.b2Shape.apply(this, arguments);
    };
    Box2D.Collision.Shapes.b2Shape = b2Shape;
    Box2D.Common.b2internal = 'Box2D.Common.b2internal';

    function b2Color() {
        b2Color.b2Color.apply(this, arguments);
        if (this.constructor === b2Color) this.b2Color.apply(this, arguments);
    };
    Box2D.Coructor === unction ClipV this.b2Vec2.apply(this, arguments);
    };
    Box2D.Common.Math.b2Vec2 = b2Vec2;

    function b2Vec3() {
        b2Vec3.b2Vec3.apply(this, arguments);
        if (this.constructor =y(this, arguments);
        if (this.constructor
    Box2D.Dynamics.b2BodtFilter =;
    Box2*2Debub2BodyDef() {
        b2BodyDef.b2B if (this.conertex.ClipVertex.apply(this, arguments if (this.constructor = if (this.consyDef) this.b2BodyDef.apply(this, arguments if (this.cons};
    Box2D.Dynamics.b2BodyDef = b2BodyDef;

    function b2ContactFilter() {
        b2ContactFilter.b2ContactFis, arguments);
        if (this.constructor === b2Shape) this.b2Shape.apply(this, arguments);
    };
    Box2D.Collision.Shapes.b2Shape = b2Shape;
    Box2D.Common.b2internal = 'Boxer.b2ContactManager.apply(this, 2rguments);
        if (this.constructor ==== b2Vec3) this.b2Vec3.apply(this, arguments);
    };
    Box2D.Common.Math.b2Vec3 = b2Vec3;

    function b2Body() {
        b2Body.b2Body.apply(this, arguments)ply(this, arguments);
    };pply(this, arguments);
        if (this.cons.b2ctor === b2DebugDraw) this.b2DebugDraw.apply(this, a6-2007 Erin Catto http:      b2CircleShb2DebugDraw = b2DebugDraw;

    f/
 *
 */pply(this, arguments);
  x2D.Dynamics.b2Fixtur};
    Box2D.Dynamics.b2Bodlter.apents);
    };
    Box2D.Dynamics.b2ContactFctFilter;

    function b2ContactImpmmon.b2internal';

    function b2Color() {
        b2Color.b2Color.apply(this, arguments);
        if (this.constructor === b2Color) this.b2Color.apply(this, arguments);
    };
    Box2ttings = b2Settings;

    functionPllision.Collision.b2ManifoldPoibaumgarte   Box2D.Collisioctor === und = b2Bound;
orld.apply( function b2Vec2(

    function b2Point() {
        b2Point.b2Point.apply(this, arguments);
Function = b2SeparationFunction;

    function b2Simplex() {
        b2Simplex.b2Simplex.apply(this, arguments);
        if (this.constructor === b2Simplex) this.b2Simplex.apply(this, arguments);
    };
    Box2D.Collision.b2Simplex = b2Simplex;

    function b2SimplexCache() {
        b2Si.b2Point =      b2Vec2.b2Vs, args.Contacts.b2Contansform) this.b2Transgment.      b2Vec2.b2Vt;

int() {
        bstraint() {
        ansform) this.b2Trans };
       b2Vec2.b2Vb2SimplexC  if (this.constructor2Maniunction b2Vec2()=== b2ContactConstrec2.apply(this, arguments);
        if (this.constnts);
, o2)ents);
ynamics.Contacts.b2Contact;
    Box2D.Collisiop, cfg.get);tructor === b2Maructor === b2Vec2) this.b2Vec2.apply(this, arguments);
       };
    Box2D.CollisiontInput = b2b2Point;

    function b2RayCastInput() {
        b2Ray(this, argb2RayCastInput.apply(this, arguments);
        if (this.cotput;

    function b2Sput) this.b2RayCastInput.apply(thi(this, arguments);
    };
    Box2D.Collision.b2RayCastInptInput = b2RayCastInputnput;

    function b2RayCastlision.b2Se
        b2RayCastOutput.b2RayCastOutput.apply(this, argumb2Segment.  };
    Box2D.Collision.b2RayCastOutput = b2RayCastOutputtput;

    function b2Segment() {
        b2Segment.b2Seb2Segment.apply(this, arguments);
    };
    Box2D.Collisilision.b2Segment = b2Segistt;

    function b2SeparationFunctiister.
        b2SeparationFunction.b2SeisterionFunction.apply(this, arguments);er = b;
    Box2D.Collision.b2Separationb2SimplexCache.b2SimplexCache.apply(this, argumentments);
    };
    Box2D.Collision.b2SimplexCach2Conb2SimplexCache;

    function b2SimplContactRes {
        b2SimplexVertex.b2Sim2SimplexVertex.apply(this, arguments);
    };
    Box2D.C2D.Collision.b2SimplexVertex = b2SimplexVertex;ure() {
      tions, and to alter it aact() {
        b2TimeOfImpact.b2(this, arguments);t.apply(this, arguments);
    };
    Box2D.Collision.ion.b2TimeOfImpact = b2TimeOfImpact;

    func(this, arguments);
    };
    Box2D.Dynamics.Cont.b2TOIInput.apply(this(this, arguments);    };
    Box2D.Collision.b2TOIInput = b2TOIInput;

    functContaraintPoint()  if (this.cb2NullConta purparguments);
    aint(this, Clamp(CEdge          if(cfg.set in purontact) this.banif, cfgCorre
   )ltered source versionents);
        if ody;

    fCpply(this, argumt;

= b2BodyDef;

    function b2ContactFx2D.Dy) {
        b2ContactFilter.b2ContactF b2Conapply(this, arguments);
    };
    Box2D.Dynamics.b2tactRetFilter = b2ContactFilter;

    function b2ContactImpulsen.apply(this, arguments);
 pctor === b2Shape) thisx2D.Collisintact() {
         };
    Box2D.Collisbject.depe = b2Shape;
    Box.apply
    Bpnternal = 'Box2D.CommonlyAndEdgeContafunction b2Colpr() {
        b2Colorb2PolyAndEdgeC   function b2Po     if (this.constru;
    Box2Dis.b2Color.apply(tllisio
    pb2Body.b2Body.appl         if(cfg.get instanceof Functunction)
                obj.__defineGeer.b2ContactManager.apply(this, arguments);
        if (this.constructor ==arguments);
    };
    Box2D.Dynamics.Contacts.b2ContactConstraintPoint = b2ContactConstraintPoint;

    function b2ContactEdge() {
        b2ContactEdge.b2ContactEdge.apply(this, arguments);
    };
    Box2D.Dynamics.Contacts.b2ContactEdge = b2ContactEdge;

    function b2ContactFactory() {
        r.apply(this, arguments);
    };
    Box2D.Dynamics.Contacts.b2ContactRegister =2ContactResult.apply(this, arguments);
    };
  actResult;

    function b2ContactSolver(r.apply(this, arguments);
        if (this.constructor === b2Contactx    ertex = b2Sim-2007 Erin CattyancyControlleyDynamics.Controllers.b2ConstantAs, arguments);
    };
    Box2D.Dynamics.Contacts.b2ContactSolver = b2ContactSolver;
    };
   anifold.appllision.b b2NullContact.b2NullContact.apply(this, arguments);
        if (this.constructor === b2NullContact) this.b2NullContact.apply(this, arguments);
    };
    Box2D.Dynamics.Contacts.b2NullContact (this.construct;

    function b2PolyAndCircleContact() {
        b2PolyAndCircleContact.b2PolyAndCircleContact.apply b2PolyAndEdgeContact() {
        b2PolyAndEdgeContact.b2PolyAndEdgeContact.apply(this, arguments);
    };
    Box2D.Dynamics.Contacts.b2PolyAndEdgeContact = b2PolyAn        if(cfg.get instanceof Funct) {
        b2Fixture.b2Fixture.apply(this, arguments);
        if (this.cb2ContactFactory.b2ContactFactory.apply(this, arguments);
        if (this.constructor === b2ContactFactory) this.b2ContactFactory.apply(this, arguments);
    };
    Box2D.Dynamics.Contacts.b2ContactFactory = b2ContactFactory;

    function b2ContactRegister() {
        b2ContactRegister.b2ContactRegisterb2ContactRegister;

    function b2ContactResult() {
        b2ContactResult.b2ContactDynamics.Contacts.b2ContactResult = b2ContactRes       b2ContactSolver.b2ContactSolver.apply(thtion b2EdgeAndCircleContact() {
        b2EdgeAndCircleCon.Dynamics.Controloduct documentatments);
    } = b2ConstantAcceoduct documentat, arguments);
    };
    Box2D.Dynamics.Contacts.b2EdgeAndCircleContact = b2EdgeAndCircleContact;;
    Box2llision.oduct documentat;
    Box2D.Dynamics.Controllers.b2ConstantForceController = b2ConstantForceController;

    function b2Controller() {
        b2Controller.b2Controller.apply(this, arguments);
    };
 b2FicleContact.apply(this, a };
    Box2D.Dynamics.Contacts.b2PolyAndCirments);
    };
    Box2D.Dynamics.b2IslaeContact;

    function b2PolygonContact() {
        b2PolygonContact.b2PolygonContact.apply(this, arguments);
    };
    Box2D.Dynamics.Contacts.b2PolygonContb2PositionSolverManifold() {
        b2Posititter__(p, cfg.get);Contact) this.b2NullContaineSetter__(p, cfg.spos

 s.push(Fn;
        cls.prototype.constructor = tmpCtrd) this.b2Manifold.apply(this, = 2tructor.__pply(thi (typeof(Box2D.Collision.Sh
    function emptyFn() {};
    a2j.inherit = if (this.consse) {
        var tmpCtr = cls;
        emptyFn.prototype = base.prototly(this, argum

    function ptyFn;
        cls.prototype.constructor = tmpCtr;
    };

    a2j.generateCallback = function generateCase.b2Dynamic2D.Dynamics.Contacts = {};
if      b2Dynamiext, cb) {
        return function () {
text, cb) {
        return function () {
            cb.apply(cos.Joints = {};
//preion NVector(lengtarJointDef() {
        b2GearJointDef.ngth = 0;
        var tmp = new Array(length || 0);
        for (vllision.Shor === b2GearJointDef) this.b};
 (-1.0),amicapply(this, arguments);
    } tmp[i] = nstructor === b2Joinallback(cont  if (this.co0;
        return t arguments); tmp[i] = 0;
        return t

    ftructor === b2Manifold);
     ointDef.b2JointDef.app{
    ointDef.b2JointDef.apply(this, .constructor === b2Join.Collisi1 a2j.is = functioncollideConnect1.contru2D.Dynamon b2AABB() {
     n true;
        return false;
    };

   gaAntEd    a2j.pA   a2j.pB, r   Box2D.Collisiorund = b2Bound;
t() {return Math.abs(pars      return Math.abs(parseInt(v));
    }

})nts);
        ifV(gaamicTreePair.b2Dynt) this.b2Joint.ant.b;
    };
    Box(Box2D);

//#TODO remove assignments from glamicTreePair.b2Dynar Vector = Array;
var Vector_a2j_Number = Bo;
    };
  nce =t = bt.applyOutpugaAision.Shapes.b2Cid2D.Dy  functie;
2Lin
    function b2    b2Joinb2DistanceIrgume;
 +         b2SimplexCache = dn.b2SineJoinion b2LBneJointDef() {
  actReointDef)ointDeB.b2LineJointDef.apply(th.conb2DistanceI = b2ineJ+ply(tointhis, arguments);
.Collisirb2ContactConstraintef.apply(this    };on.Shapes.b2E{
        b2Manifold.b2y(this, arguC2TOIInpu b2Manifold) this.b2Manifold.apply(this,uctor === b2JointDef) this.b2(thistion b2ManifoldPoint() {
        b2Manif     b2DynamicTree. cfg.set);
    Revoluteon.Shapes) === "undefined") Box2D.Collision.ShMouseJointDef
if (typeof(Box2D.Common) === "undefined") Box2D.Common = {};
if (tytDef.apply(thithis.b2MouseJoi== "undefined") Box2D.Common.Math = {};
if (typeof(Box2D.Dynamics) === "undefined") Box2D.Dynamics = K2D.DynamiMat2        return funcKf(Box2D.Dyoint() {
        b2Prisx2D.Dynamioint() {
        b2Pris3his, arguments);
        if (th*
 */s.construcVec3== b2PrismaticJoint) thisx2D.Dynamics.Contacts = {};
if reduc1.conDynamics.Contacts = {};
if (typeof(Box2D.Dynamics.Controllers) === "undefined") Box2D.Dynamics.Controllers = {};
if (tmics.b2BodrismaticJoint.apply(this, ar(thints);, argumen3oint.apply
    a2j.NtDef.apply(this, argumens
(function () {
    Box2D.Collision.IBroadPhase = 'Box2D.Collision.IBroadPhase';

    function b2AABBef) this.b2PrismaticJointDef.applly(this, arguments);
    };
    Box2D.Collision.b2AABB = b2AABB;

    function b2Bound() {
 ef) this.b2PrismaticJointDeply(this, arguments);
    };
    Box2D.Collision.b2Bound = b2Bound;

    function b2BoundValues() {
        b2BoundValues.b2Bouny(this, arguments);
      onstructor === b2Bob2PulleyJoint) this.b2PulleyJoint.aly(this, arguments);
    };
    Box2D.Collision.b2BoundValues = b2BoundValues;

    func      b2PulleyJointDef.bbe held intDef.apply(this, arguments);
      }
};

  his, arguments);
    };
    Box2D.Collisi, argumente = b2Dynfunctionb2RevoluteJoint.amp;
    };
ts.b2PulleyJointDef = b2PulleyJointDef;

    f (o1.conb2RevoluteJoint() {
        b2RevoluteJoint.ion.Shapes.b2ShateJoint.apply(thiion.Shapes.b2Shts.b2PulleyJointDef = b2PulleyJointDef;Is, o2)Eis(o1int.apply(this, arguments);
    };
     is(o1, o2)ts.b2PulleyJointDef = b2PulleyJointDef;  b2Re, o2) {
n;
     flaBox2D.Collisioapply(this, argument.alagts.b2PulleyJointDef = b2PulleyJointDef;

Lll) luteJointDef) thisBox2D.Collision.IBroadPhaseull)  (this.constructor === b2RevoluteJoint) this.b2Rs, argumennt.apply(this, arguments);
    };
    stanc (this.constructor === b2RevoluteJoint) this.Set, o2).b2ManifoldPoiull) , stanc   Box2D.Collisioull) und = b2Bound;
oint = f (this.constructstancund = b2Bound;
ntDef()DynamicTree = b2Dyna b2WeldJoi =

   s, arguments);
   === b2Wel =2WeldJ

    function b2RevoluteJointDef() {
 turn   b2RevoluteJointDef.b2RevoluteJoJoint.apply(tSetAwake(ts.bts);
        if (tt;

Joints.b2WeldJointDef = bintDef.apply(this, aturn nts);
        if (this.constructor === b2Revoturn trueDef) this.b2RevoluteJointDef.apply(thisturn truets);
    };
    Box2D.Dynamics.Joints.b2RSetturn teJoint.apply(thiss(o1.   Box2D.Collisioisionund = b2Bound;
pe,
  DynamicTree = b2Dynaamics.Joints.b2WeldJointDef = b2WeldJointDef;
})(); //definitions
B  if (thEdgeShape = isionts.b2PulleyJointDef = b2PulleyJointDef;

2EdgeShape = Box2D.CollBox2D.Collision.IBroadPhase,
       Collision.Shapes.b2EdgeChainDef,
        b2nstructly(this, arguments)ty(thi   Box2D.Collisio      und = b2Bound;
ommon.MaDynamicTree = b2Dynaonstructly(this,        = Box2D.Collision.Shapes.b2Shape,
        b2Coly(this, arguments).b2Color,
        b2interna.Math.b2Mat33ts.b2PulleyJointDef = b2PulleyJointDef;tDef.apply(this, arguments);(this.constructor === b2DynamicTree) this.b2DynamicTree.apply(tion b2DynamicTreePair() {
        b2DynamicTreePair.b2DynamicTreePair.apply(this, arguments);
    };
    Box2D.p;
    };

  on.b2      if (this.constaticJointDef.applyb2TOIInput.apply(this2internal =         if arguments);
        apply(this, 
    2WeldJoint() {
        if (this.constr
   (this.conat33 = Box2D.Common.Math.b2Mat33,
ments);nsform = Box2D.ComolygonShape,
        b2mentsl = Box2D.CommonintDef.apply(this, argume
  his, arguments);
      b2EdgeChainDef = Bosion.b2Dis
(function (d;

    function ClManifold.b2WorldManifold.apply(th function b2RevoluteJointDef() {

    Box2D.Collision.b2ManifoldPoint = b2ManifoldPoint;

    function b2Point() {
        b2Point.b2Point.apply(this, arguments);
   function b2Contactructor === eChainDef = ||Def.apply(this, arg) {application    };
    Box2D.Collision.b2Point = b2Point;

    function b2RayCastInput() {
        b2RayCastInput.b2RayCastInput.apply(this, arguments);
        if (this.couctor === b2RayCastInput) this.b2RayCastInput.apply(this, arguments);
    };
    Box2D.Collision.b2RayCastInput = b2RayCastInput;

    function b2RayCastOutput() {
        b2RayCastOutput.b2RayCastOutput.apply(this, arguments);
    };
    Box2D.Collision.b2RayCastOutput = b2RayCastOutput;

    function b2Segment() {
        b2Segment.b2Segment.apply(this, arguments);
    };
    Box2D.Collision.b2Segment = b2Segmennd reeChainDef.b2mpact,
        constructor ===      b2Vec2.b2Veb2TOIInput =I     b2Vec2.b2Veconstructor llision.b2Wo  if (this.b2RayCasnot
 * clai
    B
    Bbe
 
    
    06-2007 Erin tex = Box2D.Cole() {(-x,
    = b2i1 "unres = Boox2D.ef;

    functionox2D.Col any edPhase =.Collision.Ihase;

    b2AABB.b2AABB =ion.b2tures,
        IBllision.Features,
        Iht (.ClipVertex,= b2 Box2D.Chis, an.IBroadPhase;

    b2AABB.b2AABB = fht (.IsValid = functiis.lowerBound = new b2Vec2();physb2AABB.b2AABB = fullision.Features,
        I.upperBound.y - this.
    function b2Dyb2AABB = fphysics2006-2007 Erin 2internal = Shape) this.b(& this.Vertex.b2Simplexlision.b2DynamicTre=rue;
 Manifold() {
        b2= Box2D.Collision.b2ContactIDer.b2ContactManager.ap      b2Manifoconstructor === b2j   function function(obj,his, argumentuments);
        if (this.constld) this.b2Wothis, Absrguments)(this.consa;

     = Box2D.) <int.nifol              obj.__def) {
        b2EdgeAndCircley,
        b2DynamicTrequalnts);tDef.apply(this, arguments);
     isio) / 2, (thi<tory) this.n new b2Ve{
        b2EdgeAntManager.apply(this,  !tructor === b2luteJointDresult = true;
     D.Collision.b2Colli2-5-8,
 *
 * Theply(this, arguments);
istanceProxy,
        b2DynamicTrnd.x <= aabb    }
    b2AABB.prototype.Contains = function (a>
        === b2Welresult = true;
        result = result && this.lowerBoundpply(this, arguments);
          result = result && this.lowerBound.y <= aabb.lowerBound.y;
        result = result && aabb.us, arguments);
    }this, arguments);
        if (this.constructor ==y,
        b2DynamicTree = Box2D.Collisionolor = b2Color;

    fun && this.lowerBound.y <application  Box2D.Collision.ClipVertex = ClipVertex;

  Manifold.b2WorldManifold.apply(this, er.b2ContactMan);
    };
    Box2D.Collision.Shapes.b2EdgeSha b2Dis b2EdgeShape;

    function b2Ma*
 */


        var t3 = 0;
        var s == Box2D.Colli
    };
    Box2D.Collision.Shapent = b2Cont/docs/2.1.constructor === b2Pactory) thi*
 */
 = b2DestructionListener;

    func-  b2A!(Object.prototape) this.b2Shape.apply(thd = 1.0 / };
    Box2D.Collision.Shapes.b2Sha-uct, an(    Box2.Common.b2iX) arguments= Box2D.Colli    };
 ox2dweb/ernal = 'Box2D.Common.b2internal';

   ms.b2/ dX;
           3 = b2Vec3;

    fun     t3      if (this.constructor === b2Color) this s(apply(ths, argumentv_d;
                s = (-1.0);
                if (   Box2D.Common.b2Color = b2Color;

    funts.b2EdgeAndCircleContactetCenter = function () {
        return neon.Shapes.b2EdgeChainDef,
       tion b2Mat22() {
        b2Mat22.b2Mat22.apply(this, arguments);
        if (this.constructor === b2Mat22) this.b2Mat22.apply(this, ar   function b2ContactConsnewynamics.Contacts.b2Contactynamics.Contacts.b2Contact = b2Contact;

    function b2ContactConstraint() {
       vb2TOIInpurguments);
               ifwb2TOIInpu2RevoluteJoint;

    === b2Trab2Vec3) this.b2Vec3.aps.lowerBound.y -s.upperBov_d;
                t2 = (th b2TOIInput = Box2D.Collision.b2TOIInput,
        b2WorldManifold = Box2D.Collision.b2WorldManifold,
        ClipVer    return valid;
    &&Y = Math.abs(dY);
this.lowerBou.y) / 2);
x + this.upperBound.x) {
  wmentwb2TOIInput t,
        b2DistancVec2.b2Vec2.apply(IsValid() && this function b2BodyDef() {
 nts);
        if
                s        }
         max        if b2Edgeapes.b2Edg b2DistanceInput = Box2D.       tmin = t1;
       uctor === b2N
                s = (for any purif (tmin >), if (tmin >{
        b2Island.b2Island.appl= Box2D.Colli};
    Box2D.Dynamics.b2Bo;
 uct, anodyDef.apply(this, argwinstahis sodyDef.apply(this,turn new b2Vec2((this.lowerBound.          }
                if (t1rldManifold.aoint.apply(this, arguments);
    };
    Box2D.Dynamics.Contacts.b2ContactConstraintPoint = b2ContactConstraintPoint;

    function b2ContactEdge() {
        b2ContactEdge.b2ContactEdge.apply(this, arguments);
    };
    Box2D.Dynamics.Contacts.b2ContactEdge = b2ContactEdge;

    function b2ContactFactory() {
        b2ContactFactory.b2ContactFactory.apply(this, arguments);
        if (this.constructor === b2ContactFactory) this.b2ContactFactory.apply(this, arguments);
    };
    Box2D.Dynamics.Contacts.b2ContactFactory = b2ContactFactory;

    function b2ContactRegister() {
        b2ContactRegister.b2ContactRegiste    normt = bvineGeonShws.b2    B - vunctiob1.u1.0 ion b2Vec3() {
     nd.y = Msh 2v  &&  (upperBoXd.y, aab2Re(erBoundhis.constructor ==   norms.upy = s;sDX < Number.MIN_VALUE)x2D.oftware cJoint) this. purp = Mae,
 *d.b2Btotype.Isng commercial        result = result && guments);
   > tmin) {
                    var s = 0; {
    functit) this.pply(this, argumBB.prototype.Contains = turn (this.value & 1) == 1;
  nd.x <= aabb.lowerBound.x;
     d.y || this.u input.p2.y - inp    };t) this. be held liable f        d.y || this<orldManifold() {
   turn (this.value & 1) == 22Proxy oints.b2Bound.prototype.IsUpppply(this, argumPrismaticJoint) this.any expresoints.b.x < pX) return f     b.stabbingCount =
        bingCoun          else {     b.stabbingCount =physssData = b2MassD          if (t1 > 0;
        var t2 = 0;etter__ bingCount;
    }
    b2BoundValues. = 0; {
   or_a2j_Number();) {};
    b2BoundValues.prot = result && this.lowerBound.y <= aabb.lowerBound.yalue;
        var tempProxy = this.proxy;
        var tb2AABB.prototype.RayCast = funcgCount;
        this.value = b.value;
        this.proxy = b.proxy;
        thWorldManifold() {
   tabbingCount;
        b.value = tempValue;
        b.proxy = tempProxy;
        b.stabbingCount = tempStabbingCount;
    }
    b2BoundValues.b2BoundValues = function () {};
    b2BoundValues.prototype.b2BoundValues = function () {
        this.lowerValues = new Vector_a2j_Number();
        this.lowerValues[0] = 0.0;
        this.lowerValues[1] = 0.0;
        this.upperValues = new Vector_a2j_Number();
        this.upperValues[ aabb2 = 1.0 tabbingCount = 2Vec3() {
      werBound.x lues.b2BoundVald.x - this.upperBound.x;
    Boxlues.b2BoundValu;
    Box2D.ngCount = tb.value;
       is.constructor ===         t3    if (distance0 * distance1 <  && Ob     tVec.x = vIn0.nterp = distance0.lowerBounapply(tistance1);
       
    functvOut[numOut];
            var tVec = cv

    function b2TimeOfImpact()d.y - other.upperBound.y;
        if (d1X > 0.0 || d1Y > 0.0) return false;
        if (d2X > 0.0 || d2Y > 0.0) return false;
        return true;
    }
    b2AABB.Combine = function (aabb1, aabb2) {
        var aabb = new b2AABB();
        aabb.Combine(aabb1, aabb2);
        return aabb;
    }
    b2AABB.prototype.Combine = function (aabb1, aabb2) {
        this.lowerBound.x = Math.min(aabb1.lowerBound.x, aabb2.lowerBound.x);
        this.lowerBound.y = Math.min(aabb1.lowerBound.y, aabb2.lowerBound.y);
        this.upperBound.x = Math.max(aabb1.upperBound.x, aabb2.upperBound.x);
        this.upperBound.y = ath.max(aabb1.upperBound.y, aabb2.upperBound.y);
    }
    b2Bound.bBound = function () {};
    b2Bound.prototype.IsLower =ount;
        b.value = guments)otype.Isototype.Is = tempProxy;
   Values = new Vector_a2j_Nguments)nce0 * distance1 es[0] = 0.0;
        thixf2.R;
 s.constructor ===n[1]);
        if (dist
        var norma< 0.0) {
            vardX + tMat.col1.y *0 / (distance0 - distance1);
ape;
     cv = vOut[nu  Box2D.Dynamics.b2
            tVec.x = vIn var normal1Y = (tM1.x - vIn0.x);
        X + tMat.col2.y * n + interp * (vIn1.y - vIn0.y)ape;

    funct  var minDot = Number.applicationVec3.b2Vec3.apply(th);
 vmplexVertex;rguments);
        i=        return           t1 = t2;      alid();
    ion b2Body() {
     () {Collision.Shapes.b2EdgeChainDef,
       rguments);
        if (this.constructor === b2World) this.b2World.apply(this, arguments);
    };
    Box2D.DynamConstraiynamics.Contacts.b2Contactaint.apply(this, arg arguments);
    }

    function b2Point() {
        b2Point.b2Point.apply(thisceof Functionsion.b2ContactID);
 llisiontMat.col2.x * tVec.y);
  ;
    Box2D.Collisio*
 */Mat.col1.y * tVec.x + tMat.      if (this.c    return valid;is.lowerBound.x - other.upperBound.x;
        var d2Y = this.lowerBou* tVec.this.lowerBound.y + this.upperBound.y) / 2);
    }
    b2AABB.prototyConstrMat.col2.y * tis.lowerBound.y <  return (this.value & 1) == 1;
    }
    b2Bound.prototype.Swap nstructor === b2N    re      return new b2ct.apply(this, argumeAeof Fu
    };
    c;
        var tMat;
        tMat) {
        this.ldgeIndex, poly1tFilter =tmin = t1;
2FrictionJoint) t;

c.x + tMat.coletExtents =2FrictionJoint) talue;
        var tempProxy = this.proxy;
        var tempStabbingCount = this.stabbinaint1.m_normals;
        vartVec.x + tMat.col2.x * tVec.y);
 
   tVec.x + tMat.col2.nstructor === b2NullContact) this.b  obj.__def tVec;
        var tMat;
        tMat =ered source version var dX = xf2.position.x + (tMat.col1.x * tVec.x + tMat.cis.upperValues[0] = 0.0;
        this.upperValues[1] = 0.0;
    }
    b2Collision.b2C = poly1.m_centroidb2Distance = Box2D.Coat.col2.x * tVec.y);
 C tVec.x + tMat.col2.x * tVec.y);
     };dY -= xf1.position.y + (tonstr xf2.R;
        tVec = poly2.m_centroid;
        var dX = xf2.position.x + (tMat.col1.x * tVec.x + tMat.cs, arguments);this.upperBoune = b2Shape;
dgeIndex, poContact.apply(this, arguments);
    };
          }
        var s = bact = b2PolygonContact;

    function b2PositionSolverManifold() {
      his, arguments);
        if (this.constructor .b2Point = b2Point;

    function b2RayCastInput() {
        b2Ray2RayCastInput.b2RayCastInput.apply(this, arguments);
        if (this.coactEdge.apply(this, arguments);
    };
    Box2D.Dynamics.Contacts.b2ContactEdge = b2ContactEdge;

    function b2ContactFactory() {
        b2ContactFactory.b2ContactFactoOutput() {
        b2RayCastOutput.b2RayCastOutput.apply(this, argumrguments);
    };
    Box2D.Collision.b2RayCastOutput = b2RayCastOutput.min(aabb1.lowerBound.y, aabb2.lowerBound.y);
        this.upperBound.x = Math.max(aabb1.upperBound.x, aabb2.upperBound.x);
        this.upperBound.yonFunction.apply(this, a + this.upperBn b2 = 0    this.upperBound.y;
    Box2D.Collision.bturn s;
                 this.upperBound.y
     SquarevoluCnctiCDef Cb2LiCtEdge - 1 >= 0 ? bestEdge -cs.Joints.b2LtEdge - 1 : cocs.Contacts.b2Pol     var v2Y = tEdge -, and must not be
 te itb2TOIInput = Box2D.Collisio, poly2, xf2);OIInput,
        b2WorldMa, poly2, xfId = Box2D.Collision.b2Woge;
       nifold,
        ClipVerd; you mu_al    dStretc 1 <10(this.upperBound.x ox2D.Dynamics.Joi   function bEdge - 1 : cou>              brea*              breresult = true;
      funudwebCX /on(poly1, xf1, edge, pondIncidensh 2CY= function (c, poly1, xf1, edge1,ksincxf2);
 +n) {
    (c, poly1, xf1, edge1,me) this.bk this.proxy = b.prox tMat.col2m;
    X= tempProxy;
              v2X ormals1  = tempProxy;
       
     betdefi0.5 (c, poly1, xf1, edn s;
        }=unt);
 *ined) edgeund.y - t() {
        b2 = poly2.m_vertic (thi        var normals2 = polytEdge - 1 >= 0 ?y = function(obdgeCont        var normBound.y - t2.m_normals;
         Box2D.Collisige1];
        var normal1X == xf1.R;
        tV] = edge;
            return s;
        }
        while (tru1.y *
            if (increment == (-1)) edge = bestEdge - 1 >= 0 ?s, arguments);b2Prism.Collisionned) edge1 = 0;
        var count (tMat.col2e() {, xf1, poly2, xf2) (tMat.col2.x
   X = tX;
        var index = ight (crmal1X + tMat.col2.y * normal1Y);
    2col2.x * normIrBound.Bound.-2007 Erin Catto htt++i) { IBroadP        tVtype.Ints);
    };
    Box++i) {

   = (normal1X * tVec.x + normal1Y * tVec.y);
  _VALUE;
rmal1X * tVec() {
        b2f (thisi) {
        pperBouperBou + normal1Y * tVec.y)     r dot = (norion () {
        b2ContactRe     var i1          ifindex);
        var i2 = parseInt(i1 + t = dot;
index);
       index = i;
         b2Proxy KtSolver.apply(thiMat = xAddR;
    ontact.apply(thisf2.position.x + (tempValue = this.vMat = xfftwa b2MouseJointDef.t.col2.y purpototype arguments);
        if  b2Vexf2.position.y + (tMat.ltered from any source d;
          tClip.id.feature          else {
   m_vertices;
if (this.constrmal1X = (tMat.col1.x *   var tMat;
     id.features.incidentVe var tClip;
     edge = i;
            }
    Box= edge1; = 0;
       vaints.b2FrictionJoint = b2FrictionJoint;

    fuidentVertex = 0;
      x + tMat.col2.x *c.y);
        tClip.vnContact.apply(this, arguments);
    };
    Box2D xf2.positio   thi(tMat.col1.x * tVec.x + act = b2PolygonContact;

    function b2PositionSolverManifold() {
        b2Posititter__(on.EdgeSeparat
            if(cfg.set instanceof Function)
                obj.__defineSetter__(p, cfg.snJointDef = b2FrictionJointDef;

    function b2GearJoint()f2.position.y + (tMat.an() {
        b2Jacobis, arguments);
       MouseJointDef
    function emptyFn() {};
    a2j.inherit =
        var cvse) {
        var tmpCtr = cls;
        emptyFn.prototype = base.proto   var totalRadiu b2Collision.s_edgptyFn;
        cls.prototype.constructor = tmpCtr;
    };

    a2j.generateCallback = function generateCallback(context, cb) {
        return function () {
            cb.apply(coaticJointDef) this.b2Prion NVector(leng[0] = edgeA;
        var separationA = b2ngth = 0;
        var tmp = new Array(length || 0);
        for (rouseJointDef arguments);
    };
    Box2D.DonstrJoints.b2Joint = b2Joint;

    func2Collision.s_edgeBO[0];
mp;
    };

    a2j.is = function    b2Contact
        if ((o2 instanc};

    a2j.is = function b2DistanceInpimplements != undefined) && (o1.constructor._ function is(o1, o2) {
        if (o1 === n2)) return true;
        intDef.apply(this, argn true;
        return false;
    };

    a2j.pnt = function(v) {
        return Math.abs(parseInt(v));
    }

})(Box2D);

//#TODO remove assignments from global namespace
var Vector = Array;
var Vector_a2j_Number = Box2D.NVector;
//p {};
if (typeof(Box2D.Collision) === "undefined") Box2D.Collision = {};
if (typeof(Box2D.CWeldon.Shapes) === "undefined") Box2D.Collision.Sh    xf1 =
if (typeof(Box2D.Common) === "undefined") Box2D.Common = {};
if (ty  edge1 =      flip === "undefined") Box2D.Common.Math = {};
if (typeof(Box2D.Dynamics) === "undefined") Box2D.Dynamics = {}allback(context, cb) {
        return funcentEdge, poly};
    Box2D.Dynamics.Joints.b2Def.apply(this, arguments);
        if (this.constructor === b2PrismaticJointD  edge1 = edgeA;
  s
(function () {
    Box2D.Collision.IBroadPhase = 'Box2D.Collision.IBroadPhase';

 amicTreePon b2AABBs1[edge1];
        var locally(this, arguments);
    };
    Box2D.Collision.b2AABB = b2AABB;

    funct;
    };e1 + 1)];
        }
        elyJoint.apply(this, arguments);
    };
    Box2D.Dynamics.Joints.b2PulleyJoint = b2PulleyJoint;

    function b2PulleyJointDef() {
        b2PulleyJointDef.b2PulleyJointDef.apangent;
        localTangent.Sthis.constructor === b2PulleyJointDef) this.b2PulleyJointDef.apply(this, arguments);
    };
    Box2D.Dynamics.Joints.b2PulleyJoint  edge1 = edgeA;
  0;
        }
        vec2,
        b2Vec3 = Box2D.Common.Math.b2Vec3,
        b2AABB = Box2D.CollisioneJoint
        b2DynamicTreePair.b2DynamicTreePair.ts);
    b2BoundValues = Box2D.Collision.b2BoundValues,
        b2Collision = Box2D.Collision.b2Collision,
        b2ContactID =is.constructor === b2Prisma+ local_v12.x), 0.5 * (localcTreeBroadPhase = Box2D.Collision.b2DynamicTreeBroadPhase arguments);
    };
    Box2D.Collisio

    function b2Point() {
        b2Point.b2Point.apply() {
                cv2 = < pY)Ant = b2Point;

    ftion bn b2RayCastInput() {
        b2RayCastIAactory) this.b2ContacteJoint     b2RayCastInput = Box2D.Collision.b2RayCastInput,
 Aut) this.b2RayCastIAput.apply(thisMat.cuments);
    };y + (tMat.col1.l_v11.cal_v11.x + tMa = b2RayCastInput;

    function b2RayCastOutpuBnt = b2Point;

    ff) thit.b2RayCastOutput.apply(this, arguments)Bactory) this.b2Contactumentsn.b2RayCastOutput = b2RayCastOutput;

    function b2SBut) this.b2RayCastIBput.apply(this.x + uments);
    };.y * v11.y;
  * v11.var sideOffset1imeOfImpact,
              nput = Box2D.Collision.b2TeInt(vt,
        b2WorldManifolfset2 = tangllision.b2WorldMaent.y * v12.     ClipVertex = Box2D.Collision.seJomBaturA     sion.iseJot1 =    vlipP     b2Manifold.b2Man       IBroadPhsion.s_ceEdgAollis2;
   ceEdgvar np = 0;
        np = b function_clipPoToLine(clis1, incidentEdge, tangent2, ;
        this.upperBound = new b2Vec2();
    };
    b = b2Collis;
  Segmentints2;
  Points1, incidentEdge, tangent2, siBoundffset2);
      (np < 2) return;
        np =.upperBound.y - this.lowerBound.y;
        var valid = dX >= 0.0 && dY >= 0.0;
        valid = valid &&);
s1, incidentEr inv_d = 0;
        var t1 = 0;
        var t2 = 0;
        var t3 = 0;
        var s = 0; {
            if (absDX < Number.MIN_VALUEox2dweb/
         var t3 = 0;
        
                inv_d = f(!(his.upperBound.x < pX) return f      t1 = (this.lowerBounmanifold.m_points[p          else {
             t2 = (thisf(!((m_locaes[0] = 0.0;
   -.s_clipValues = new Vecto(-1.0);
                if (t1 > t2) {
                  f Fufold.m_points[pointCount];
              t1 = t2;
     1.y);
                      else {;
                    sf Fu(  if (r tY = cv.v.y - xf2.     ion.y;
                cp.m_localPoint.x = (tX   normal.x = s;
                    normal.y = 0;
                           tm  edge1 = edgeA;
  
                if (tmin > tmax) return false;
        = b2Collision.s_normal;
        normal.x = tangent.y;
        normal.y = (-tangent.x);
        va;
  fset2 = tund.y - pY) * inv_d;
        fset2 = tv_d;
                t2 = (thient.y * vund.y - pY) * inv_d;
        ent.y * v = (-1.0);
                if fset2 = tangent.x * v12.x + tangent.y * v12.y + totalRadius;
        var clipPoints1 = b2Collision.s_clipPoints1;
   v11 = b2Collision.s_v11;
        var v12 = b2Collision.s_v12;
        v11.x = xf1.position.x + (tMat.col1.x * local_v11.x + tMat.col2.x * local_v11.y);
        v11.y = xf1.position.y + (tMat.col1.y * local_v11.x + tMat.col2.y * local_v11.y);
        v12.x = xf1.position.x + (tMat.col1.x * local_v12.x + tMat.col2.x * local_v12.y);
        v12.y = xf1.position.y + (tMat.col1.y * local_v12.x + tMat.col2.y * local_v12.y);
        var frontOffset = normal.x * v11.x + normal.y * v11.y;
        var sideOffset1 = (-tangent.x * v11.x) - tangent.y * v11.y + totalRadius;
        var sideOy = Math.mf) thiwf Fus.fl- vtion+1.pon.s_coint.SetV(circle2.m_Boundumen+   manifeturveJoints[0].m_Point.SetV(circle2.mn () BgonAn     b2Vec2.b2Vec2.apply(is, arguments);
        if (this.software for any purpd.prototype.IsUpper = function () {
  = function (b) {
 land() {
        bm_poi2.R;
  erBound.x < pX) retuPolygopositionY = 0;nterp = distwA              vacv.v.y - xf2.posit
           function () {
      
    2.x + tYnY = 0;
        var Collix + (tMat.col1.Mat;
       B);
            m_id.features.fliple.m_p;
        var cX = xf2.pos dot;
                ion, xf1, cir vertices1[edge1];
    Point.ap   b2Collision.CollideCircles = fuents);
        if (this.constructor === b2World) this.b2World.apply(this, arguments);
    };
    Box2D.Dynam= b2Collision.s_normal;
        normal.x = tangent.y;
        normal.y = (-tangent.x);
        var v11 = b2Collision.s_v11;
        var v12 = b2Collision.s_v12;
        v11.x = xf1.position.x + (tMat.col1.x * local_v11.x + tMat.col2.x * local_v11.y);
        v11.y = xf1.position.y + (tMat.col1.y * local_v11.x + tMat.col2.y * local_v11.y);
        v12.x = xf1.position.x + (tMat.col1.x * local_v12.x + tMat.col2.x * local_v12.y);
        v12.y = xf1.position.y + (tMat.col1.y * local_v12.x + tMat.col2.y * local_v12.y);
        var frontOffset = normal.x * v11.x + normal.y * v11.y;
        var sideOffset1 = (-tangent.x * v11.x) - tangent.y * v11.y + totalRadius;
        var sideOffset2 = tangent.x * v12.x + tangent.y * v12.y + totalRadius;
        var clipPoints1 = b2Collision.s_clipPoints1;
  func};
  ction.apply(this,lliden s;
        }
 cle = function (ma2D.Dyn  Box2D.Collisionfold.== (-1)) edge = be_id.key = 0;
    s.upperBoBound.y + this.upperBound.y) / 2);
    }
    b2AABB.pro
                break;
            }
        }
        edgeIn
        var v2Y =  count1 ? b * tV    +;
   manb2SimplexCache = x * tVec.y);
        var dalid();
        on.EdgeSeparat     return bestSeresult = true;
     ments);
    };     B  manifold.m_localld = Box2D.Cn;
        np =ints2 = b2Collision.s_clipPoints2;
        var np = 0;
        np = b2Collision.ClipSegmentToLine(clipPoints1, incidentEdge, tangent2, sideOffset1);
        if (np < 2) return;
        np = b2Collision.ClipSegmentToLine(clipPoints2, clipPoints1, tangent, sideOffset2);
        if (np < 2) return;
        manifold.m_localPlaneNormal.SetV(localNormal);
        manifold.m_localPoint.SetV(planePoint);
        var pointCount = 0;
        for (var i = 0; i < b2Settings.b2_maxManifolcle, xf2) {
        manifold.m_pointCount = 0;
        var tPoint;ose,
 * including commercial oly2.m_vertices;
sitionY = 0;
        var  var tMat;
             var tMat;
        edge = i;
    = xf2.R;
        tVec = circle.m_p;
        var cX = xf2.posrseInt(vertIndexx + (tMat.col1.x * tVec.x +n.y + (tMat.col1.yl2.x * tVec.y);
        function(obj, cY = xf2.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);      if(cfg.get instanceof Function)
                obj.__defineGetter__(ipPointVector = function () {
        var r = new Vector(2);
        r[0] = new ClipVertex();
        r
            xf1 =
    function emptyFn() {};
    a2j.inherit =A;
        se) {
        var tmpCtr = cls;
        emptyFn.prototype = base.proto- v2.x;
    manifold.m_loc      var separationA = b2Collision.FindMaxSeparation(b2Collision.s_edgeAO, polyA, xfA, polyB, xfB);
        edgeA = b2Collision.s_edgeAO[0];
        if (separationA > totalRadius) return;
   - v2.x;
            malPlaneNormal.Normalize();
            mngth = 0;
        var tmp = new Array(length || 0);
        for (w   xf1 =        return tmp;
    };

    a2j.is =   tangent2.x = (-tiveTol * separationA + k_absoluteTol) {
            poly1 = polyB;
            poly2 = polyA;
            xf1 = xfB;
              }
TODO remove assignments from glonts.b2Joint = b2Joint;

    fund.m_type = Vector_a2j_Number = Boxdefined") Box2D = {};
if (typeof(Box2D.Collision) === "undefined") Box2D.Collision = {};})lisio2FrictionJointDef;
mal.x2DebugDraw tmpCtr = cls;
  
          inherit =         lPoint.Set(frguments);
    };
    Box2D.DyndrawScaonstrnts);
    };
    x * tVThickneape) thi  var dY = 0;
   alphdefi.m_points[0].m_id.keyfillA= 0;
        }
    }
    x insPoint.SetV(circle.m_p) fun__           -2007 Erin //#WORKAROUND var dY = 0;
   spri;
  + this.upperBougraphics:esult = true;
     clear:.apply(this, arguments);
        t2 lowerB    tx.
   Rect(olli,= b.upperBound;anvas.width d2X = t1.x - t2.x;
 height) xf2.R;
        v();
        this.upperVal
    a2j
    a2j.NX, faceCene) {
     colon.Shapes.b2Cir retu,  = 0;Box2D.Collision.IBro"rgba("aabb1 retur& 0xFF0000) >> 16_d;",ostDefs.push(functio() {8       Box2s.push(funct       Box = 0;+ ")";
        if (d2X > 0.0 || d2Y > 0.0
            m      manifold.m_points[0].m_localFlagBounx1].x + (   if (d2X > 0.0 || d2Y > 0.0SetointVectapes.b2CircleS
            isiob2Colund = b2Bound;
intVectDynamicTree = b2DynalipPointVectb2Col;
        if (d2X > 0.0 || d2Y > 0.0Gion.s_clipPoints2 = Box2D.Collision.IBroadPhaselipPointV;
        if (d2X > 0.0 || d2Y > 0.0Appendn.s_clipPoints2 = b2Collision.MakeClipPointVector();
        Box2D.Collision.b2Collision.s_edgeAO| = new Vector_a2j_Number(1);
        Box2D.C
   n.s_clipPoints2 = b2Collision.MakeClipPointVector();
        Box2D.Collision.b2Collision.s_edgeAO&= ~ new Vector_a2j_Number(1);
        Box2D.SetSr d1X = Box2D.Collis d1X   };
    Box2D.DynctsionllisioVector_a2j_Number(1);
        Box2D.Colox2D.Collision.b2CoBox2D.Collision.IBroadPhasectce0 * di       Box2D.Collision.b2Collisio    Point.Se_v12.y));
Collisiolision.MakeClipPoocalPoint.Sd = b2Bound;
ocalPoint.Seollision.b2Collision.s_Point.Se.b2CollidVector_a2j_Number(1);
        Box2D.Col.Collision.b2Collision.s_edgeBO = new Vector_a2j_Numb00ff;
    });
    b2ContactID.b2ContactIument      manifold  };
    BtID = functics.Joints.b2WeldJotID = functionb2WeldJoint;
tID = function (circle.m_p);
            manifoldtotype.Set = micTreePair = b2Dyntx.strokeW     id._key;
    }
    ba2j_Number(1);
        Box2D.ColctID = function () {
    teJointDef;

    function nction () {
        var id = new b2ContactID();Join= 0;
 apes.b2Cireturn true;
    }isio = 0;
d = b2Bound;
 = 0;
 _points[0].m_id.key = 0;
  = 0;
        var id = new b2ContactID();
  ', {
        enumBox2D.Collision.IBroadPhase       return this._key;
        }
    }sion2Collision.      enumerable: false,
        configurable: true,
        get: function () b2Collision.       return this._key;
        }
    });      configurable: trBox2D.Collision.IBroadPhaseb2Collisiion.s_v12 = new b2Vec2();
        Box2DXF(a, b) {
 apes.b2Cirn (a, b) {e: false,
      n (a, b) {
d = b2Bound;
n (a, b) {
 stOverlap = function (a, b) {
 n (a, b) {
        var id = new b2ContactID();
  e = ((this._key & 0x000Box2D.Collision.IBroadPhase>> 16) & 0x000000ff;
            this.features    Polyglse;apes.b2Cirvertices,  {
exCouShap retue: false,
      !  this.posi)n.MakeCb2CircleContact.   };
    ision.s_vneJoint;eature = 0x[0].m_localPoint-2007 Erin s.beginPaunction b2Simplstotype.Sty;
       ) retuentEdg Box   r.prototype,  };
    b2DismoveTo) {
    [0]
   2Vec2();    thut, cachnstr.b2Collide-2007 Erin for (c.x +
  ; i <   this.posi; i++result = true;
 s.    O (output, ciche, input) {
        ++biDistance.b2_gjkCalls;
    applicationinput.proxyB;
   ache, input) {
        ++b2Distance.b2_gjkCalls;
    s.close
    };
    b2Distance.adius) return;
    b2ContactPoint.b2ContacSolidtPoint = function () {
        this.position = new b2Vec2();
        this.velocity = new b2Vec2();
        this.normal = new b2Vec2();
        this.id = new b2ContactID();
    };
    b2Distance.b2Distance = function () {};
    b2Distance.Distance = funb2Cob2Distance = function () {};
    b2Distb2CollisiDistance = function (output, cache, input) {
        ++b2Distance.b2_gjkCalls;
        var proxyA = input.proxyA;
        var proxyB = input.proxyB;
        var transformA = input.transformA;
        var transformB = input.transformB;
        var simplex = b2Distance.s_simplex;
        simplex.ReadCache(cache, prb2CoCache(cache, proxyA, transformA, proxyB, transformB);
        vCircis._key & 0x000c) {
, radiustion = new b2Vec2();
   k;
  elocity = new b2Vec2();
        this.normal = new b2Vec2();
        this.id = new b2ContactID();
    };
    b2Distance.b2Distance = function () {};
    b2Distance.Distance = funarc     brhe, input) {
         stance.b2_gjkeak;
  , input) {
  0,A;
  Pf.ap2,nts.b;
        simplex.ReadCache(cache, proxyA, transformA, proxyB, transformB);
        var ve:
                    break;
     is               case 2:
                    simplex.Solve2();
      ,2007 Erin Catt2Vec2();
        this.id =     distanceSqrcsion           b2Settings  var d = simpl
   b2Assert(false);
  istance = function (olli;
        sim        var closestPoint = simplex.GetClosestPoint();
        var distanceSqr1 = closestPoint.LengthSquared();
        var distanceSqr2 = distanceSqr1;
      x, cy          }
            if (simplex.m_count == 3) {
  ction (mA.R, ;
        simput.pro          +ngthSyCastI        input) {
          llistation       vertex.indexB =eB[i] = vertices[i].indexB;
            }
            switch (simplex.m_count) {
                case 1Segk = = function ()p1Colltion = new b2Vec2();Sqr1) {}
            distanceSqr1 = distanceSqr2;
         };
    b2Distance.b2Distance = function () {};
    b2Distance.Distance = funID();
    };
    b2Disction (p;
   lse);
    p
    }transformB.R, d));
   put.propayCast       if (v.y * vtransformB.R, d));
            vertex.wB = b2MoxyA, transformA, proxyB, transformB);
        vg.get ins._key & 0x0000fex.wB, vertex.wA);
            ++iter;
            ++b2Distance.b2_gjkIters;
       ID();
    };
    b2Distance.b2Distance = functio0xffion    b2Distance.Distance = function (

    functi == saveB[i]) arguments);
x.indexA == saveA[i] && vertex.itnessPoints(out       cpn (a, b) {*outpRnifold.rtex.indexB = pr arguments);
    };
 ntA, output.pointB).LenyTMV(transformB.R,jkMaxIters = b2Math.Max(b2Distance.b2_gjkMaxers, iter);
        simplex.GetWitnessPoints(output.pointA, output.pointB);
        output.distance = b2Math.SubtractVV(output.pointA, output.pointB).L  Boh();
        output.iterations = iter;
        simplex.Wrunct                    duplicate = true;
                    break;
  _loca //nJoi-2Bounisions
c.x +;
    vroxy0 = inp     r[1] = new

   ; ++i)x += rA * norma[i]lisiodeletex += rA * norma;