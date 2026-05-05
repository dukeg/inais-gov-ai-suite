import Fastify from 'fastify';import cors from '@fastify/cors';
const app=Fastify({logger:true});await app.register(cors,{origin:true});
app.get('/health',async()=>({ok:true,service:'inais-ai-orchestrator'}));
app.post('/route',async(req:any)=>{const text=req.body?.input||'';const highRisk=/medical|court|legal|health|police|identity|benefit/i.test(text);return{agent:highRisk?'human_review_ai_agent':'general_public_service_agent',risk:highRisk?'high':'low',response:'V0.1 safe AI routing placeholder. Connect LLM/RAG providers here.',citations:[],auditRequired:true};});
app.listen({host:'0.0.0.0',port:4100});
